/** Deterministic, browser-free authority for Etta's physical body. World units are metres. */
export const ARENA_HALF = 8;
export const BODY_RADIUS = 0.36;
export const BODY_HEIGHT = 2.35;
export const WALK_SPEED = 2.5;
export const RUN_SPEED = 4.4;
export const OBSTACLE = Object.freeze({ x: 2.0, z: -1.2, halfX: 0.9, halfZ: 1.1 });
export const SPAWN = Object.freeze({ x: 0, z: 3.5, yaw: Math.PI });

export type Action = 'idle' | 'walk' | 'run';
export interface BodyState {
  x: number; z: number; yaw: number; vx: number; vz: number;
  radius: number; height: number; grounded: true; action: Action;
}
export interface ManualIntent { forward: number; right: number; run: boolean }
export function spawnBody(): BodyState {
  return { ...SPAWN, vx: 0, vz: 0, radius: BODY_RADIUS, height: BODY_HEIGHT, grounded: true, action: 'idle' };
}
const clamp = (value: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, value));
export function wrapAngle(angle: number): number { return Math.atan2(Math.sin(angle), Math.cos(angle)); }
export function collides(x: number, z: number, radius = BODY_RADIUS): boolean {
  if (Math.abs(x) > ARENA_HALF - radius || Math.abs(z) > ARENA_HALF - radius) return true;
  const nearX = clamp(x, OBSTACLE.x - OBSTACLE.halfX, OBSTACLE.x + OBSTACLE.halfX);
  const nearZ = clamp(z, OBSTACLE.z - OBSTACLE.halfZ, OBSTACLE.z + OBSTACLE.halfZ);
  return (x - nearX) ** 2 + (z - nearZ) ** 2 < radius ** 2;
}
/** Advance at one fixed 60 Hz step. Camera yaw controls intent frame, not Etta's physics. */
export function stepBody(previous: BodyState, intent: ManualIntent, cameraYaw: number, dt = 1 / 60): BodyState {
  if (!Number.isFinite(dt) || dt <= 0 || dt > 1 / 30) throw new RangeError('Physics requires a finite fixed step at most 1/30s');
  const length = Math.hypot(intent.forward, intent.right);
  const forward = length ? Math.max(-1, Math.min(1, intent.forward)) / Math.max(1, length) : 0;
  const right = length ? Math.max(-1, Math.min(1, intent.right)) / Math.max(1, length) : 0;
  const speed = intent.run ? RUN_SPEED : WALK_SPEED;
  const targetVx = (-Math.sin(cameraYaw) * forward + Math.cos(cameraYaw) * right) * speed;
  const targetVz = (-Math.cos(cameraYaw) * forward - Math.sin(cameraYaw) * right) * speed;
  const alpha = 1 - Math.exp(-15 * dt);
  let vx = previous.vx + (targetVx - previous.vx) * alpha;
  let vz = previous.vz + (targetVz - previous.vz) * alpha;
  let x = previous.x; let z = previous.z;
  if (!collides(x + vx * dt, z, previous.radius)) x += vx * dt; else vx = 0;
  if (!collides(x, z + vz * dt, previous.radius)) z += vz * dt; else vz = 0;
  const moving = Math.hypot(vx, vz) > 0.12;
  const yawTarget = Math.atan2(vx, vz);
  const yaw = moving ? wrapAngle(previous.yaw + wrapAngle(yawTarget - previous.yaw) * Math.min(1, 13 * dt)) : previous.yaw;
  return { ...previous, x, z, vx, vz, yaw, grounded: true, action: moving ? (intent.run ? 'run' : 'walk') : 'idle' };
}
