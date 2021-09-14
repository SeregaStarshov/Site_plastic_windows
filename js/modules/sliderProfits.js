const showSliderProfits = () => {
    const benefitsArrow = document.querySelectorAll('.benefits__arrow');
    const benefitsWrap = document.querySelector('.benefits-wrap');
    const benefitsItems = document.querySelectorAll('.benefits__item');

    let count = 0;
    let width;
    benefitsWrap.style.overflow = 'hidden';
    if (document.documentElement.clientWidth > 576) {
        benefitsWrap.style.maxWidth = '550px';
    } else if (document.documentElement.clientWidth < 576) {
        benefitsWrap.style.maxWidth = '330px';
    }
    
    const setStepSlide = () => {
        benefitsItems.forEach(item => {
            item.style.minWidth = '189px';
            item.style.height = 'auto';
            width = item.style.minWidth;
            console.log(width);
            benefitsWrap.style.width = width * benefitsItems.length + 'px';
        });
    };
    console.log(width)
    window.addEventListener('resize', setStepSlide);
    setStepSlide();

    const stepNext = () => {
        for (let i = 0; i < benefitsArrow.length; i++) {
            benefitsArrow[0].addEventListener('click', event => {
                if (document.documentElement.clientWidth > 576) {
                    count += 3;
                    moveSlide();
                }
            });
        }
    };

    stepNext();

    function moveSlide() {
        benefitsWrap.style.transform = 'translate(- '+ count * width +'px)';
    }
};


export default showSliderProfits;
