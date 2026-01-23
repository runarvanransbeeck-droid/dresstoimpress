const initstretch = () => {
    const frame = document.querySelector(".stretchcanvas");
    const dragger = document.querySelector(".stretchcanvas__dragger");

    let isDragging = false;

    dragger.addEventListener("click", () => {
        console.log("mousedown");
        isDragging = true;
        document.body.style.cursor = "ns-resize";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;

        const minHeight = 210;
        const maxHeight = 800;

        const newHeight = Math.min(
            Math.max(e.clientY - frame.getBoundingClientRect().top, minHeight),
            maxHeight
        );

        frame.style.height = `${newHeight}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        document.body.style.cursor = "default";
    });
}

initstretch();