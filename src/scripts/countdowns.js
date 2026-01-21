const createCountdown = (selector, targetMonth) => {
    const targetDateTime = new Date(2026, targetMonth, 0, 0, 0, 0);
    const targetStamp = targetDateTime.getTime();

    const updateClock = () => {
        const now = new Date().getTime();
        let diff = Math.round((targetStamp - now) / 1000);

        if (diff < 0) {
            document.querySelector(selector).innerHTML = "0:0:0:0";
            clearInterval(timer);
            return;
        }

        const d = Math.floor(diff / (24 * 60 * 60));
        diff %= 24 * 60 * 60;
        const h = Math.floor(diff / (60 * 60));
        diff %= 60 * 60;
        const m = Math.floor(diff / 60);
        const s = diff % 60;

        document.querySelector(selector).innerHTML = `${d}:${h}:${m}:${s}`;
    };

    const timer = setInterval(updateClock, 1000);
    updateClock(); // run immediately
};

const initTimers = () => {
    createCountdown('.timegrid_1', 4);
    createCountdown('.timegrid_2', 6);
    createCountdown('.timegrid_3', 8);
    createCountdown('.timegrid_4', 10);
    createCountdown('.timegrid_5', 12);
};

initTimers();