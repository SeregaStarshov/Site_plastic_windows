import { overlay } from "./modalCall";
const smoothScroll = document.querySelector('.smooth-scroll');
export { smoothScroll };

const documents = () => {
    const documents = document.getElementById('documents');
    const documentOverlay = document.querySelectorAll('.document-overlay');
    const divModal = document.createElement('div');
    const img = document.createElement('img');


    divModal.classList.add('documents-modal');
    divModal.style.cssText = 'max-width: 849px; height: 100%; position: fixed; top: 0; left: 33%; display: none';
    smoothScroll.after(divModal);
    img.setAttribute('src', './images/documents/original/document4.jpg');
    img.style.cssText = 'height: 100%;';
    divModal.append(img);



    documents.addEventListener('click', event => {
        let target = event.target;
        event.preventDefault();

        if (target.closest('.sertificate-document')) {
            overlay.style.display = 'block';
            divModal.style.display = 'block';
        }
    });

    documentOverlay.forEach(item => {
        item.addEventListener('mouseover', () => {
            if (item.closest('.sertificate-document')) {
                item.style.cssText = 'opacity: 1; width: 200px; left: 97px;';
            }
        });

        item.addEventListener('mouseout', () => {
            item.style.opacity = '0';
        });
    });

    document.body.addEventListener('click', event => {
        if (event.target.closest('.documents-modal') || event.target === overlay) {
            overlay.style.display = 'none';
            divModal.style.display = 'none';
        }
    });
};

export default documents;