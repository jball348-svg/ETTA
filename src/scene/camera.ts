import * as THREE from 'three';
import type { BodyState } from '../world/simulation';

export const CAMERA_DEFAULT = Object.freeze({ yaw: 0, polar: 0.95, distance: 7.4 });
export class FollowCamera {
  yaw = CAMERA_DEFAULT.yaw;
  polar = CAMERA_DEFAULT.polar;
  distance = CAMERA_DEFAULT.distance;
  private lastPointer: { id: number; x: number; y: number } | null = null;
  private cleanupFns: Array<() => void> = [];
  constructor(readonly camera: THREE.PerspectiveCamera, readonly canvas: HTMLCanvasElement) {
    const down = (e: PointerEvent) => { if (e.button !== 0 && e.pointerType === 'mouse') return;
      this.lastPointer = { id: e.pointerId, x: e.clientX, y: e.clientY }; canvas.setPointerCapture(e.pointerId); };
    const move = (e: PointerEvent) => { if (!this.lastPointer || e.pointerId !== this.lastPointer.id) return;
      this.yaw -= (e.clientX - this.lastPointer.x) * 0.007;
      this.polar = THREE.MathUtils.clamp(this.polar - (e.clientY - this.lastPointer.y) * 0.007, 0.25, 1.35);
      this.lastPointer = { id: e.pointerId, x: e.clientX, y: e.clientY }; };
    const end = (e: PointerEvent) => { if (this.lastPointer?.id === e.pointerId) this.lastPointer = null; };
    const wheel = (e: WheelEvent) => { e.preventDefault(); this.distance = THREE.MathUtils.clamp(this.distance + e.deltaY * 0.008, 3.5, 12); };
    canvas.addEventListener('pointerdown', down); canvas.addEventListener('pointermove', move);
    canvas.addEventListener('pointerup', end); canvas.addEventListener('pointercancel', end);
    canvas.addEventListener('lostpointercapture', end); canvas.addEventListener('wheel', wheel, { passive: false });
    this.cleanupFns.push(() => canvas.removeEventListener('pointerdown', down), () => canvas.removeEventListener('pointermove', move),
      () => canvas.removeEventListener('pointerup', end), () => canvas.removeEventListener('pointercancel', end),
      () => canvas.removeEventListener('lostpointercapture', end), () => canvas.removeEventListener('wheel', wheel));
  }
  reset(): void { this.yaw = CAMERA_DEFAULT.yaw; this.polar = CAMERA_DEFAULT.polar; this.distance = CAMERA_DEFAULT.distance; this.lastPointer = null; }
  update(body: BodyState, aspect: number): void {
    const focus = new THREE.Vector3(body.x, 1.28, body.z);
    const horizontal = this.distance * Math.sin(this.polar);
    this.camera.position.set(focus.x + Math.sin(this.yaw) * horizontal, focus.y + Math.cos(this.polar) * this.distance,
      focus.z + Math.cos(this.yaw) * horizontal);
    this.camera.lookAt(focus);
    if (this.camera.aspect !== aspect) { this.camera.aspect = aspect; this.camera.updateProjectionMatrix(); }
  }
  dispose(): void { for (const dispose of this.cleanupFns) dispose(); }
}
