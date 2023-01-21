import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.setZ(30);
camera.position.setY(20);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

const controls = new OrbitControls(camera, renderer.domElement);

/*------------------- Dev Tools -------------------*/
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(gridHelper);

// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

// const ambientLight = new THREE.AmbientLight(0xffffff);
// scene.add(ambientLight);

/*------------------- Lighting -------------------*/
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, 0, 0);
scene.add(pointLight); //creates shadows
const lightHelper = new THREE.PointLightHelper(pointLight);
scene.add(lightHelper);

/*------------------- Stars -------------------*/
function addStar() {
    const geometry = new THREE.SphereGeometry(0.05, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    scene.add(star);
}
Array(2000).fill().forEach(addStar);

/*------------------- Planets -------------------*/
// Sun
const sunTexture = new THREE.TextureLoader().load('images/Sun.Diffuse.jpg');
const sun = new THREE.Mesh(
    new THREE.SphereGeometry(5, 32, 32),
    new THREE.MeshBasicMaterial({ map: sunTexture })
);
sun.position.set(0, 0, 0);
scene.add(sun);

// Mercury
const mercuryTexture = new THREE.TextureLoader().load('images/mercurymap.jpg'); //image of mercury
const mercuryBumpTexture = new THREE.TextureLoader().load('images/mercurybump.jpg'); //bump map of mercury
const mercury = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32, 23.5),
    new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: mercuryTexture, //apply texture to mercury
        bumpMap: mercuryBumpTexture, //apply bump map to mercury
        bumpScale: 0.05
    })
);
mercury.position.set(5, 0, 5);
scene.add(mercury);
// Mercury Path
const mercuryPathGeometry = new THREE.TorusGeometry(10, 0.001, 16, 100);
const mercuryPathMaterial = new THREE.LineBasicMaterial({
    color: 0xffa500,
    transparent: true,
    opacity: 0.05
});
const mercuryPathLine = new THREE.Line(mercuryPathGeometry, mercuryPathMaterial);
mercuryPathLine.position.set(0, 0, 0);
mercuryPathLine.rotateX(Math.PI / 2);
scene.add(mercuryPathLine);

// Venus
const venusTexture = new THREE.TextureLoader().load('images/venusmap.jpg');
const venusBumpTexture = new THREE.TextureLoader().load('images/venusbump.jpg');
const venus = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32, 23.5),
    new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: venusTexture,
        bumpMap: venusBumpTexture,
        bumpScale: 0.05
    })
);
venus.position.set(6, 0, 6);
scene.add(venus);
// Venus Path
const venusPathGeometry = new THREE.TorusGeometry(15, 0.001, 16, 100);
const venusPathMaterial = new THREE.LineBasicMaterial({
    color: 0xa020f0,
    transparent: true,
    opacity: 0.05
});
const venusPathLine = new THREE.Line(venusPathGeometry, venusPathMaterial);
venusPathLine.position.set(0, 0, 0);
venusPathLine.rotateX(Math.PI / 2);
scene.add(venusPathLine);

// Earth
const earthTexture = new THREE.TextureLoader().load('images/earthmap1k.jpg');
const earthBumpTexture = new THREE.TextureLoader().load('images/earthbump1k.jpg');
const earth = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32, 23.5),
    new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: earthTexture,
        bumpMap: earthBumpTexture,
        bumpScale: 0.05
    })
);
earth.position.set(7, 0, 7);
scene.add(earth);
// Earth Path
const earthPathGeometry = new THREE.TorusGeometry(20, 0.001, 16, 100);
const earthPathMaterial = new THREE.LineBasicMaterial({
    color: 0x0000ff,
    transparent: true,
    opacity: 0.05
});
const earthPathLine = new THREE.Line(earthPathGeometry, earthPathMaterial);
earthPathLine.position.set(0, 0, 0);
earthPathLine.rotateX(Math.PI / 2);
scene.add(earthPathLine);

