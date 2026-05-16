document.addEventListener('DOMContentLoaded', () => {
    const firstNumber = document.getElementById('x');
    const secondNumber = document.getElementById('y');

    const actionsWrapper = document.querySelector('.calc__btn-wrapper');
    const output = document.querySelector('.calc__result');

    actionsWrapper.addEventListener('click', (event) => {
        if (!event.target.classList.contains('calc__btn')) return;

        const action = event.target.textContent.trim();

        let result = 0;

        const a = Number(firstNumber.value);
        const b = Number(secondNumber.value);

        if (firstNumber.value === '' || secondNumber.value === '') {
            alert('Заполните оба поля, пожалуйста');
            return;
        }

        switch(action) {
            case '+':
                result = a + b;
                break;
            case '-':
                result = a - b;
                break;
            case 'х':
                result = a * b;
                break;
            case '÷':
                result = a / b;
                break;
            case '^':
                result = a ** b;
                break;
            default:
                result = 'Ошибка вычисления';
        }

        output.textContent = result;
    })
})
