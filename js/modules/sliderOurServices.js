const sliderOurServices = () => {
    const services = document.getElementById('services');
    const serviceRow = services.querySelector('.row');
    const servicesArrow = document.querySelector('.services-arrows');
    const serviceButton = services.querySelectorAll('.service-button');
    const serviceBlock = services.querySelectorAll('.service-block');
    let count = 0;
    

    const style = () => {
        services.style.position = 'relative';
        serviceButton.forEach(item => {
            item.style.cssText = 'position: static;';
        });
        serviceBlock.forEach(item => {
            item.style.cssText = 'position: relative; left: 0; transition: all ease 1s;';
        });

        if (document.documentElement.offsetWidth >= 576) {
            serviceRow.style.cssText = 'display: flex; overflow: hidden; max-width: 1040px; margin: auto';
            servicesArrow.style.cssText = 'left: 47.5%; bottom: 10px; position: absolute';
        } else if (document.documentElement.offsetWidth < 576) {
            serviceRow.style.cssText = 'display: flex; overflow: hidden; max-width: 300px; margin: auto';
            servicesArrow.style.cssText = 'left: 36.5%; bottom: 10px; position: absolute';
        }
    };
    style();

    const setWidthServiceItem = () => {
        let width;
        serviceBlock.forEach(item => {
            width = item.offsetWidth;
        });
        return width;
    };
    
    const widthElem = setWidthServiceItem();

    const moveRightDesktop = () => {
        count -= (widthElem + 60) * 2;
        serviceBlock.forEach((item) => {
            if (count < -1040) {
                count = 0;
            }
            item.style.left = count + 'px';
        });
    };
    
    const moveLeftDesktop = () => {
        count += (widthElem + 60) * 2;
        serviceBlock.forEach((item) => {
            if (count >= 1040) {
                count = -1040;
            }
            item.style.left = count + 'px';
        });
    };

    const moveRightMobile = () => {
        count -= widthElem + 60;
        serviceBlock.forEach((item) => {
            if (count < -900) {
                count = 0;
            }
            item.style.left = count + 'px';
        });
    };

    const moveLeftMobile = () => {
        count += widthElem + 60;
        serviceBlock.forEach((item) => {
            if (count > 0) {
                count = -900;
            }
            item.style.left = count + 'px';
        });
    };

    servicesArrow.addEventListener('click', event => {
        const target = event.target;
        if (target.closest('.services__arrow--right')) {
            if (document.documentElement.offsetWidth >= 576) {
                moveRightDesktop();
            } else if (document.documentElement.offsetWidth < 576) {
                moveRightMobile();
            }
        }
        if (target.closest('.services__arrow--left')) {
            if (document.documentElement.offsetWidth >= 576) {
                moveLeftDesktop();
            } else if (document.documentElement.offsetWidth < 576) {
                moveLeftMobile();
            }
        }
    });

    window.addEventListener('resize', () => {
        style();
    });
};

export default sliderOurServices;