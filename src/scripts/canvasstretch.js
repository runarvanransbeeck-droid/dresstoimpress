const initstretch = () => {
    const frame = document.querySelector(".stretchcanvas");
    const dragger = document.querySelector(".stretchcanvas__dragger");

    let isDragging = false;

    dragger.addEventListener("pointerdown", (e) => {
        console.log("mousedown");
        isDragging = true;
        dragger.setPointerCapture?.(e.pointerId);
        document.body.style.cursor = "ns-resize";
    });

    document.addEventListener("pointermove", (e) => {
        if (!isDragging) return;

        const minHeight = 210;
        const maxHeight = 700;

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
}

initstretch();