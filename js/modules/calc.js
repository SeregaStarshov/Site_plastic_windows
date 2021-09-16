const calcTotal = document.getElementById('calc-total');


const calc = () => {
    const calc = document.getElementById('calc');
    const calcType = document.getElementById('calc-type');
    const calcTypeMaterial = document.getElementById('calc-type-material');
    const calcInput = document.getElementById('calc-input');

    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    

    if (calc) {
        const calcTotalValue = () => {
            let total;
            if (isNumber(calcType.value) && isNumber(calcTypeMaterial.value)) {
                total = Math.ceil(calcType.value * calcTypeMaterial.value);
                calc.addEventListener('input', () => {
    
                    calcTotal.value = total * calcInput.value;
                });
            }
        };
        calcTotalValue();

        calc.addEventListener('change', calcTotalValue);
    }
    
};

export default calc;