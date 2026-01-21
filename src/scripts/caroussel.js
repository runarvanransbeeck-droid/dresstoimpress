const loop = document.querySelector('.carousselloop');
const loop1 = document.querySelector('.carousselloop1');
const loop2 = document.querySelector('.carousselloop2');
const prevbutton = document.querySelector('.caroussel-prevbutton');
const nextbutton = document.querySelector('.caroussel-nextbutton');

const initcaroussel = () => {
    let page = 1;
    let isScrolling = false;

    const handleScroll = (direction) => {
        if (isScrolling) return;
        isScrolling = true;

        loop.scrollBy({
            left: direction === 'next' ? 200 : -200,
            behavior: 'smooth'
        });

        setTimeout(() => {
            if (direction === 'next') {
                if (page === 6) {
                    page = 1;
                    loop1.style.order = 2;
                    loop.scrollLeft = 0;
                } else {
                    page++;
                }
            } else {
                if (page === 1) {
                    page = 6;
                    loop2.style.order = 1;
                    loop.scrollLeft = loop.scrollWidth - loop.clientWidth;
                } else {
                    page--;
                }
            }
            isScrolling = false;
        }, 400);
    };

    prevbutton.addEventListener('click', () => handleScroll('prev'));
    nextbutton.addEventListener('click', () => handleScroll('next'));
};

initcaroussel();