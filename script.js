var display = document.querySelector(".main-display");
var errorMessage = document.querySelector(".error-message");
var trending = document.querySelector(".trending");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const reset = document.querySelector(".reset");
const deleteKey = document.querySelector('.delete');
display.textContent = '0'

console.log('again zero');

function displayNumber() {
  numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
      console.log(display.textContent);
      if (display.textContent.length <= 12) {
        if (display.textContent == "0") {
          display.innerHTML = e.target.getAttribute("data-value");
        } else {
          display.textContent =
            display.textContent + e.target.getAttribute("data-value");
        }
      } else {
        errorMessage.textContent = "maximum length";
      }
    });
  });
}



function displayOperation() {
  operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
      
      trending.textContent = display.textContent + operator.textContent;
      display.textContent = "0";
    });
  });

  reset.addEventListener("click", () => {
    trending.textContent = "";
    display.textContent = "0";
  });

  deleteKey.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0,-1);
    if (display.textContent == '') display.textContent = '0'
  });
}

function operate(){

}

displayOperation();

displayNumber();
