import {
    IcosahedronGeometry,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer
} from "three";

console.log('Robot Bobby was here');
const w = window.innerWidth;
const h = window.innerHeight;
const renderer = new WebGLRenderer({antialias:true});
renderer.setSize(w,h);

document.body.appendChild(renderer.domElement);


const fov = 75;
const aspect = w/h;
const near = 0.1;
const far = 1000;

const camera = new PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

const scene = new Scene();

const geo = new IcosahedronGeometry(1.0, 2);
const mat = new MeshBasicMaterial({color: 0xccff});
const mesh = new Mesh(geo, mat);
scene.add(mesh);
renderer.render(scene, camera);

// function animate(){
//     requestAnimationFrame(animate);
//     mesh.rotation.x += 0.01;
//     mesh.rotation.y += 0.01;
//     renderer.render(scene, camera);
// }