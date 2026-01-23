import { DotLottie } from '@lottiefiles/dotlottie-web';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);

const player = new DotLottie({
  canvas: document.querySelector("#anim"),
  src: "assets/zipperanim2.json",
});

gsap.to(player.canvas, {
  scrollTrigger: {
    trigger: player.canvas,
    start: 'top bottom-=800',
    end: '+=1000',
    onUpdate: (self) => {
      player.setFrame(self.progress * (player.totalFrames-1));
    },
  },
});