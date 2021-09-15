import { smoothScroll } from "./documents";

const scroll = () => {
    let count = 0;
    smoothScroll.style.cssText = 'display: none; cursor: pointer';




    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= 900 ) {
            smoothScroll.style.display = 'block';
        } else if (window.pageYOffset < 900) {
            smoothScroll.style.display = 'none';
        }
    });

    smoothScroll.addEventListener('click', () => {

        const timerId = setInterval(() => {
            window.scrollBy(0, count--);
            if (window.pageYOffset < 1) {
                clearInterval(timerId);
            }
        }, 10);
    });
};

export default scroll;