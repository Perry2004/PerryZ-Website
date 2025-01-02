/**
 * This file is used to render 3D objects on the canvas
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { lights } from 'three/src/nodes/TSL.js';

function renderAboutMeCanvas(): void {
    /* ----------------------------- initialization ----------------------------- */
    const canvas = document.querySelector("#about-me-canvas") as HTMLCanvasElement;
    const size: { width: number, height: number } = {
        width: canvas.clientWidth,
        height: canvas.clientHeight
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    });
    renderer.setSize(size.width, size.height);

    window.addEventListener("resize", () => {
        size.width = canvas.getBoundingClientRect().width;
        size.height = canvas.getBoundingClientRect().height;

        camera.aspect = size.width / size.height;
        camera.updateProjectionMatrix();

        renderer.setSize(size.width, size.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    })

    /* ----------------- setup complete, rendering code below ---------------- */

    scene.background = new THREE.Color(0x181818); // make the background invisible

    /* ------------------------- reserved for debugging ------------------------- */
    // scene.add(new THREE.AxesHelper(5));
    // const orbitControl = new OrbitControls(camera, renderer.domElement);
    // orbitControl.enableDamping = true;
    // orbitControl.dampingFactor = 0.25;
    // orbitControl.enableZoom = true;

    camera.position.z = 2;
    camera.lookAt(0, 0, 0);

    /* --------------------------- objects and lights --------------------------- */
    const blueMarbleTexture = new THREE.TextureLoader().load("src/assets/textures/blue-marble.webp");
    blueMarbleTexture.colorSpace = THREE.SRGBColorSpace;

    const earth = new THREE.Mesh(
        new THREE.SphereGeometry(1, 32, 32),
        new THREE.MeshStandardMaterial({
            map: blueMarbleTexture,
        })
    );

    earth.material.roughness = 0.5;
    earth.material.metalness = 0.5;
    // earth.material.emissive = new THREE.Color("blue");
    // earth.material.emissiveIntensity = 0.02;

    scene.add(earth);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
    directionalLight.position.x = 10;

    const sunDirectionYRange = [
        directionalLight.position.x * Math.tan(THREE.MathUtils.degToRad(23.5)),
        directionalLight.position.x * Math.tan(THREE.MathUtils.degToRad(-23.5))
    ]

    scene.add(directionalLight);


    /* ---------------------------- animation related --------------------------- */
    const frameRate = 60;
    const clock = new THREE.Clock();
    clock.start();
    let lastRenderTime = Date.now();

    let sunTiltDirection: "up" | "down" = "up";

    const tick = function () {
        const deltaTime = clock.getDelta();

        const timeSinceLastRender = (Date.now() - lastRenderTime) / 1000;
        // console.log("time since last render: ", timeSinceLastRender);

        if (earth) {
            // rotate
            const rotationAmount = deltaTime;
            earth.rotation.y -= rotationAmount;

            // ecliptic tilt
            const tiltAmount = 1.2 * deltaTime;
            if (sunTiltDirection === "up") {
                directionalLight.position.y += tiltAmount;
                if (directionalLight.position.y >= sunDirectionYRange[0]) {
                    sunTiltDirection = "down";
                }
            } else {
                directionalLight.position.y -= tiltAmount;
                if (directionalLight.position.y <= sunDirectionYRange[1]) {
                    sunTiltDirection = "up";
                }
            }
        }

        if (timeSinceLastRender > 1 / frameRate) {
            renderer.render(scene, camera);
            lastRenderTime = Date.now();
            // console.log("rendering frame");

            requestAnimationFrame(tick);
        } else {
            // console.log("skipping frame");

            requestAnimationFrame(tick);
        }
        return;
    }
    tick();
}

renderAboutMeCanvas();