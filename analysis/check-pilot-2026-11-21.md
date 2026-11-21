import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
function readCSV(p){
 const t=fs.readFileSync(path.join(root,p),'utf8').replace(/^\uFEFF/,'');
 let rows=[],row=[],value='',quoted=false;
 for(let i=0;i<t.length;i++){
  const c=t[i];
  if(c==='"'){if(quoted&&t[i+1]==='"'){value+='"';i++;}else quoted=!quoted;}
  else if(c===','&&!quoted){row.push(value);value='';}
  else if(c==='\n'&&!quoted){row.push(value.replace(/\r$/,''));if(row.some(Boolean))rows.push(row);row=[];value='';}
  else value+=c;
 }
 if(value||row.length){row.push(value);rows.push(row);}
 const header=rows.shift();return rows.map(r=>Object.fromEntries(header.map((k,i)=>[k,r[i]])));
}
const records=readCSV('data/pilot-records-2026-11-21.csv');
const summary=readCSV('data/pilot-category-summary-2026-11-21.csv');
const sources=readCSV('data/pilot-source-register-2026-11-21.csv');
const sensitivity=readCSV('data/moveit-sensitivity-records-2026-11-21.csv');
const sensitivitySummary=readCSV('data/moveit-sensitivity-summary-2026-11-21.csv');
assert.equal(records.length,259);assert.equal(summary.length,35);assert.equal(sources.length,37);
assert.equal(new Set(records.map(r=>r.record_id)).size,259);
assert.equal(records.filter(r=>r.record_origin==='New retained-text coding').length,28);
const sourceKeys=new Set(sources.map(s=>s.case_id+'|'+s.source_id));
for(const r of records){
 assert(sourceKeys.has(r.case_id+'|'+r.source_id));
 for(const field of ['actionability','evidence_specificity','original_actionability','original_evidence_specificity'])assert(/^[0-3]$/.test(r[field]));
 assert(r.rationale);assert(r.review_status);assert.equal(r.applicability,'A1');
}
for(const s of sources){
 const rr=records.filter(r=>r.case_id===s.case_id&&r.source_id===s.source_id);
 assert.equal(rr.length,7);assert.deepEqual(rr.map(r=>r.category).sort(),['E1','E2','E3','E4','E5','E6','E7']);
}
function verifySummaries(table,pool){
 for(const s of table){
  const rr=pool.filter(r=>r.case_id===s.case_id&&r.category===s.category);
  for(const [field,maxField,listField] of [['actionability','actionability_max','actionability_sources'],['evidence_specificity','evidence_max','evidence_sources']]){
   const max=Math.max(...rr.map(r=>Number(r[field])));assert.equal(Number(s[maxField]),max);
   assert.deepEqual(s[listField].split('; ').sort(),rr.filter(r=>Number(r[field])===max).map(r=>r.source_id).sort());
  }
 }
}
verifySummaries(summary,records);verifySummaries(sensitivitySummary,[...records,...sensitivity]);
assert.equal(sensitivity.length,7);assert(!records.some(r=>r.record_id.includes('-EXT-')));
const m=records.find(r=>r.record_id==='M34362-007');assert.equal(m.actionability,'2');assert.equal(m.evidence_specificity,'3');assert.equal(m.original_actionability,'0');
const l=records.find(r=>r.record_id==='L44228-N14-L04-05');assert.equal(l.actionability,'0');assert.equal(l.original_actionability,'1');
assert.equal(sources.filter(s=>s.exact_raw_capture==='Retained').length,22);
console.log('Passed: record counts, identifiers, source joins, seven-category grids, score ranges, original values, all primary maxima, all sensitivity maxima and source lists.');
console.log('Coding interpretation, search completeness and procedure effectiveness require separate review.');
