const hatsize = () => {
    const box = document.querySelector(".hatcontainer");
    const handle = document.querySelector(".sizedhat");


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
    const handle = document.querySelector(".sizedress");   
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



const initsize = () => {
    hatsize();
    dresssize();
}

initsize();
