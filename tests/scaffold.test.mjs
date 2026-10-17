import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const read = (file) => readFileSync(join(root, file), 'utf8');

test('authoritative roadmap and state stay aligned', () => {
  const state = JSON.parse(read('authoritative/STATE.json'));
  const roadmap = read('ROADMAP.md');
  assert.equal(state.project, 'ETTA');
  assert.equal(state.last_completed_session, 'S001');
  assert.equal(state.next_session, 'S002');
  assert.equal(state.next_session_status, 'INSTALLED_FUTURE_NOT_EXECUTED');
  for (const id of ['P0', 'P1', 'P2', 'P3', 'P4', 'P5']) {
    assert.ok(state.phases[id], id);
    assert.ok(roadmap.includes(id), id);
  }
  assert.match(read('authoritative/NEXT_SESSION_PROMPT.md'), /S002.*FUTURE \/ NOT EXECUTED/);
});

test('bootstrap docs and evidence spine exist', () => {
  for (const path of [
    'README.md', 'AGENTS.md', 'PROJECT_CHARTER.md', 'ROADMAP.md',
    'docs/ARCHITECTURE.md', 'docs/DECISIONS.md', 'docs/PHASE_GATES.md',
    'docs/QUALITY_STANDARD.md', 'docs/OPERATIONS.md',
    'sessions/S001/INPUT.md', 'sessions/S001/PLAN.md',
    'sessions/S001/VALIDATION.md', 'sessions/S001/REVIEW.md',
    'sessions/S001/CLOSEOUT.md',
    '.env.example', '.gitignore', 'vercel.json', 'index.html', 'src/main.ts'
  ]) {
    assert.ok(existsSync(join(root, path)), path);
  }
});

test('the current stage does not pretend to have an agent', () => {
  assert.match(read('index.html'), /Etta has not been born/);
  assert.match(read('src/main.ts'), /NO AGENT/);
  assert.match(read('src/main.ts'), /WEBGL UNAVAILABLE/);
  assert.match(read('docs/ARCHITECTURE.md'), /server-side secret/);
});

test('project has no checked-in credential values', () => {
  assert.match(read('.gitignore'), /^\.env\s*$/m);
  assert.match(read('.env.example'), /^GEMINI_API_KEY=\s*$/m);
  for (const path of ['src/main.ts','index.html','README.md','docs/ARCHITECTURE.md']) {
    assert.doesNotMatch(read(path), /AQ\.[A-Za-z0-9_-]{20,}/);
  }
});
