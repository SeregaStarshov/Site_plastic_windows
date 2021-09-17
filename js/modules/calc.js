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
            if (isNumber(calcType.value) && isNumber(calcTypeMaterial.value)) {
                calc.addEventListener('input', () => {
                    calcTotal.value = Math.ceil(calcType.value * calcInput.value * calcTypeMaterial.value);
                });
            }
        };
        calcTotalValue();

        calc.addEventListener('change', calcTotalValue);
    }
};

export default calc;