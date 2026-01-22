import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const $body = document.body;

gsap.to(document.querySelector("#anim"), {
    scrollTrigger: {
        trigger: document.querySelector("#anim"),
        start: 'top top-=100',
        end: document.querySelector(".speakercontainer"),
        onEnter: () => gsap.to($body, {
            backgroundColor: '#0f0f0f', duration: 0.6, ease: 'ease.inout',
            color: '#ffffff'
        }),
        onEnterBack: () => gsap.to($body, {
            backgroundColor: '#0f0f0f', duration: 0.6, ease: 'ease.inout',
            color: '#ffffff'
        }),
        onLeave: () => gsap.to($body, {
            backgroundColor: '#B3FFE5', duration: 0.6, ease: 'ease.inout',
            color: '#393939'
        }),
        onLeaveBack: () => gsap.to($body, {
            backgroundColor: '#B3FFE5', duration: 0.6, ease: 'ease.inout',
            color: '#393939'
        })
        
    }
});