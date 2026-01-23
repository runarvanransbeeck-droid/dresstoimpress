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
        const scale = Math.max(0.2, startScale + delta / 300);

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
        const scale = Math.max(0.2, startScale + delta / 300);
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

    handle.addEventListener("touchstart", (e) =>{
        e.preventDefault();
        box.style.scale = 1.5;
    });
}

const dresssizemobile = () => {
    const box = document.querySelector(".dresscontainer");
    const handle = document.querySelector(".sizerdress");

    handle.addEventListener("touchstart", (e) => {
        e.preventDefault();
        box.style.scale = 1.5;
    });
}

const initsize = () => {

    let mm = gsap.matchMedia();

 
    mm.add("(min-width: 800px)", () => {
        console.log("desktop size");

        hatsize();
        dresssize();
        

    });
    
    mm.add("(max-width: 799px)", () => {
        console.log("mobile size");

        hatsizemobile();
        dresssizemobile();

    });
    
    
}

initsize();
