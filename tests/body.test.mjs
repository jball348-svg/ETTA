import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnBody, stepBody, collides, WALK_SPEED, RUN_SPEED, BODY_RADIUS, ARENA_HALF, OBSTACLE } from '../src/world/simulation.ts';
const tick = (body, input, cameraYaw=0, count=1) => { for(let i=0;i<count;i++) body = stepBody(body,input,cameraYaw); return body; };
const still = { forward:0,right:0,run:false };
test('spawn is explicit, grounded, inside collision bounds and idle', () => {
  const s=spawnBody(); assert.equal(s.grounded,true); assert.equal(s.action,'idle'); assert.equal(s.height,2.35); assert.equal(collides(s.x,s.z),false);
});
test('W moves away from default camera, releasing decelerates to stationary', () => {
  const start=spawnBody(); const after=tick(start,{forward:1,right:0,run:false},0,60);
  assert.ok(after.z<start.z-1.8); assert.equal(after.action,'walk');
  const stopped=tick(after,still,0,90); assert.equal(stopped.action,'idle'); assert.ok(Math.hypot(stopped.vx,stopped.vz)<1e-6);
});
test('movement follows camera orientation, not a fixed world axis', () => {
  const s=spawnBody(); const right=tick(s,{forward:1,right:0,run:false},Math.PI/2,30);
  assert.ok(right.x < -0.7); assert.ok(Math.abs(right.z-s.z)<0.02);
});
test('diagonal speed is normalised and run is faster than walk', () => {
  const walk=tick(spawnBody(),{forward:1,right:0,run:false},0,30);
  const run=tick(spawnBody(),{forward:1,right:0,run:true},0,30);
  const diagonal=tick(spawnBody(),{forward:1,right:1,run:false},0,30);
  assert.ok(Math.abs(Math.hypot(walk.vx,walk.vz)-WALK_SPEED)<0.01);
  assert.ok(Math.abs(Math.hypot(run.vx,run.vz)-RUN_SPEED)<0.02);
  assert.ok(Math.abs(Math.hypot(diagonal.vx,diagonal.vz)-Math.hypot(walk.vx,walk.vz))<0.01);
  assert.equal(run.action,'run'); assert.equal(tick(run,still,0,120).action,'idle');
});
test('repeated movement stops at arena walls and cannot leave bounds', () => {
  let b=tick(spawnBody(),{forward:-1,right:0,run:true},0,1200);
  assert.ok(b.z<=ARENA_HALF-BODY_RADIUS+1e-9); assert.equal(collides(b.x,b.z),false);
  b=tick(b,{forward:1,right:0,run:true},0,1200); assert.ok(b.z>=-ARENA_HALF+BODY_RADIUS-1e-9);
});
test('collision blocks a solid obstacle and allows sliding on its face', () => {
  let b=spawnBody(); b={...b,x:OBSTACLE.x,z:OBSTACLE.z+OBSTACLE.halfZ+BODY_RADIUS+0.2};
  b=tick(b,{forward:1,right:0,run:true},0,120);
  assert.ok(b.z>=OBSTACLE.z+OBSTACLE.halfZ+BODY_RADIUS-0.001);
  assert.equal(collides(b.x,b.z),false);
  b=tick(b,{forward:1,right:1,run:false},0,120);
  assert.equal(collides(b.x,b.z),false); assert.ok(b.x>OBSTACLE.x+1.0);
});
test('the transition is deterministic, finite and bounded per physics tick', () => {
  const inputs=[{forward:1,right:0,run:true},{forward:1,right:1,run:true},still];
  const execute=()=>{let b=spawnBody(); for(let i=0;i<300;i++){
    const prior=b;b=stepBody(b,inputs[i%3],0.3);
    assert.ok(Math.hypot(b.x-prior.x,b.z-prior.z)<=RUN_SPEED/60+1e-9);
    assert.ok(Number.isFinite(b.yaw));assert.equal(collides(b.x,b.z),false);
  } return b;};
  assert.deepEqual(execute(),execute());
  assert.throws(()=>stepBody(spawnBody(),still,0,0.2),RangeError);
});
