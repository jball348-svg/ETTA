import * as THREE from 'three';
import type { BodyState } from '../world/simulation';

/** Procedural, asset-free Etta. Her local +Z direction is her face/front. */
export function createEtta(): { group: THREE.Group; update: (body: BodyState, dt: number) => void; dispose: () => void } {
  const group = new THREE.Group(); group.name = 'Etta - visual body';
  const clothing = new THREE.MeshStandardMaterial({ color: 0x6091bb, roughness: 0.78 });
  const skin = new THREE.MeshStandardMaterial({ color: 0xe8ad8c, roughness: 0.84 });
  const hair = new THREE.MeshStandardMaterial({ color: 0x402e3e, roughness: 0.9 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x202f41 });
  const accent = new THREE.MeshStandardMaterial({ color: 0xe2cf83 });
  function part(name: string, geo: THREE.BufferGeometry, mat: THREE.Material, parent = group, xyz: [number, number, number] = [0,0,0]) {
    const mesh = new THREE.Mesh(geo, mat); mesh.name = name; mesh.position.set(...xyz); mesh.castShadow = true; parent.add(mesh); return mesh;
  }
  part('body', new THREE.CapsuleGeometry(0.38, 0.64, 6, 12), clothing, group, [0,1.23,0]);
  part('scarf', new THREE.TorusGeometry(0.32, 0.06, 8, 24), accent, group, [0,1.67,0]).rotation.x = Math.PI / 2;
  part('head', new THREE.SphereGeometry(0.37, 20, 14), skin, group, [0,2.05,0]);
  part('hair', new THREE.SphereGeometry(0.385, 20, 12, 0, Math.PI * 2, 0, Math.PI * 0.45), hair, group, [0,2.11,-0.025]);
  for (const sign of [-1,1]) {
    part('eye', new THREE.SphereGeometry(0.037, 8, 8), dark, group, [sign*0.13,2.075,0.35]);
  }
  part('nose', new THREE.SphereGeometry(0.035, 8, 8), skin, group, [0,1.99,0.375]);
  const arms: THREE.Group[] = []; const legs: THREE.Group[] = [];
  for (const side of [-1,1]) {
    const arm = new THREE.Group(); arm.position.set(side*0.47,1.56,0); group.add(arm);
    part('arm', new THREE.CapsuleGeometry(0.12, 0.48, 4, 10), clothing, arm, [0,-0.3,0]);
    part('hand', new THREE.SphereGeometry(0.13, 10, 8), skin, arm, [0,-0.69,0]); arms.push(arm);
    const leg = new THREE.Group(); leg.position.set(side*0.21,0.86,0); group.add(leg);
    part('leg', new THREE.CapsuleGeometry(0.145, 0.43, 4, 10), dark, leg, [0,-0.39,0]);
    part('boot', new THREE.BoxGeometry(0.32,0.21,0.46), dark, leg, [0,-0.76,0.1]); legs.push(leg);
  }
  let cycle = 0;
  function update(body: BodyState, dt: number) {
    group.position.set(body.x,0,body.z); group.rotation.y = body.yaw;
    const speed = Math.hypot(body.vx, body.vz);
    cycle += dt * (body.action === 'run' ? 12 : 8);
    const swing = body.action === 'idle' ? 0 : Math.min(0.7, speed * 0.17) * Math.sin(cycle);
    arms[0].rotation.x = swing; arms[1].rotation.x = -swing;
    legs[0].rotation.x = -swing; legs[1].rotation.x = swing;
  }
  function dispose() {
    const geometries = new Set<THREE.BufferGeometry>(); const materials = new Set<THREE.Material>();
    group.traverse(obj => { if (obj instanceof THREE.Mesh) { geometries.add(obj.geometry);
      if (Array.isArray(obj.material)) obj.material.forEach(m => materials.add(m)); else materials.add(obj.material); } });
    geometries.forEach(g=>g.dispose()); materials.forEach(m=>m.dispose());
  }
  return { group, update, dispose };
}
