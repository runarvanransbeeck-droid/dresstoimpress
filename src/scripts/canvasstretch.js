import gsap from 'gsap';

const initstretch = () => {
    const frame = document.querySelector(".stretchcanvas");
    const dragger = document.querySelector(".stretchcanvas__dragger");

    let isDragging = false;

    gsap.matchMedia().add("(max-width: 599px)", () => {
        

        frame.style.height = "210px";
        frame.style.width = "235px";
        
        dragger.addEventListener("pointerdown", (e) => {
            console.log("mousedown");
            isDragging = true;
            dragger.setPointerCapture?.(e.pointerId);
            document.body.style.cursor = "ns-resize";
        });

        document.addEventListener("pointermove", (e) => {
            if (!isDragging) return;

            const minHeight = 210;
            const maxHeight = 800;
            
            Math.min(
                Math.max(e.clientY - frame.getBoundingClientRect().top, minHeight),
                maxHeight
            );

            frame.style.height = `${newHeight}px`;
        });

        const stopDragging = () => {
            isDragging = false;
            document.body.style.cursor = "default";
        };

        window.addEventListener("pointerup", stopDragging);
        window.addEventListener("pointercancel", stopDragging);
    });

    gsap.matchMedia().add("(min-width: 600px)", () => {

        frame.style.height = "210px";
        frame.style.width = "235px";
        dragger.addEventListener("pointerdown", (e) => {
            console.log("mousedown");
            isDragging = true;
            dragger.setPointerCapture?.(e.pointerId);
            document.body.style.cursor = "ns-resize";
        });

        document.addEventListener("pointermove", (e) => {
            if (!isDragging) return;

            const minHeight = 210;
            const maxHeight = 900;

            const newHeight = Math.min(
                Math.max(e.clientY - frame.getBoundingClientRect().top, minHeight),
                maxHeight
            );

            frame.style.height = `${newHeight}px`;
        });

        const stopDragging = () => {
            isDragging = false;
            document.body.style.cursor = "default";
        };

        window.addEventListener("pointerup", stopDragging);
        window.addEventListener("pointercancel", stopDragging);
    });

    gsap.matchMedia().add("(min-width: 1024px)", () => {
        
        frame.style.height = "18rem";
        frame.style.width = "220px";
        dragger.addEventListener("pointerdown", (e) => {
            console.log("mousedown");
            isDragging = true;
            dragger.setPointerCapture?.(e.pointerId);
            document.body.style.cursor = "ew-resize";
        });

        document.addEventListener("pointermove", (e) => {
            if (!isDragging) return;

            const minWidth = 183;
            const maxWidth = 800;

            const newWidth = Math.min(
                Math.max(e.clientX - frame.getBoundingClientRect().left, minWidth),
                maxWidth
            );

            frame.style.width = `${newWidth}px`;
        });

        const stopDragging = () => {
            isDragging = false;
            document.body.style.cursor = "default";
        };

        window.addEventListener("pointerup", stopDragging);
        window.addEventListener("pointercancel", stopDragging);
    });
}

initstretch();