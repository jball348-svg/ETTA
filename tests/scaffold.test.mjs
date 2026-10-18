import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
const read=(path)=>readFileSync(path,'utf8');
test('the current authority reflects exactly one completed S002',()=>{
  const state=JSON.parse(read('authoritative/STATE.json'));
  assert.equal(state.project,'ETTA');assert.equal(state.last_completed_session,'S002');
  assert.equal(state.next_session,'S003');assert.equal(state.next_session_status,'INSTALLED_FUTURE_NOT_EXECUTED');
  assert.match(read('authoritative/NEXT_SESSION_PROMPT.md'),/S003.*FUTURE \/ NOT EXECUTED/);
  for(const phase of ['P0','P1','P2','P3','P4','P5']) assert.ok(state.phases[phase]);
});
test('five S002 evidence artifacts are present',()=>{
  for(const p of ['INPUT','PLAN','VALIDATION','REVIEW','CLOSEOUT']) assert.ok(existsSync('sessions/S002/'+p+'.md'));
});
test('body, controls, WebGL fallback and manual provenance exist in source',()=>{
  assert.match(read('src/main.ts'),/stepBody/);
  assert.match(read('src/main.ts'),/WEBGL UNAVAILABLE/);
  assert.match(read('index.html'),/MANUAL|developer-controlled/i);
  assert.match(read('src/input/manual.ts'),/visibilitychange/);
  assert.match(read('src/input/manual.ts'),/ArrowUp/);
  assert.match(read('src/scene/camera.ts'),/pointermove/);
});
test('credential discipline remains intact',()=>{
  assert.match(read('.gitignore'),/^\.env\s*$/m);
  assert.match(read('.env.example'),/^GEMINI_API_KEY=\s*$/m);
  for(const p of ['src/main.ts','src/input/manual.ts','index.html','README.md']) assert.doesNotMatch(read(p),/AQ\.[A-Za-z0-9_-]{20,}/);
});
