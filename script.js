
var display = document.querySelector('.main-display');
var errorMessage = document.querySelector('.error-message');
var trending = document.querySelector('.trending');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const reset = document.querySelector('.reset');

function displayNumber(){
    display.textContent = '0'
    numbers.forEach((number) => {
        number.addEventListener('click', (e) => { 
            display.textContent.length <= 12 ?
            display.textContent == '0' ? display.textcontent = e.target.getAttribute('data-value'): 
            display.textContent = display.textContent + e.target.getAttribute('data-value'):
            errorMessage.textContent = 'maximum length';
        });
    })
}


function displayOperation(){
    displayNumber();
    operators.forEach((operator)=> {
        operator.addEventListener('click', ()=>{
            trending.textContent = display.textContent + trending.textContent;
            display.textContent = '0'
        })
    });

    reset.addEventListener('click', ()=>{
        trending.textContent = '';
        display.textContent = '0'
    })
   
}


displayOperation();






