import './style.css';
import * as THREE from 'three';



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  alpha: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const positions = [
  { x: -15, y: 10, z: -10 },
  { x: 15, y: -8, z: -15 },
  { x: -10, y: -12, z: -5 },
  { x: 12, y: 15, z: -10 }
];

const shapes = [];

const shapesAvailable = [
    new THREE.BoxGeometry(3, 3, 3),
    new THREE.SphereGeometry(2, 16, 16),
    new THREE.ConeGeometry(2, 4, 16),
    new THREE.TorusGeometry(2, 0.5, 16, 32)
];

const Colors = [
  0x91a7ee,
  0xffb591,
  0xb0e3c0,
  0xefb8f5  
];

for (let i = 0; i < positions.length; i++) {
  let position = positions[i];

  const assignedShapeGeometry = shapesAvailable[i % shapesAvailable.length]; 



  const material = new THREE.MeshStandardMaterial({
      color: Colors[i],
      wireframe: Math.random() > 0.5
  });

  const shape = new THREE.Mesh(assignedShapeGeometry, material);

  shape.position.set(position.x, position.y, position.z);

  shape.rotation.x = Math.random() * Math.PI;
  shape.rotation.y = Math.random() * Math.PI;
  shape.rotation.z = Math.random() * Math.PI;

  shape.userData.rotationSpeed = {
      x: Math.random() * 0.01,
      y: Math.random() * 0.01,
      z: Math.random() * 0.01
  };

  scene.add(shape);
  shapes.push(shape);
}

const ambientLight = new THREE.AmbientLight(0xffffff, 0.8); 
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 4, 0, 0);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

function animate() {
  requestAnimationFrame(animate);

  for (let i = 0; i < shapes.length; i++) {
    let shape = shapes[i];
    shape.rotation.x += shape.userData.rotationSpeed.x;
    shape.rotation.y += shape.userData.rotationSpeed.y;
    shape.rotation.z += shape.userData.rotationSpeed.z;
  }

  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();