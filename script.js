
var display = document.querySelector('.main-display');
var errorMessage = document.querySelector('.error-message');
var trending = document.querySelector('.trending');
const numbers = document.querySelectorAll('.number');

function displayNumber(){
    numbers.forEach((number) => {
        number.addEventListener('click', (e) => { 
            display.textContent.length <= 12 ?  
            display.textContent = display.textContent + e.target.getAttribute('data-value'):
            display.textContent = display.textContent;
            errorMessage.textContent = 'maximum length'
        });
    })
}


displayNumber();






