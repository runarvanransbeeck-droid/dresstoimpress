import { gsap } from "gsap"

const hatsize = () => {
    const box = document.querySelector(".hatcontainer");
    const handle = document.querySelector(".sizerhat");


    let isDragging = false;


    let startX, startScale = 1;

    handle.addEventListener("mousedown", (e) => {
        e.preventDefault();
        console.log("mousedown");
        startX = e.clientX;
        isDragging = true;

    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const delta = e.clientX - startX;
        const scale = Math.max(1, startScale + delta / 300);

        box.style.transform = `scale(${scale})`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        document.body.style.userSelect = "auto";
    });
}

const dresssize = () => {
    const box = document.querySelector(".dresscontainer");
    const handle = document.querySelector(".sizerdress");
    let isDragging = false;

    let startX, startScale = 1;
    handle.addEventListener("mousedown", (e) => {
        e.preventDefault();
        console.log("mousedown");
        startX = e.clientX;
        isDragging = true;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const delta = e.clientX - startX;
        const scale = Math.max(1, startScale + delta / 300);
        box.style.transform = `scale(${scale})`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        document.body.style.userSelect = "auto";
    });
}

const hatsizemobile = () => {
    const box = document.querySelector(".hatcontainer");
    const handle = document.querySelector(".sizerhat");

    const maxScale = 2;
    const minScale = 1;
    const step = 0.2;

    let currentScale = 1;
    let growing = true;

    handle.addEventListener("touchstart", (e) => {
        e.preventDefault();
        
        if (growing && currentScale < maxScale) {
            currentScale += step;
            if (currentScale >= maxScale) growing = false;
        } else if (!growing && currentScale > minScale) {
            currentScale -= step;
            if (currentScale <= minScale) growing = true;
        }

        box.style.scale = currentScale;
    });
}

const dresssizemobile = () => {
    const box = document.querySelector(".dresscontainer");
    const handle = document.querySelector(".sizerdress");
    
    const maxScale = 2;
    const minScale = 1;
    const step = 0.2;

    let currentScale = 1;
    let growing = true;

    handle.addEventListener("touchstart", (e) => {
        e.preventDefault();

        if (growing && currentScale < maxScale) {
            currentScale += step;
            if (currentScale >= maxScale) growing = false;
        } else if (!growing && currentScale > minScale) {
            currentScale -= step;
            if (currentScale <= minScale) growing = true;
        }

        box.style.scale = currentScale;

    });
}

const initsize = () => {

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
        console.log("desktop size");

        hatsize();
        dresssize();


    });

    mm.add("(max-width: 1023px)", () => {
        console.log("mobile size");

        hatsizemobile();
        dresssizemobile();

    });
}

initsize();
