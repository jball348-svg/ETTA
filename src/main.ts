import * as THREE from 'three';
import './style.css';
import { spawnBody, stepBody } from './world/simulation';
import { ManualControls } from './input/manual';
import { FollowCamera } from './scene/camera';
import { createArena } from './scene/arena';
import { createEtta } from './scene/etta';

const mount = document.querySelector<HTMLDivElement>('#scene');
const stage = document.querySelector<HTMLElement>('#viewport');
const renderStatus = document.querySelector<HTMLElement>('#render-status');
const hud = document.querySelector<HTMLElement>('#dev-hud');
const info = document.querySelector<HTMLElement>('#body-state');
const resetButton = document.querySelector<HTMLButtonElement>('#reset');
const hudButton = document.querySelector<HTMLButtonElement>('#toggle-hud');
if (!mount || !stage || !renderStatus || !hud || !info || !resetButton || !hudButton) throw new Error('ETTA stage markup is incomplete.');

try {
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setSize(Math.max(1,mount.clientWidth), Math.max(1,mount.clientHeight), false);
  renderer.domElement.style.touchAction = 'none';
  renderer.domElement.setAttribute('aria-label', '3D view of Etta in a small test arena. Drag to orbit the camera.');
  mount.appendChild(renderer.domElement);

  const arena = createArena();
  const etta = createEtta(); arena.scene.add(etta.group);
  const camera = new THREE.PerspectiveCamera(47,1,0.1,100);
  const orbit = new FollowCamera(camera, renderer.domElement);
  let body = spawnBody();
  const reset = () => { body = spawnBody(); orbit.reset(); controls.clear(); };
  const toggleHud = () => { hud.hidden = !hud.hidden; hudButton.setAttribute('aria-pressed', String(!hud.hidden)); };
  const controls = new ManualControls(stage, reset, toggleHud);
  resetButton.addEventListener('click', reset);
  hudButton.addEventListener('click', toggleHud);
  document.querySelectorAll<HTMLElement>('[data-control]').forEach(button => controls.bindTouchButton(button, button.dataset.control || ''));
  renderer.domElement.addEventListener('pointerdown', () => stage.focus({ preventScroll: true }));
  stage.addEventListener('pointerdown', (e) => { if (e.target === stage) stage.focus({ preventScroll: true }); });
  renderStatus.textContent = 'MANUAL / DEV · NO AI';
  let previousTime = performance.now(); let accumulator = 0; let raf = 0; let fps = 0;
  function frame(now: number) {
    const elapsed = Math.min(0.1,Math.max(0,(now - previousTime)/1000)); previousTime=now;
    accumulator += elapsed;
    const intent = controls.getIntent();
    while (accumulator >= 1/60) { body = stepBody(body,intent,orbit.yaw,1/60); accumulator -= 1/60; }
    etta.update(body,elapsed);
    const width = Math.max(1,mount.clientWidth); const height = Math.max(1,mount.clientHeight);
    renderer.setSize(width,height,false);
    orbit.update(body,width/height);
    renderer.render(arena.scene,camera);
    fps = fps ? fps*0.9 + (elapsed > 0 ? 1/elapsed : fps)*0.1 : elapsed ? 1/elapsed : 0;
    if (!hud.hidden) info.textContent = 'x ' + body.x.toFixed(2) + ' · z ' + body.z.toFixed(2) + ' · yaw ' +
      Math.round(body.yaw*180/Math.PI) + '°\n' +
      'motion ' + body.action.toUpperCase() + ' · v ' + Math.hypot(body.vx,body.vz).toFixed(2) + ' m/s\n' +
      'grounded ' + body.grounded + ' · frame ' + fps.toFixed(0) + ' FPS\nsource MANUAL · inference NONE';
    raf = requestAnimationFrame(frame);
  }
  raf = requestAnimationFrame(frame);
  window.addEventListener('pagehide', () => { cancelAnimationFrame(raf); controls.dispose(); orbit.dispose(); etta.dispose(); arena.dispose(); renderer.dispose(); }, { once: true });
} catch (error) {
  renderStatus.textContent = 'WEBGL UNAVAILABLE';
  mount.replaceChildren();
  const hint = document.createElement('p'); hint.className = 'render-error';
  hint.textContent = 'This browser could not initialise the 3D renderer. ETTA remains accessible, but avatar play requires WebGL.';
  mount.appendChild(hint);
  console.error('[ETTA] Render initialization failed', error);
}
