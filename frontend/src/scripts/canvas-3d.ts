/**
 * This file is used to render 3D objects on the canvas
 */
import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

function renderAboutMeCanvas(): void {
    console.log("about-me blue marble rendering start");

    /* ----------------------------- initialization ----------------------------- */
    const canvas = document.querySelector("#about-me-canvas") as HTMLCanvasElement;

    let canvasVisible = true;

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

        // don't mess up the canvas size if it's not visible
        if (canvas.getBoundingClientRect().width === 0 || canvas.getBoundingClientRect().height === 0) {
            // console.log("disappear");
            canvasVisible = false;
            return;
        }

        // set back canvas size to 100%
        canvas.style.width = "100%";

        size.width = canvas.getBoundingClientRect().width;
        size.height = canvas.getBoundingClientRect().height;

        camera.aspect = size.width / size.height;
        camera.updateProjectionMatrix();

        renderer.setSize(size.width, size.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // responsiveness
        if (size.width < 1200 / 2 && size.width >= 768 / 2) {
            // lg
            camera.position.z = 3;
        } else if (size.width < 768 / 2) {
            // md
            camera.position.z = 4;
        } else {
            camera.position.z = 2;
        }

        // if (window.getComputedStyle(document.querySelector("#about-me-canvas-container") as HTMLElement).display === "none") {
        //     console.log("disappear");

        //     canvasVisible = false;
        // }

        // console.log(canvasVisible);
        // console.log(window.getComputedStyle(document.querySelector("#about-me-canvas-container") as HTMLElement).display);

        if (!canvasVisible && window.getComputedStyle(document.querySelector("#about-me-canvas-container") as HTMLElement).display !== "none") {
            // console.log("re-appear");

            canvasVisible = true;
            tick();
        }
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
    const blueMarbleTextureUrl = new URL("/src/assets/textures/blue-marble.webp", import.meta.url); // trigger vite to bundle the texture
    const blueMarbleTexture = new THREE.TextureLoader().load(blueMarbleTextureUrl.href);
    blueMarbleTexture.colorSpace = THREE.SRGBColorSpace;

    const earth = new THREE.Mesh(
        new THREE.SphereGeometry(1, 32, 32),
        new THREE.MeshStandardMaterial({
            map: blueMarbleTexture,
        })
    );

    earth.material.roughness = 0.45;
    earth.material.metalness = 0.7;

    scene.add(earth);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
    directionalLight.position.x = 10;

    const sunDirectionYRange = [
        directionalLight.position.x * Math.tan(THREE.MathUtils.degToRad(23.5)),
        directionalLight.position.x * Math.tan(THREE.MathUtils.degToRad(-23.5))
    ]

    scene.add(directionalLight);

    /* ----------------------------- responsiveness ----------------------------- */
    if (size.width < 1200 / 2 && size.width >= 768 / 2) {
        // lg
        camera.position.z = 3;
    } else if (size.width < 768 / 2) {
        // md
        camera.position.z = 4;
    } else {
        camera.position.z = 2;
    }

    if (canvas.getBoundingClientRect().width === 0 || canvas.getBoundingClientRect().height === 0) {
        canvasVisible = false;
    }

    if (!canvasVisible) {
        return;
    }

    /* ---------------------------- animation related --------------------------- */
    const frameRate = 60;
    const clock = new THREE.Clock();
    clock.start();
    let lastRenderTime = Date.now();

    let sunTiltDirection: "up" | "down" = "up";

    const tick = function () {

        // console.log(canvasVisible);

        if (canvas.getBoundingClientRect().width === 0 || canvas.getBoundingClientRect().height === 0) {
            canvasVisible = false;
        }

        if (!canvasVisible) {
            return;
        }


        const deltaTime = clock.getDelta();

        const timeSinceLastRender = (Date.now() - lastRenderTime) / 1000;

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
