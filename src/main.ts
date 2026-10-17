import * as THREE from 'three';
import './style.css';

const mount = document.querySelector<HTMLDivElement>('#scene');
const renderStatus = document.querySelector<HTMLElement>('#render-status');

if (!mount || !renderStatus) {
  throw new Error('ETTA bootstrap markup is incomplete.');
}

try {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a1922);
  scene.fog = new THREE.Fog(0x0a1922, 11, 34);

  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(7.4, 6, 11);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  mount.appendChild(renderer.domElement);

  // A neutral coordinate stage, deliberately NOT an avatar or a home.
  const grid = new THREE.GridHelper(18, 18, 0x3b7180, 0x1b3b49);
  grid.position.y = -0.8;
  scene.add(grid);
  const marker = new THREE.Mesh(
    new THREE.TorusGeometry(1.08, 0.025, 6, 90),
    new THREE.MeshBasicMaterial({ color: 0x8bdac9 })
  );
  marker.rotation.x = Math.PI / 2;
  marker.position.y = -0.78;
  scene.add(marker);

  const render = () => {
    const width = Math.max(1, mount.clientWidth);
    const height = Math.max(1, mount.clientHeight);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    renderer.render(scene, camera);
  };

  render();
  renderStatus.textContent = 'RENDERING · NO AGENT';
  window.addEventListener('resize', render);

  // Resource hygiene matters when this scaffold later grows into a simulation.
  window.addEventListener('pagehide', () => {
    window.removeEventListener('resize', render);
    grid.geometry.dispose();
    (grid.material as THREE.Material).dispose();
    marker.geometry.dispose();
    (marker.material as THREE.Material).dispose();
    renderer.dispose();
  }, { once: true });
} catch (error) {
  renderStatus.textContent = 'WEBGL UNAVAILABLE';
  const hint = document.createElement('p');
  hint.className = 'render-error';
  hint.textContent = 'This browser could not initialise WebGL. The ETTA project is still accessible, but the 3D stage is unavailable.';
  mount.replaceChildren(hint);
  console.error('[ETTA] Renderer could not start', error);
}
