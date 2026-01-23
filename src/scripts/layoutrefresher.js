import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DotLottie } from '@lottiefiles/dotlottie-web';

const player = new DotLottie({ canvas: document.querySelector("#anim"), src: "assets/zipperanim2.json" });

player.addEventListener('ready', () => {
    ScrollTrigger.refresh();
});

player.addEventListener('complete', () => {
    ScrollTrigger.refresh();
});

const initLayoutRefresher = () => {
    window.addEventListener('load', () => ScrollTrigger.refresh());
}

initLayoutRefresher();