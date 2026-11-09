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

const categories=Array.from({length:7},(_,i)=>'E'+(i+1));
const sameSet=(a,b)=>JSON.stringify([...new Set(a)].sort())===JSON.stringify([...new Set(b)].sort());
const ordinal=v=>/^[0-3]$/.test(String(v));
const completeGrid=(data,sourceColumn,categoryColumn,units)=>new Set(data.map(r=>r[sourceColumn])).size===units&&[...new Set(data.map(r=>r[sourceColumn]))].every(s=>{const rr=data.filter(r=>r[sourceColumn]===s);return rr.length===7&&sameSet(rr.map(r=>r[categoryColumn].split(' ')[0]),categories);});
check('PAN-OS full grid and metadata',completeGrid(pan,2,3,10)&&pan.every(r=>r.length===16&&r.every(Boolean)&&r[1]==='CVE-2024-3400'&&r[4]==='A1'&&ordinal(r[7])&&ordinal(r[8])&&r[14]==='2026-10-28'),'Ten source units, all seven categories, 16 complete fields and valid scores/dates');
check('MOVEit full grid and numerical ranges',completeGrid(move,1,2,12)&&move.every(r=>r.length===7&&r.every(Boolean)&&ordinal(r[3])&&ordinal(r[4])),'Twelve source units and all seven categories; complete rows and 0–3 values');
const panRegistered=[...read('data/source.md').matchAll(/^\| (S\d{3}) \|/gm)].map(m=>m[1]);
const moveRegistered=[...read('data/moveit-pilot-supplement-2026-11-03.md').matchAll(/^\| (N34362-S\d{3}) \|/gm)].map(m=>m[1]);
check('Historical source references',pan.every(r=>panRegistered.includes(r[2]))&&sameSet(move.map(r=>r[1]),moveRegistered),'Every scored PAN-OS/MOVEit source has a register entry');
function summaryMatches(data,catCol,aCol,eCol,sourceCol,summary,summaryCat,summaryA,summaryAS,summaryE,summaryES){return summary.length===7&&sameSet(summary.map(r=>r[summaryCat]),categories)&&summary.every(s=>{const rr=data.filter(r=>r[catCol].split(' ')[0]===s[summaryCat]);const a=Math.max(...rr.map(r=>+r[aCol])),e=Math.max(...rr.map(r=>+r[eCol]));const ids=t=>t.split(',').map(x=>x.trim());return +s[summaryA]===a&&+s[summaryE]===e&&sameSet(ids(s[summaryAS]),rr.filter(r=>+r[aCol]===a).map(r=>r[sourceCol]))&&sameSet(ids(s[summaryES]),rr.filter(r=>+r[eCol]===e).map(r=>r[sourceCol]));});}
const panSummary=mdRows(read('data/pilot-coding-worksheet.md'),'CVE-2024-3400 | E');
check('PAN-OS summary maxima and attribution',summaryMatches(pan,3,7,8,2,panSummary,1,3,4,5,6),'All seven historical maxima and complete supporting-source sets match records');
const moveSummary=mdRows(read('data/moveit-pilot-supplement-2026-11-03.md'),'E').filter(r=>/^E[1-7]$/.test(r[0])).map(r=>{const a=r[1].split(' / '),e=r[2].split(' / ');return [r[0],a[0],a[1],e[0],e[1]];});
check('MOVEit historical maxima and attribution',summaryMatches(move,2,3,4,1,moveSummary,0,1,2,3,4),'All seven original-series maxima and supporting-source sets match records');
const outlookTable=mdRows(outDoc,'O23397-');
check('Outlook Markdown and CSV agreement',outlookTable.length===rows.length&&outlookTable.every(r=>{const c=rows.find(x=>x.record_id===r[0]);return c&&r[1]===c.source_id&&r[2]===c.category+' / '+c.facet&&r[3]===c.actionability&&r[4]===c.evidence_specificity&&r[5]===c.section&&r[6]===c.rationale;}),'All 21 mirrored observations, locators and scores agree');
const outlookSummary=mdRows(outDoc,'E').filter(r=>/^E[1-7]$/.test(r[0]));
const oArray=rows.map(r=>[r.category,r.actionability,r.evidence_specificity,r.source_id]);
check('Outlook summary source attribution',summaryMatches(oArray,0,1,2,3,outlookSummary,0,1,2,3,4),'All seven maxima and complete supporting-source sets match the CSV');
const allOriginal=new Map([...pan.map(r=>[r[0],{source:r[2],category:r[3],a:r[7],e:r[8]}]),...move.map(r=>[r[0],{source:r[1],category:r[2].split(' ')[0],a:r[3],e:r[4]}]),...rows.map(r=>[r.record_id,{source:r.source_id,category:r.category,a:r.actionability,e:r.evidence_specificity}])]);
check('Score-revision integrity',new Set(revisions.map(r=>r.record_id)).size===revisions.length&&revisions.every(r=>{const o=allOriginal.get(r.record_id);return o&&o.source===r.source_id&&o.category===r.category&&o.a===r.original_actionability&&o.e===r.original_evidence_specificity&&ordinal(r.current_actionability)&&ordinal(r.current_evidence_specificity)&&r.decision_received==='2026-11-09';}),'Revisions reference real rows and match original values before applying current scores');
const selected=['CVE-2024-3400','CVE-2023-34362','CVE-2023-23397','CVE-2021-34527','CVE-2021-44228'];
const selectionRows=mdRows(read('data/pilot-candidate-selection-log.md'),'CVE-').filter(r=>r.length===8);
check('Selection dates and roster',selectionRows.length===7&&selectionRows.every(r=>kev.vulnerabilities.some(v=>v.cveID===r[0]&&v.dateAdded===r[1]))&&sameSet(selectionRows.filter(r=>r[6]==='Yes').map(r=>r[0]),selected),'All seven candidate KEV dates and the five selected cases agree with the retained snapshot');
const sourceDates=sources.every(s=>s.access_date==='2026-11-09'&&s.cve==='CVE-2023-23397'&&/^https:\/\//.test(s.url)&&/^\d{4}-\d{2}-\d{2}$/.test(s.publication)&&s.publication<=s.access_date);
check('Outlook source metadata',sourceDates,'Access series, CVE, publication dates and official source URLs are populated');
const extraRoot=fs.readdirSync(root,{withFileTypes:true}).filter(e=>e.isFile()&&!['.git','.gitattributes','README.md'].includes(e.name)).map(e=>e.name);
check('Root duplicate inventory',extraRoot.length===0,extraRoot.length?'Unexpected root files: '+extraRoot.join(', '):'Only README.md and .gitattributes at the root');
const dateValid=kev.vulnerabilities.every(v=>/^\d{4}-\d{2}-\d{2}$/.test(v.dateAdded)&&!Number.isNaN(Date.parse(v.dateAdded))&&v.dateAdded<='2026-10-28');
check('KEV addition dates',dateValid,'All retained addition dates are formatted, parseable and on/before the snapshot retrieval date');

const report={score_revisions:revisions,current_moveit_e7:{actionability:2,evidence_specificity:3,source:'N34362-S001',facet:'T'},date:'2026-11-09',baseline:'3fb0fb1174e3c4ef94769513f012ca905ad49200',checks,maxima:max,broken_links:bad};
fs.writeFileSync(path.join(root,'analysis/2026-11-09-validation-results.json'),JSON.stringify(report,null,2)+'\n');
const text='# Repository checks — November 9, 2026\n\nThis report is generated by running node analysis/validate-repository.mjs from the repository root. It checks the consistency of the files and calculations. Source interpretation and technical effectiveness need separate evidence.\n\n| Check | Status | Detail |\n|---|---|---|\n'+checks.map(c=>'| '+c.name+' | '+c.status+' | '+c.detail+' |').join('\n')+'\n\n## Recalculated original-series maxima\nA/E denotes separate actionability and evidence-specificity scores, not an aggregate.\n\n| Category | PAN-OS A/E | MOVEit A/E | Outlook A/E |\n|---|---|---|---|\n'+max.map(r=>'| '+r.category+' | '+r.pan.join('/')+' | '+r.moveit.join('/')+' | '+r.outlook.join('/')+' |').join('\n')+'\n\n## Current accepted MOVEit revision\nThe accepted technical-disposition interpretation changes M34362-007 to E7-T 2/3. Applying the score-revisions CSV gives current MOVEit E7 maxima 2/3 from N34362-S001. The table above preserves original-series maxima. The Outlook preservation/recovery values are retained with their evidence-based rationale.\n\n## Scope\n70 PAN-OS + 84 MOVEit + 21 Outlook = 175 document-category records. Outlook covers three primary documents only; linked-source screening remains incomplete. Full raw historical PAN-OS captures are not present. This check does not validate external availability, passage interpretation, review decisions or complete source discovery. Relative file paths are checked; Markdown fragment anchors are outside this check.\n\n[Machine-readable results](2026-11-09-validation-results.json).\n'+(bad.length?'\n## Unresolved paths\n'+bad.map(b=>'- '+b).join('\n')+'\n':'');
fs.writeFileSync(reportFile,text);console.log(checks.map(c=>c.status+' '+c.name+': '+c.detail).join('\n'));if(checks.some(c=>c.status==='FAIL'))process.exitCode=1;
