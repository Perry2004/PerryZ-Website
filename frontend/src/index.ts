import "./styles/styles.scss";
import * as bootstrap from 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createClient } from 'pexels';
import "./fix.js";

// queue of functions to run after the page is loaded
const runningQueue = new Set<Function>();

/**
 * Duplicate the rolling images to achieve infinite scrolling effect
 */
function duplicateRollingImages(): void {
    const imgGroup = document.querySelector(".pexels-img-group");

    if (!imgGroup) {
        console.log("no pexels-img-group found");

        return;
    }
    const cloned = imgGroup?.cloneNode(true);
    imgGroup?.parentNode?.appendChild(cloned);
}
runningQueue.add(duplicateRollingImages);

/**
 * Pauses the rolling images when the mouse is hovering over the image container and resumes when the mouse leaves
 */
function pauseRollingImagesOnHover(): void {
    const imgContainer = document.querySelector("#pexels-img-container") as HTMLElement;
    const imgGroups = document.querySelectorAll(".pexels-img-group") as NodeListOf<HTMLElement>;

    imgContainer?.addEventListener("mouseover", () => {
        // pause all rolling images
        for (let ele of imgGroups) {
            ele.style.animationPlayState = "paused";
        }
    });
    imgContainer?.addEventListener("mouseout", () => {
        // resume all rolling images
        for (let ele of imgGroups) {
            ele.style.animationPlayState = "running";
        }
    });
}
runningQueue.add(pauseRollingImagesOnHover);

/**
 * Enable bootstrap popovers and allow HTML content inside the popover
 */
function enablePopOver(): void {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.forEach(function (popoverTriggerEl) {
        new bootstrap.Popover(popoverTriggerEl, {
            html: true
        });
    });
}
runningQueue.add(enablePopOver);

for (const fn of runningQueue) {
    fn();
}