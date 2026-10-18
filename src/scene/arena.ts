import * as THREE from 'three';
import { ARENA_HALF, OBSTACLE } from '../world/simulation';

export function createArena(): { scene: THREE.Scene; dispose: () => void } {
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0x0d2030);
  scene.fog = new THREE.Fog(0x0d2030, 16, 34);
  scene.add(new THREE.HemisphereLight(0xcceeff, 0x2e5060, 2.2));
  const sun = new THREE.DirectionalLight(0xffdfbc, 2.0); sun.position.set(5,10,4); scene.add(sun);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(ARENA_HALF * 2, ARENA_HALF * 2),
    new THREE.MeshStandardMaterial({ color: 0x173443, roughness: 0.93 }));
  ground.rotation.x = -Math.PI / 2; ground.position.y = -0.04; scene.add(ground);
  const grid = new THREE.GridHelper(ARENA_HALF * 2, 16, 0x5b9b9e, 0x244b59); grid.position.y = -0.025; scene.add(grid);
  const obstacle = new THREE.Mesh(new THREE.BoxGeometry(OBSTACLE.halfX*2,1.35,OBSTACLE.halfZ*2),
    new THREE.MeshStandardMaterial({ color: 0xb67570, roughness: 0.8 }));
  obstacle.position.set(OBSTACLE.x,0.675,OBSTACLE.z); scene.add(obstacle);
  const border = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(ARENA_HALF*2,0.025,ARENA_HALF*2)),
    new THREE.LineBasicMaterial({ color: 0x92ddc6 })); border.position.y = 0.03; scene.add(border);
  return { scene, dispose: () => { scene.traverse(obj => { if (obj instanceof THREE.Mesh || obj instanceof THREE.LineSegments || obj instanceof THREE.GridHelper) {
    obj.geometry.dispose(); const mats = Array.isArray(obj.material) ? obj.material : [obj.material]; mats.forEach(m => m.dispose());
  } }); } };
}
