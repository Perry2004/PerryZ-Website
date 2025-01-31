import "./styles/styles.scss";
import * as bootstrap from "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./scripts/fix.js"; // fix.js for bootstrap 5 acordian
import "./scripts/canvas-3d.ts";

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

  pauseRollingImagesOnHover();
}

/**
 * Pauses the rolling images when the mouse is hovering over the image container and resumes when the mouse leaves
 */
function pauseRollingImagesOnHover(): void {
  const imgContainer = document.querySelector(
    "#pexels-img-container"
  ) as HTMLElement;
  const imgGroups = document.querySelectorAll(
    ".pexels-img-group"
  ) as NodeListOf<HTMLElement>;

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

/**
 * Enable bootstrap popovers and allow HTML content inside the popover
 */
function enablePopOver(): void {
  const popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  popoverTriggerList.forEach(function (popoverTriggerEl) {
    new bootstrap.Popover(popoverTriggerEl, {
      html: true,
    });
  });
}
runningQueue.add(enablePopOver);

/**
 * Convert the Pexels image URL to the description page URL
 * @param imageUrl A `string` of the Pexels image URL
 * @returns A `string` of the Pexels image URL in description page
 */
function convertPexelsUrl(imageUrl: string): string {
  const regex =
    /https:\/\/images\.pexels\.com\/photos\/(\d+)\/[^\/]+\/([^\/]+)\.jpeg/;
  const match = imageUrl.match(regex);

  if (match) {
    const photoId = match[1]; // Extract the photo ID
    const photoSlug = match[2]; // Extract the photo slug
    return `https://www.pexels.com/photo/${photoSlug}-${photoId}/`; // Construct the new URL
  } else {
    // Return an error message if the URL doesn't match the expected pattern
    return "Invalid Pexels image URL";
  }
}

function loadImages(): void {
  const imgGroup = document.querySelector(".pexels-img-group") as HTMLElement;
  const imgLinks: string[] = [
    "https://images.pexels.com/photos/28797087/pexels-photo-28797087/free-photo-of-autumn-maple-leaves-illuminated-by-street-lamp.jpeg",
    "https://images.pexels.com/photos/28797085/pexels-photo-28797085/free-photo-of-vibrant-autumn-foliage-in-a-dense-forest-setting.jpeg",
    "https://images.pexels.com/photos/28797083/pexels-photo-28797083/free-photo-of-vibrant-green-leaves-in-tranquil-forest-setting.jpeg",
    "https://images.pexels.com/photos/28797082/pexels-photo-28797082/free-photo-of-serene-forest-waterfall-in-lush-greenery.jpeg",
    "https://images.pexels.com/photos/28797080/pexels-photo-28797080/free-photo-of-vibrant-green-and-red-maple-leaves-in-autumn.jpeg",
    "https://images.pexels.com/photos/28797079/pexels-photo-28797079/free-photo-of-vibrant-autumn-japanese-maple-leaves-in-nature.jpeg",
    "https://images.pexels.com/photos/28797076/pexels-photo-28797076/free-photo-of-gray-squirrel-eating-on-green-grass.jpeg",
    "https://images.pexels.com/photos/28797071/pexels-photo-28797071/free-photo-of-modern-building-with-autumn-ivy-facade.jpeg",
    "https://images.pexels.com/photos/28707412/pexels-photo-28707412/free-photo-of-seagull-eating-pastry-on-green-grass-lawn.jpeg",
    "https://images.pexels.com/photos/28687366/pexels-photo-28687366/free-photo-of-fresh-seafood-display-at-local-market.jpeg",
    "https://images.pexels.com/photos/30422639/pexels-photo-30422639/free-photo-of-vibrant-pink-flower-in-sunlit-garden.jpeg",
    "https://images.pexels.com/photos/30422637/pexels-photo-30422637/free-photo-of-cluster-of-green-cacti-in-a-desert-setting.jpeg",
    "https://images.pexels.com/photos/30422636/pexels-photo-30422636/free-photo-of-serene-bonsai-tree-in-natural-outdoor-setting.jpeg",
  ];

  // shuffle the image links
  imgLinks.sort(() => Math.random() - 0.5);

  for (let imgLink of imgLinks) {
    const imgEle = document.createElement("img");
    imgEle.src = imgLink;
    imgEle.classList.add("pexels-img");
    imgEle.alt = "pexels image";
    imgGroup.appendChild(imgEle);

    // use event listener instead of <a> to avoid styling issues
    imgEle.addEventListener("click", (ele) => {
      const imgUrl = (ele.target as HTMLImageElement).src;
      const convertedUrl = convertPexelsUrl(imgUrl);
      console.log("Converted URL: ", convertedUrl);

      window.open(convertedUrl, "_blank");
    });
  }

  duplicateRollingImages();
}
runningQueue.add(loadImages);

for (const fn of runningQueue) {
  fn();
}
