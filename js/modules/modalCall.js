const overlay = document.querySelector('.overlay');
<<<<<<< HEAD
export { overlay };

=======
export {overlay};
>>>>>>> documents

const requestCall = () => {
    const callBtn = document.querySelector('.button>.btn-warning');
    const headerModal = document.querySelector('.header-modal');
    const headerModalClose = document.querySelector('.header-modal__close');

    callBtn.addEventListener('click', event => {
        event.preventDefault();
            overlay.style.display = 'block';
            headerModal.style.display = 'block';
    });

    document.body.addEventListener('click', event => {
        const target = event.target;
        if (target === headerModalClose || target === overlay) {
            overlay.style.display = 'none';
            headerModal.style.display = 'none';
        }
    });
};

export default requestCall;