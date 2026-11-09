import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const checks=[];
function check(name,ok,detail){checks.push({name,status:ok?'PASS':'FAIL',detail});}
function read(f){return fs.readFileSync(path.join(root,f),'utf8');}
function csv(text){const out=[];let row=[],v='',quoted=false;for(let i=0;i<text.length;i++){const c=text[i];if(c==='"'){if(quoted&&text[i+1]==='"'){v+='"';i++;}else quoted=!quoted;}else if(c===','&&!quoted){row.push(v);v='';}else if(c==='\n'&&!quoted){row.push(v.replace(/\r$/,''));if(row.some(Boolean))out.push(row);row=[];v='';}else v+=c;}if(v||row.length){row.push(v);out.push(row);}if(quoted)throw Error('Unclosed CSV quote');const [h,...r]=out;return r.map(c=>{if(c.length!==h.length)throw Error('CSV width');return Object.fromEntries(h.map((k,i)=>[k,c[i]]));});}
const rows=csv(read('data/outlook-coding-2026-11-09.csv'));
const sources=JSON.parse(read('data/outlook-sources-2026-11-09.json'));
check('Outlook records',rows.length===21&&new Set(rows.map(r=>r.record_id)).size===21,rows.length+' unique-expected records');
check('Outlook source grid',sources.length===3&&new Set(sources.map(s=>s.id)).size===3&&sources.every(s=>{const r=rows.filter(r=>r.source_id===s.id);return r.length===7&&new Set(r.map(x=>x.category)).size===7;}),'Three source versions, seven categories each');
check('Outlook fields and ranges',rows.every(r=>Object.values(r).every(v=>v.trim())&&['actionability','evidence_specificity'].every(k=>/^[0-3]$/.test(r[k]))&&r.applicability==='A1'&&r.scenario==='O23397-C'&&r.coding_date==='2026-11-09'&&sources.some(s=>s.id===r.source_id)),'Required fields, source references and ordinal ranges');
function mdRows(s,prefix){return s.split(/\r?\n/).filter(l=>l.startsWith('| '+prefix)).map(l=>l.split('|').slice(1,-1).map(c=>c.trim()));}
const baseline=execFileSync('git',['show','3fb0fb1:data/pilot-coding-worksheet.md'],{cwd:root,encoding:'utf8',maxBuffer:10*1024*1024});
const old=mdRows(baseline,'P3400-'),pan=mdRows(read('data/pilot-coding-worksheet.md'),'P3400-'),move=mdRows(read('data/moveit-pilot-supplement-2026-11-03.md'),'M34362-');
check('PAN-OS original rows and provenance',old.length===70&&JSON.stringify(old)===JSON.stringify(pan),'All 70 record fields, scores and original Codex-assisted labels compared to 3fb0fb1');
const originalMove=mdRows(execFileSync('git',['show','3fb0fb1:moveit-pilot-supplement-2026-11-03.md'],{cwd:root,encoding:'utf8',maxBuffer:10*1024*1024}),'M34362-');
check('MOVEit original rows preserved',JSON.stringify(originalMove)===JSON.stringify(move),'All 84 original record rows match baseline');
check('MOVEit record grid',move.length===84&&new Set(move.map(r=>r[0])).size===84&&new Set(move.map(r=>r[1])).size===12,'84 records and 12 source units');
const max=[];for(let n=1;n<=7;n++){const c='E'+n;const p=pan.filter(r=>r[3]===c),m=move.filter(r=>r[2].split(' ')[0]===c),o=rows.filter(r=>r.category===c);max.push({category:c,pan:[Math.max(...p.map(r=>+r[7])),Math.max(...p.map(r=>+r[8]))],moveit:[Math.max(...m.map(r=>+r[3])),Math.max(...m.map(r=>+r[4]))],outlook:[Math.max(...o.map(r=>+r.actionability)),Math.max(...o.map(r=>+r.evidence_specificity))]});}
const outDoc=read('data/outlook-pilot-2026-11-09.md');check('Outlook summary maxima',max.every(x=>new RegExp('\\| '+x.category+' \\| '+x.outlook[0]+' \\| [^\\n]+ \\| '+x.outlook[1]+' \\|').test(outDoc)),'Seven separate maxima compared to CSV');
const bytes=fs.readFileSync(path.join(root,'data/kev-snapshot-2026-10-28.json')),sha=crypto.createHash('sha256').update(bytes).digest('hex'),kev=JSON.parse(bytes);
check('KEV byte identity',sha==='2d9931c086e42d05425c2da924299c8d9b7ff836de373f981668b7ef5f6f0fd7',sha);
check('KEV count and selected cases',kev.count===1760&&kev.vulnerabilities.length===1760&&new Set(kev.vulnerabilities.map(v=>v.cveID)).size===1760&&['CVE-2024-3400','CVE-2023-34362','CVE-2023-23397','CVE-2021-34527','CVE-2021-44228'].every(id=>kev.vulnerabilities.some(v=>v.cveID===id)),'1760 unique entries; all five selected CVEs present');
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.name==='.git'?[]:e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
const reportFile=path.join(root,'analysis/2026-11-09-validation-report.md');if(!fs.existsSync(reportFile))fs.writeFileSync(reportFile,'Validation report pending execution.\n');
const bad=[];let linkCount=0;for(const file of walk(root).filter(f=>f.endsWith('.md'))){for(const m of fs.readFileSync(file,'utf8').matchAll(/\]\(([^)]+)\)/g)){const t=m[1].split('#')[0];if(!t||/^[a-z][a-z0-9+.-]*:/i.test(t))continue;linkCount++;if(!fs.existsSync(path.resolve(path.dirname(file),decodeURIComponent(t))))bad.push(path.relative(root,file)+' -> '+t);}}
check('Relative Markdown file links',bad.length===0,linkCount+' local link occurrences checked; '+bad.length+' unresolved');
check('Consolidated locations',!fs.existsSync(path.join(root,'pilot-coding-worksheet.md'))&&!fs.existsSync(path.join(root,'source.md'))&&!fs.existsSync(path.join(root,'kev-snapshot-2026-10-28.json')),'Authoritative data files reside under data/');
const review=csv(read('data/researcher-review-2026-11-09.csv'));
const validIds=new Set([...pan.map(r=>r[0]),...move.map(r=>r[0]),...rows.map(r=>r.record_id)]);
check('Review overlay references',review.length===162&&new Set(review.map(r=>r.record_id)).size===162&&review.every(r=>validIds.has(r.record_id)),'154 historical records and eight highlighted Outlook records');
const revisions=csv(read('data/score-revisions-2026-11-09.csv'));
check('Follow-up decisions applied',revisions.length===3&&review.filter(r=>r.decision.includes('Q20=A')).length===2&&review.some(r=>r.record_id==='M34362-007'&&r.decision.includes('Q19=A'))&&review.filter(r=>r.decision.includes('Q12=B')).length===7,'MOVEit and Outlook decisions resolved; seven historical-version limitations retained');
const revisedMove=move.map(r=>{const a=[...r],o=revisions.find(x=>x.record_id===r[0]);if(o){a[3]=o.current_actionability;a[4]=o.current_evidence_specificity;}return a;});
const e7=revisedMove.filter(r=>r[2].split(' ')[0]==='E7');
check('Current MOVEit E7 maxima',Math.max(...e7.map(r=>+r[3]))===2&&Math.max(...e7.map(r=>+r[4]))===3,'Current E7-T 2/3; original November 3 maxima 0/0 preserved');
check('Reported review dates kept distinct',review.every(r=>r.decision_received==='2026-11-09'&&r.source_inspection_date==='Not supplied'),'Receipt date does not substitute for unknown source-inspection dates');
const report={score_revisions:revisions,current_moveit_e7:{actionability:2,evidence_specificity:3,source:'N34362-S001',facet:'T'},date:'2026-11-09',baseline:'3fb0fb1174e3c4ef94769513f012ca905ad49200',checks,maxima:max,broken_links:bad};
fs.writeFileSync(path.join(root,'analysis/2026-11-09-validation-results.json'),JSON.stringify(report,null,2)+'\n');
const text='# Repository validation — November 9, 2026\n\nGenerated by running node analysis/validate-repository.mjs from the repository root. Checks are structural and arithmetic, not independent semantic coding or human review.\n\n| Check | Status | Detail |\n|---|---|---|\n'+checks.map(c=>'| '+c.name+' | '+c.status+' | '+c.detail+' |').join('\n')+'\n\n## Recalculated original-series maxima\nA/E denotes separate actionability and evidence-specificity scores, not an aggregate.\n\n| Category | PAN-OS A/E | MOVEit A/E | Outlook A/E |\n|---|---|---|---|\n'+max.map(r=>'| '+r.category+' | '+r.pan.join('/')+' | '+r.moveit.join('/')+' | '+r.outlook.join('/')+' |').join('\n')+'\n\n## Current accepted MOVEit revision\nFollow-up 19=A changes M34362-007 to E7-T 2/3. Applying the score-revisions CSV gives current MOVEit E7 maxima 2/3 from N34362-S001. The table above preserves original-series maxima. Follow-up 20=A accepts the existing Outlook preservation/recovery values.\n\n## Scope\n70 PAN-OS + 84 MOVEit + 21 Outlook = 175 document-category records. Outlook covers three primary documents only; linked-source screening remains incomplete. Full raw historical PAN-OS captures are not present. This check does not validate external availability, passage interpretation, review decisions or complete source discovery. Relative file paths are checked; Markdown fragment anchors are outside this check.\n\n[Machine-readable results](2026-11-09-validation-results.json).\n'+(bad.length?'\n## Unresolved paths\n'+bad.map(b=>'- '+b).join('\n')+'\n':'');
fs.writeFileSync(reportFile,text);console.log(checks.map(c=>c.status+' '+c.name+': '+c.detail).join('\n'));if(checks.some(c=>c.status==='FAIL'))process.exitCode=1;
