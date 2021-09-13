import { overlay } from "./modalCall";

const callOurServices = () => {
    const serviceBtns = document.querySelectorAll('.service-button>.btn-success');
    console.log(serviceBtns);
    const servicesModal = document.querySelector('.services-modal');
    const servicesModalClose = document.querySelector('.services-modal__close');

    serviceBtns.forEach(item => {
        item.addEventListener('click', () => {
            servicesModal.style.display = 'block';
            overlay.style.display = 'block';
        });
    });
    
    servicesModalClose.addEventListener('click', () => {
        servicesModal.style.display = 'none';
        overlay.style.display = 'none';
    });
};

export default callOurServices;