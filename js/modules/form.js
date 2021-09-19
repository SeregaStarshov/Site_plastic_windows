const form = document.querySelectorAll('form');
const calcTotal = document.getElementById('calc-total');
const calcType = document.getElementById('calc-type');
const calcTypeMaterial = document.getElementById('calc-type-material');
const calcInput = document.getElementById('calc-input');
import {headerModal} from "./modalCall";
import { overlay } from "./modalCall";
import {servicesModal} from "./ourServices";

const submitForm = () => {
    const inputsName = document.querySelectorAll('input[name="fio"]');
    const inputsPhone = document.querySelectorAll('input[name="phone"]');
    const btnsSubmit = document.querySelectorAll('button[type="submit"]');

    inputsName.forEach(item => {
        item.setAttribute('required', true);
        item.addEventListener('input', event => {
            const target = event.target;
            if (item === target) {
                if (item.value.trim() === '') {
                    item.value = '';
                    return;
                }

                if (item.value.length < 2) {
                    btnsSubmit.forEach(item => {
                        item.setAttribute('disabled', true);
                    });
                } else {
                    btnsSubmit.forEach(item => {
                        item.removeAttribute('disabled');
                    });
                    item.value = item.value.replace(/[^а-яa-z]/ig, '');
                }
            }
        });
    });

    inputsPhone.forEach(item => {
        item.setAttribute('required', true);
        item.addEventListener('input', event => {
            const target = event.target;
            if (item === target) {
                if (item.value.trim() === '') {
                    item.value = '';
                    return;
                }

                item.value = item.value.replace(/[^0-9\+]/ig, '');

                if (item.value.length < 7 || item.value.length > 11) {
                    btnsSubmit.forEach(item => {
                        item.setAttribute('disabled', true);
                    });
                } else {
                    btnsSubmit.forEach(item => {
                        item.removeAttribute('disabled');
                    });
                    
                }
            }
        });
    });


    form.forEach(item => {
        item.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(item);
            if (calcTotal) {
                formData.append('calc-total', calcTotal.value);
            }
            const body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            submitData(body)
                    .then(response => {
                        if (response.status !== 200) {
                            throw new Error();
                        }
                        
                        return response.text();
                    })
                    .then(data => {
                        console.log(data);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            if (event.target === item) {
                const itemCollection = item.elements;
                for (let i = 0; i < itemCollection.length - 1; i++) {
                        itemCollection[i].value = '';
                }
            }
            if (calcTotal) {
                calcType.value = '--';
                calcTypeMaterial.value = '--';
                calcInput.value = '';
                calcTotal.value = '';
            }
            overlay.style.display = 'none';
            headerModal.style.display = 'none';
            servicesModal.style.display = 'none';
        });
    });


    const submitData = body => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    });

};

export default submitForm;