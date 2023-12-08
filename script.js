const buttonsContainer = document.getElementsByClassName("buttons")[0];
const display = document.getElementById("display");
let number1 = null;
let number2 = null;
let currentOperation = null;

buttonsContainer.style.gridTemplateColumns = `repeat(4, 1fr)`;

const BUTTONS = [
    'AC', 'D', '%', '+',
    '1', '2', '3', '-',
    '4', '5', '6', 'x',
    '7', '8', '9', '/',
    '0', '.', '='
]

const buttArr = [];
BUTTONS.forEach(key => {
    const button = document.createElement('button');
    if(key === '=')     button.classList.add('buttonBig');
    else     button.classList.add('button');
    button.addEventListener('click', () => {
        if (key !== 'AC' && key !== 'D') {
            display.innerHTML += key;

            if (key !== '.' && key!== '='  && !(/^[0-9]*$/.test(key))) {
                if (number1 == null)
                number1 = Number(parseFloat(display.innerHTML.slice(0,-1)));
                display.innerHTML = '';
                currentOperation = key;
                resetButtonColors();
                button.classList.add('buttonActive');
            }
            else{
                
            }
        }

        if (key === 'AC') {
            resetButtonColors();
            display.innerHTML = '';
            number1 = null;
            number2 = null;
        }

        if (key === 'D') {
            let text = display.innerHTML;
            display.innerHTML = text.slice(0, -1);
        }
        
        if (key === '=') {
            number2 = Number(parseFloat(display.innerHTML.slice(0,-1)));

            switch (currentOperation) {
                case '+':
                    display.innerHTML = number1 + number2;
                    resetButtonColors();
                    number1 = parseFloat(display.innerHTML);
                    number2 = null;
                    break;
                case '-':
                    display.innerHTML = number1 - number2;
                    resetButtonColors();
                    number1 = parseFloat(display.innerHTML);
                    number2 = null;
                    break;
                case 'x':
                    display.innerHTML = number1 * number2;
                    resetButtonColors();
                    number1 = parseFloat(display.innerHTML);
                    number2 = null;
                    break;
                case '/':
                    display.innerHTML = number1 / number2;
                    resetButtonColors();
                    number1 = parseFloat(display.innerHTML);
                    number2 = null;
                    break;
                case '%':
                    display.innerHTML = number1 % number2;
                    resetButtonColors();
                    number1 = parseFloat(display.innerHTML);
                    number2 = null;
                    break;
                default:
                    display.innerHTML = 'ERROR';

            }
        }
    });
    

    button.innerHTML = key;
    buttonsContainer.appendChild(button);
    buttArr.push(button);
});

function resetButtonColors() {
    buttArr.forEach(btn => btn.classList.remove('buttonActive'));
}