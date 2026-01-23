import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const $body = document.body;
const $canvas = document.querySelector("#anim");

gsap.matchMedia().add("(max-width: 599px)", () => {
    gsap.to(document.querySelector("#anim"), {
        scrollTrigger: {
            trigger: document.querySelector("#anim"),
            start: 'top top-=800',
            end: document.querySelector(".speakercontainer"),
            onEnter: () => {
                gsap.to($body, {
                    backgroundColor: '#0f0f0f', duration: 0.6, ease: 'power1.inOut',
                    color: '#ffffff'

                });
                gsap.to($canvas, {
                    opacity: 0, duration: 0.6, ease: 'power1.inOut'
                });
                gsap.to(window, {
                    scrollTo: { y: ".startingfrom0container", offsetY: 200 },
                    duration: 0.6,
                    ease: 'power1.inOut'
                });
            },

            onEnterBack: () => {
                gsap.to($body, {
                    backgroundColor: '#0f0f0f', duration: 0.6, ease: 'power1.inOut',
                    color: '#ffffff'
                });
                gsap.to($canvas, {
                    opacity: 0, duration: 0.6, ease: 'power1.inOut'
                });
            },

            onLeave: () => {
                gsap.to($body, {
                    backgroundColor: '#B3FFE5', duration: 0.6, ease: 'power1.inOut',
                    color: '#393939'
                });
                gsap.to($canvas, {
                    opacity: 1, duration: 0.6, ease: 'power1.inOut'
                });
            },

            onLeaveBack: () => {
                gsap.to($body, {
                    backgroundColor: '#B3FFE5', duration: 0.6, ease: 'power1.inOut',
                    color: '#393939'
                })
                gsap.to($canvas, {
                    opacity: 1, duration: 0.6, ease: 'power1.inOut'
                });
            },

        }
    });
});

gsap.matchMedia().add("(min-width: 600px)", () => {
    gsap.to(document.querySelector("#anim"), {
        scrollTrigger: {
            trigger: document.querySelector("#anim"),
            start: 'top top-=300',
            end: document.querySelector(".speakercontainer"),
            onEnter: () => {
                gsap.to($body, {
                    backgroundColor: '#0f0f0f', duration: 0.6, ease: 'power1.inOut',
                    color: '#ffffff'
                });
                gsap.to($canvas, {
                    opacity: 0, duration: 0.6, ease: 'power1.inOut'
                });
                gsap.to(window, {
                    scrollTo: { y: ".startingfrom0container", offsetY: 150 },
                    duration: 0.6,
                    ease: 'power1.inOut'
                });
            },

            onEnterBack: () => {
                gsap.to($body, {
                    backgroundColor: '#0f0f0f', duration: 0.6, ease: 'power1.inOut',
                    color: '#ffffff'
                });
                gsap.to($canvas, {
                    opacity: 0, duration: 0.6, ease: 'power1.inOut'
                });
            },

            onLeave: () => {
                gsap.to($body, {
                    backgroundColor: '#B3FFE5', duration: 0.6, ease: 'power1.inOut',
                    color: '#393939'
                });
                gsap.to($canvas, {
                    opacity: 1, duration: 0.6, ease: 'power1.inOut'
                });
            },

            onLeaveBack: () => {
                gsap.to($body, {
                    backgroundColor: '#B3FFE5', duration: 0.6, ease: 'power1.inOut',
                    color: '#393939'
                })
                gsap.to($canvas, {
                    opacity: 1, duration: 0.6, ease: 'power1.inOut'
                });
            },

        }
    });
});

gsap.matchMedia().add("(min-width: 1024px)", () => {
    gsap.to(document.querySelector("#anim"), {
        scrollTrigger: {
            trigger: document.querySelector("#anim"),
            start: 'top top-=300',
            end: document.querySelector(".speakercontainer"),
            onEnter: () => {
                gsap.to($body, {
                    backgroundColor: '#0f0f0f', duration: 0.6, ease: 'power1.inOut',
                    color: '#ffffff'
                });
                gsap.to($canvas, {
                    opacity: 0, duration: 0.6, ease: 'power1.inOut'
                });
                gsap.to(window, {
                    scrollTo: { y: ".startingfrom0container", offsetY: 300 },
                    duration: 0.6,
                    ease: 'power1.inOut'
                });
            },

            onEnterBack: () => {
                gsap.to($body, {
                    backgroundColor: '#0f0f0f', duration: 0.6, ease: 'power1.inOut',
                    color: '#ffffff'
                });
                gsap.to($canvas, {
                    opacity: 0, duration: 0.6, ease: 'power1.inOut'
                });
            },

            onLeave: () => {
                gsap.to($body, {
                    backgroundColor: '#B3FFE5', duration: 0.6, ease: 'power1.inOut',
                    color: '#393939'
                });
                gsap.to($canvas, {
                    opacity: 1, duration: 0.6, ease: 'power1.inOut'
                });
            },

            onLeaveBack: () => {
                gsap.to($body, {
                    backgroundColor: '#B3FFE5', duration: 0.6, ease: 'power1.inOut',
                    color: '#393939'
                })
                gsap.to($canvas, {
                    opacity: 1, duration: 0.6, ease: 'power1.inOut'
                });
            },

        }
    });
});

