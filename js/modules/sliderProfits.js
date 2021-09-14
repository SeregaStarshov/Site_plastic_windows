const showSliderProfits = () => {
    const benefitsArrow = document.querySelectorAll('.benefits__arrow');
    const benefitsWrap = document.querySelector('.benefits-wrap');
    const benefitsItems = document.querySelectorAll('.benefits__item');


    function setStyleItems() {
        benefitsWrap.style.cssText = `overflow: hidden; position: relative;`;
        benefitsItems.forEach((item, index) => {
            if (document.documentElement.clientWidth > 576) {
                if (index === 1) {
                    item.style.cssText = 'position: relative; left: 0; margin: 0 28px; transition: all ease 1s';
                } else if (index === 2) {
                    item.style.cssText = 'position: relative; left: 0; margin: 0 20px; transition: all ease 1s';
                } else if (index === 4) {
                    item.style.cssText = 'position: relative; left: 0; margin: 0 23px; transition: all ease 1s';
                } else {
                    item.style.cssText = 'position: relative; left: 0; margin: 0 33px; transition: all ease 1s';
                }
            } else if (document.documentElement.clientWidth < 576) {
                item.style.cssText = 'position: relative; left: 0; margin: 0 13px; transition: all ease 1s';
                if (index === 2 || index === 4) {
                    item.style.cssText = 'position: relative; left: 0; margin: 0 8px; transition: all ease 1s';
                }
            }
            
        });
    }
    setStyleItems();

    let count = 0;
    const setStepSlide = () => {
        benefitsArrow.forEach(item => {
            if (document.documentElement.clientWidth > 576) {
                benefitsWrap.style.maxWidth = '550px';
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
                benefitsWrap.style.width = '300px';
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
                        count -= 576;
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