'use strict';

const width = document.querySelector('body').clientWidth;
const height = document.querySelector('body').clientHeight;

const canvas = document.getElementById('canvas');
canvas.setAttribute('width', width);
canvas.setAttribute('height', height);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas: canvas});

renderer.setClearColor(0x555555);
renderer.setSize(width, height);

const axes = new THREE.AxesHelper(20);
scene.add(axes);

const light = new THREE.AmbientLight(0xffffff);
scene.add(light);

const planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
const planeMaterial = new THREE.MeshBasicMaterial({color: 0xCCCCCC});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -0.5 * Math.PI;
plane.position.x = 15;
plane.position.y = 0;
plane.position.z = 0;
scene.add(plane);

const cubeGeometry = new THREE.CubeGeometry(5, 5, 5);
const cubeMaterial = new THREE.MeshBasicMaterial({color: 0xFF0000, wireframe: true});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
cube.position.x = -4;
cube.position.y = 3;
cube.position.z = 0;
scene.add(cube);

const sphereGeometry = new THREE.SphereGeometry(5, 10, 10);
const sphereMaterial = new THREE.MeshBasicMaterial({color: 0x7777FF, wireframe: true});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.x = 20;
sphere.position.y = 5;
sphere.position.z = 2;
scene.add(sphere);

camera.position.x = -30;
camera.position.y = 40;
camera.position.z = 30;
camera.lookAt(scene.position);

renderer.render(scene, camera);
