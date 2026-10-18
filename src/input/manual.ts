import type { ManualIntent } from '../world/simulation';

const MOVEMENT = new Set(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','ShiftLeft','ShiftRight']);
export class ManualControls {
  private held = new Set<string>();
  private active = false;
  private touchHeld = new Set<string>();
  private cleanupFns: Array<() => void> = [];
  constructor(private stage: HTMLElement, private onReset: () => void, private onToggleHud: () => void) {
    const down = (event: KeyboardEvent) => {
      if (event.code === 'F1' && !event.repeat) { event.preventDefault(); this.onToggleHud(); return; }
      if (event.code === 'KeyR' && !event.repeat && this.active) { event.preventDefault(); this.clear(); this.onReset(); return; }
      if (!this.active || !MOVEMENT.has(event.code)) return;
      if (event.code.startsWith('Arrow')) event.preventDefault();
      this.held.add(event.code);
    };
    const up = (event: KeyboardEvent) => { this.held.delete(event.code); };
    const blur = () => this.clear();
    const focus = () => { this.active = true; };
    const defocus = () => { this.active = false; this.held.clear(); }; // Keep held touch on button focus changes.
    const visibility = () => { if (document.hidden) this.clear(); };
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    window.addEventListener('blur', blur);
    this.stage.addEventListener('focus', focus);
    this.stage.addEventListener('blur', defocus);
    document.addEventListener('visibilitychange', visibility);
    this.cleanupFns.push(() => window.removeEventListener('keydown', down), () => window.removeEventListener('keyup', up),
      () => window.removeEventListener('blur', blur), () => this.stage.removeEventListener('focus', focus),
      () => this.stage.removeEventListener('blur', defocus), () => document.removeEventListener('visibilitychange', visibility));
  }
  bindTouchButton(button: HTMLElement, direction: string): void {
    const start = (e: PointerEvent) => { e.preventDefault(); this.touchHeld.add(direction); button.setPointerCapture(e.pointerId); };
    const stop = (e: PointerEvent) => { this.touchHeld.delete(direction); if (button.hasPointerCapture(e.pointerId)) button.releasePointerCapture(e.pointerId); };
    button.addEventListener('pointerdown', start); button.addEventListener('pointerup', stop);
    button.addEventListener('pointercancel', stop); button.addEventListener('lostpointercapture', stop);
    this.cleanupFns.push(() => { button.removeEventListener('pointerdown', start); button.removeEventListener('pointerup', stop);
      button.removeEventListener('pointercancel', stop); button.removeEventListener('lostpointercapture', stop); });
  }
  getIntent(): ManualIntent {
    const has = (a: string, b?: string) => this.held.has(a) || (b ? this.held.has(b) : false);
    return {
      forward: Number(has('KeyW','ArrowUp') || this.touchHeld.has('up')) - Number(has('KeyS','ArrowDown') || this.touchHeld.has('down')),
      right: Number(has('KeyD','ArrowRight') || this.touchHeld.has('right')) - Number(has('KeyA','ArrowLeft') || this.touchHeld.has('left')),
      run: has('ShiftLeft','ShiftRight') || this.touchHeld.has('run')
    };
  }
  clear(): void { this.held.clear(); this.touchHeld.clear(); }
  dispose(): void { this.clear(); for (const cleanup of this.cleanupFns) cleanup(); this.cleanupFns = []; }
}
