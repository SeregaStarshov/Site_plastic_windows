const overlay = document.querySelector('.overlay');
export { overlay };

const requestCall = () => {
    const callBtn = document.querySelector('.button>.btn-warning');
    const headerModal = document.querySelector('.header-modal');
    const headerModalClose = document.querySelector('.header-modal__close');

    callBtn.addEventListener('click', event => {
        event.preventDefault();
            overlay.style.display = 'block';
            headerModal.style.display = 'block';
    });

    headerModalClose.addEventListener('click', () => {
        overlay.style.display = 'none';
        headerModal.style.display = 'none';
    });
};

export default requestCall;