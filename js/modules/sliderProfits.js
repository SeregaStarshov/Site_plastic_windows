const showSliderProfits = () => {
    const benefitsArrows = document.querySelector('.benefits-arrows');
    const benefitsWrap = document.querySelector('.benefits-wrap');
    const benefitsItems = document.querySelectorAll('.benefits__item');
    let count = 0;


    const setStyleItems = () => {
        benefitsWrap.style.cssText = `overflow: hidden; position: relative;`;
        benefitsItems.forEach((item) => {
            if (document.documentElement.clientWidth >= 576) {
                item.style.cssText = 'position: relative; left: 0; min-width: 185px; transition: all ease 1s';
                benefitsWrap.style.maxWidth = '550px';
            } else if (document.documentElement.clientWidth < 576) {
                item.style.cssText = 'position: relative; left: 0; min-width: 150px; transition: all ease 1s';
                benefitsWrap.style.maxWidth = '300px';
            }
            
        });
    };
    setStyleItems();

    const setWidthSlide = () => {
        let width;
        benefitsItems.forEach(item => {
            width = item.offsetWidth;
        });
        return width;
    };
    let widthElement = setWidthSlide();

    const moveSlideLeftDesktop = () => {
        count += widthElement * 3;
        benefitsItems.forEach(item => {
            if (count > 0) {
                count = -(widthElement * 3);
            }

            item.style.left = count + 'px';
        });
    };

    const moveSlideRightDesktop = () => {
        count -= widthElement * 3;
        benefitsItems.forEach(item => {
            if (count < -widthElement * 3) {
                count = 0;
            }

            item.style.left = count + 'px';
        });
    };

    const moveSlideLeftMobile = () => {
        count += widthElement * 2;
        benefitsItems.forEach(item => {
            if (count > 0) {
                count = -widthElement * 4;
            }

            item.style.left = count + 'px';
        });
    };

    const moveSlideRightMobile = () => {
        count -= widthElement * 2;
        benefitsItems.forEach(item => {
            if (count < -widthElement * 4) {
                count = 0;
            }

            item.style.left = count + 'px';
        });
    };

    benefitsArrows.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('.benefits__arrow--left')) {
            if (document.documentElement.offsetWidth >= 576) {
                moveSlideLeftDesktop();
            } else if (document.documentElement.offsetWidth < 576) {
                moveSlideLeftMobile();
            }
        }

        if (target.closest('.benefits__arrow--right')) {
            if (document.documentElement.offsetWidth >= 576) {
                moveSlideRightDesktop();
            } else if (document.documentElement.offsetWidth < 576) {
                moveSlideRightMobile();
            }
        }
    });

    window.addEventListener('resize', () => {
        setStyleItems();
        setWidthSlide();
    });

};

export default showSliderProfits;