// Moon
const moonTexture = new THREE.TextureLoader().load('images/moonmap1k.jpg');
const moonBumpTexture = new THREE.TextureLoader().load('images/moonbump1k.jpg');
const moon = new THREE.Mesh(
    new THREE.SphereGeometry(0.12, 32, 32),
    new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: moonTexture,
        bumpMap: moonBumpTexture,
        bumpScale: 0.05
    })
);
moon.position.set(7.5, 0, 7.5);
scene.add(moon);
// Moon Path
const marsTexture = new THREE.TextureLoader().load('images/mars_1k_color.jpg');
const marsBumpTexture = new THREE.TextureLoader().load('images/marsbump1k.jpg');
const mars = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32, 23.5),
    new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: marsTexture,
        bumpMap: marsBumpTexture,
        bumpScale: 0.05
    })
);
mars.position.set(8, 0, 8);
scene.add(mars);

// Mars Path
const marsPathGeometry = new THREE.TorusGeometry(25, 0.001, 16, 100);
const marsPathMaterial = new THREE.LineBasicMaterial({
    color: 0xff0000,
    transparent: true,
    opacity: 0.05
});
const marsPathLine = new THREE.Line(marsPathGeometry, marsPathMaterial);
marsPathLine.position.set(0, 0, 0);
marsPathLine.rotateX(Math.PI / 2);
scene.add(marsPathLine);

// Asteroid Belt
// find a way to wrap torus with asteroids to make asteroid belt
// current problem is that asteroids are generating in a square
// possible solumtion would be to put asteroids in a torus. idk how to do that
//
// const asteroidBeltTaurus = new THREE.TorusGeometry(27.5, 2, 16, 100);
// const asteroidBeltTaurusMaterial = new THREE.LineBasicMaterial({
//   color: 0xffffff,
//   transparent: true,
//   opacity: 0.05 });
// const asteroidBeltTaurusLine = new THREE.Line(asteroidBeltTaurus, asteroidBeltTaurusMaterial);
// asteroidBeltTaurusLine.position.set(0, 0, 0);
// asteroidBeltTaurusLine.rotateX(Math.PI / 2);
// scene.add(asteroidBeltTaurusLine);

// Jupiter
const jupiterTexture = new THREE.TextureLoader().load('images/jupitermap.jpg');
const jupiter = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32, 23.5),
    new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: jupiterTexture
    })
);
jupiter.position.set(13, 0, 13);
scene.add(jupiter);
// Jupiter Path
const jupiterPathGeometry = new THREE.TorusGeometry(30, 0.001, 16, 100);
const jupiterPathMaterial = new THREE.LineBasicMaterial({
    color: 0x800000,
    transparent: true,
    opacity: 0.05
});
const jupiterPathLine = new THREE.Line(jupiterPathGeometry, jupiterPathMaterial);
jupiterPathLine.position.set(0, 0, 0);
jupiterPathLine.rotateX(Math.PI / 2);
scene.add(jupiterPathLine);

// Saturn
const saturnTexture = new THREE.TextureLoader().load('images/saturnmap.jpg');
const saturn = new THREE.Mesh(
    new THREE.SphereGeometry(2.5, 32, 32, 23.5),
    new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: saturnTexture
    })
);
saturn.position.set(18, 0, 18);
scene.add(saturn);
// Saturn Path
const saturnPathGeometry = new THREE.TorusGeometry(35, 0.001, 16, 100);
const saturnPathMaterial = new THREE.LineBasicMaterial({
    color: 0xffff00,
    transparent: true,
    opacity: 0.05
});
const saturnPathLine = new THREE.Line(saturnPathGeometry, saturnPathMaterial);
saturnPathLine.position.set(0, 0, 0);
saturnPathLine.rotateX(Math.PI / 2);
scene.add(saturnPathLine);

// Uranus
const uranusTexture = new THREE.TextureLoader().load('images/uranusmap.jpg');
const uranus = new THREE.Mesh(
    new THREE.SphereGeometry(1.5, 32, 32, 23.5),
    new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: uranusTexture
    })
);
uranus.position.set(22, 0, 22);
scene.add(uranus);
// Uranus Path
const uranusPathGeometry = new THREE.TorusGeometry(40, 0.001, 16, 100);
const uranusPathMaterial = new THREE.LineBasicMaterial({
    color: 0x00ff00,
    transparent: true,
    opacity: 0.05
});
const uranusPathLine = new THREE.Line(uranusPathGeometry, uranusPathMaterial);
uranusPathLine.position.set(0, 0, 0);
uranusPathLine.rotateX(Math.PI / 2);
scene.add(uranusPathLine);

