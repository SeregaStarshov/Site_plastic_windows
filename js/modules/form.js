const submitForm = () => {
    const form = document.querySelectorAll('form');
    //console.log(form);
    // const callbackForm = document.querySelectorAll('form[name="callback-form"]');
    // console.log(callbackForm);
    // const applicationForm = document.querySelector('form[name="application-form"]');
    // console.log(applicationForm);
    const formHorizontal = document.querySelectorAll('.form-horizontal');
    // console.log(formHorizontal);
    const inputsName = document.querySelectorAll('input[name="fio"]');
    console.log(inputsName);
    const inputsPhone = document.querySelectorAll('input[name="phone"]');
    console.log(inputsPhone);



    inputsName.forEach(item => {
        item.setAttribute('required', true);
        item.addEventListener('input', event => {
            const target = event.target;
            if (item === target) {
                if (item.value.trim() === '') {
                    item.value = '';
                    return;
                }

                item.value = item.value.replace(/[^а-яa-z]/ig, '');
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
            }
        });
    });

    inputsPhone.forEach(item => {
        item.addEventListener('blur', event => {
            if (item === event.target) {
                if (item.value.length < 4 || item.value.length > 16) {
                    item.value = '';
                }
            }
        });
    });


    form.forEach(item => {
        item.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(item);
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