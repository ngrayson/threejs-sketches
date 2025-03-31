import * as THREE from 'three';
import { OrbitControls } from "jsm/controls/OrbitControls.js";
const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);
const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;
const scene = new THREE.Scene();
const geo = new THREE.IcosahedronGeometry(1.0, 0);
const minigeo = new THREE.IcosahedronGeometry(1.0, 5);
const mat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    // flatShading: true,
    // wireframe: true 
});
const hemiLight = new THREE.HemisphereLight(0xff4f00, 0x88ffff, 1);
scene.add(hemiLight);
const mesh = new THREE.Mesh(minigeo, mat);
const wireMat = new THREE.MeshBasicMaterial({ color: 0xccff, wireframe: true });
const wireMesh = new THREE.Mesh(geo, wireMat);
wireMesh.scale.setScalar(1.3);
scene.add(wireMesh);
scene.add(mesh);
renderer.render(scene, camera);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.025;
function animate(t = 0) {
    requestAnimationFrame(animate);
    const maxSize = .9;
    const size = .3 * Math.cos(t * 0.001) + .6;
    const speed = 1 - size / (maxSize);
    mesh.scale.setScalar(size);
    mesh.rotation.x += 0.001;
    mesh.rotation.y += .01;
    wireMesh.rotation.x -= speed * 0.005;
    wireMesh.rotation.y -= 0.001;
    renderer.render(scene, camera);
    controls.update();
}
animate();
//# sourceMappingURL=index.js.map