// Neptune
const neptuneTexture = new THREE.TextureLoader().load('images/neptunemap.jpg');
const neptune = new THREE.Mesh(
    new THREE.SphereGeometry(1.5, 32, 32, 23.5),
    new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: neptuneTexture
    })
);
neptune.position.set(25, 0, 25);
scene.add(neptune);
// Neptune Path
const neptunePathGeometry = new THREE.TorusGeometry(45, 0.001, 16, 100);
const neptunePathMaterial = new THREE.LineBasicMaterial({
    color: 0x00fff0,
    transparent: true,
    opacity: 0.05
});
const neptunePathLine = new THREE.Line(neptunePathGeometry, neptunePathMaterial);
neptunePathLine.position.set(0, 0, 0);
neptunePathLine.rotateX(Math.PI / 2);
scene.add(neptunePathLine);

// Pluto
const plutoTexture = new THREE.TextureLoader().load('images/plutomap1k.jpg');
const plutoBumpTexture = new THREE.TextureLoader().load('images/plutobump1k.jpg');
const pluto = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32, 23.5),
    new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: plutoTexture,
        bumpMap: plutoBumpTexture,
        bumpScale: 0.05
    })
);
pluto.position.set(28, 0, 28);
scene.add(pluto);
// Pluto Path
const plutoPathGeometry = new THREE.TorusGeometry(50, 0.001, 16, 100);
const plutoPathMaterial = new THREE.LineBasicMaterial({
    color: 0x0000ff,
    transparent: true,
    opacity: 0.05
});
const plutoPathLine = new THREE.Line(plutoPathGeometry, plutoPathMaterial);
plutoPathLine.position.set(0, 0, 0);
plutoPathLine.rotateX(Math.PI / 2);
scene.add(plutoPathLine);

function animate() {
    requestAnimationFrame(animate);

    var date = Date.now() * 0.0001;

    mercury.position.x = Math.cos(date * 2) * 10;
    mercury.position.z = Math.sin(date * 2) * 10;
    mercury.rotation.y += 0.01;

    venus.position.x = Math.cos(date * 1.3) * 15;
    venus.position.z = Math.sin(date * 1.3) * 15;
    venus.rotation.y += 0.01;

    earth.position.x = Math.cos(date) * 20;
    earth.position.z = Math.sin(date) * 20;
    earth.rotation.y += 0.01;
    moon.position.x = earth.position.x + Math.cos(date * 30) * 0.7;
    moon.position.z = earth.position.z + Math.sin(date * 30) * 0.7;
    moon.rotation.y += 0.01;

    mars.position.x = Math.cos(date * 0.8) * 25;
    mars.position.z = Math.sin(date * 0.8) * 25;
    mars.rotation.y += 0.01;

    jupiter.position.x = Math.cos(date * 0.4) * 30;
    jupiter.position.z = Math.sin(date * 0.4) * 30;
    jupiter.rotation.y += 0.01;

    saturn.position.x = Math.cos(date * 0.3) * 35;
    saturn.position.z = Math.sin(date * 0.3) * 35;
    saturn.rotation.y += 0.01;

    uranus.position.x = Math.cos(date * 0.25) * 40;
    uranus.position.z = Math.sin(date * 0.25) * 40;
    uranus.rotation.y += 0.01;

    neptune.position.x = Math.cos(date * 0.20) * 45;
    neptune.position.z = Math.sin(date * 0.20) * 45;
    neptune.rotation.y += 0.01;

    pluto.position.x = Math.cos(date * 0.15) * 50;
    pluto.position.z = Math.sin(date * 0.15) * 50;
    pluto.rotation.y += 0.01;

    controls.update();

    renderer.render(scene, camera);
}

animate();
