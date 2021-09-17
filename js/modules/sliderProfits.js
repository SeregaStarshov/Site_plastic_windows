const showSliderProfits = () => {
    const benefitsArrow = document.querySelectorAll('.benefits__arrow');
    const benefitsWrap = document.querySelector('.benefits-wrap');
    const benefitsItems = document.querySelectorAll('.benefits__item');
    let count = 0;


    function setStyleItems() {
        benefitsWrap.style.cssText = `overflow: hidden; position: relative;`;
        benefitsItems.forEach((item) => {
            if (document.documentElement.clientWidth >= 576) {
                item.style.cssText = 'position: relative; left: 0; min-width: 185px; transition: all ease 1s';
                benefitsWrap.style.maxWidth = '550px';
            } else if (document.documentElement.clientWidth < 576) {
                item.style.cssText = 'position: relative; left: 0; min-width: 150px; transition: all ease 1s';
                benefitsWrap.style.width = '300px';
            }
            
        });
    }
    setStyleItems();

    const setStepSlide = () => {
        benefitsArrow.forEach(item => {
            if (document.documentElement.clientWidth > 576) {
                item.addEventListener('click', event => {
                    if (event.target.closest('.benefits__arrow--left') === item) {
                        count += 576;
                        benefitsItems.forEach(item => {
                            if (count > 0) {
                                count = -576;
                            }
                            item.style.left = count + 'px';
                        });
                    } else if (event.target.closest('.benefits__arrow--right') === item) {
                        count -= 576;
                        benefitsItems.forEach(item => {
                            if (count < -576) {
                                count = 0;
                            }
                            item.style.left = count + 'px';
                        });
                    }
                });
            }

            if (document.documentElement.clientWidth < 576) {
                item.addEventListener('click', event => {
                    if (event.target.closest('.benefits__arrow--left') === item) {
                        count += 300;
                        benefitsItems.forEach(item => {
                            if (count > 0) {
                                count = -600;
                            }
                            item.style.left = count + 'px';
                        });
                    } else if (event.target.closest('.benefits__arrow--right') === item) {
                        count -= 300;
                        benefitsItems.forEach(item => {
                            if (count < -600) {
                                count = 0;
                            }
                            item.style.left = count + 'px';
                        });
                    }
                });
            }
        });
    };

    setStepSlide();
};

export default showSliderProfits;