var display = document.querySelector(".main-display");
var errorMessage = document.querySelector(".error-message");
var trending = document.querySelector(".trending");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const reset = document.querySelector(".reset");

function displayNumber() {
  numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
      console.log(display.textContent);
      if (display.textContent.length <= 12) {
        if (display.textContent == "0") {
          console.log(e.target.getAttribute("data-value"));
          display.textcontent = e.target.getAttribute("data-value");
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
    operator.addEventListener("click", () => {
      trending.textContent = display.textContent + trending.textContent;
      display.textContent = "0";
    });
  });

  reset.addEventListener("click", () => {
    trending.textContent = "";
    display.textContent = "0";
  });
}

displayOperation();

displayNumber();
