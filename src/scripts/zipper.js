import { DotLottie } from '@lottiefiles/dotlottie-web';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
  ScrollTrigger.disable();
}

const player = new DotLottie({
  canvas: document.querySelector("#anim"),
  src: "assets/zipperanim2.json",
});

gsap.matchMedia().add("(max-width: 1023px)", () => {
  gsap.to(player.canvas, {
    scrollTrigger: {
      trigger: player.canvas,
      start: 'top bottom-=800',
      end: '+=1000',
      onUpdate: (self) => {
        player.setFrame(self.progress * (player.totalFrames - 1));
      },
    },
  });
});




gsap.matchMedia().add("(min-width: 1024px)", () => {
  gsap.to(player.canvas, {
    scrollTrigger: {
      trigger: player.canvas,
      start: 'top bottom-=600',
      end: '+=1000',
      onUpdate: (self) => {
        player.setFrame(self.progress * (player.totalFrames - 1));
      },
    },
  });
});