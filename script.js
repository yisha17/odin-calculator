var display = document.querySelector(".main-display");
var errorMessage = document.querySelector(".error-message");
var trending = document.querySelector(".trending");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const reset = document.querySelector(".reset");
const deleteKey = document.querySelector('.delete');
const equalKey = document.querySelector('#operate');
const pointKey = document.querySelector('.point');
const pn = document.querySelector('.pn');

display.textContent = '0'


equalKey.addEventListener('click',operate)

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
  displayNumber();
  operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
      
      trending.textContent = display.textContent + operator.textContent;
      display.textContent = "0";
    });
  });

  reset.addEventListener("click", () => {
    trending.textContent = "";
    display.textContent = "0";
    errorMessage.textContent ='';
  });

  deleteKey.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0,-1);
    if (display.textContent == '') display.textContent = '0'
  });

  pointKey.addEventListener('click', ()=>{
    if (display.textContent.includes('.')){
      display.textContent = display.textContent
    }else{
      display.textContent = display.textContent + pointKey.textContent
    }
  })

  pn.addEventListener('click', ()=> {
    if (display.textContent[0] != '-'){
      display.textContent = '-' + display.textContent;
    }else{
      display.textContent = display.textContent.substring(1)
    }
  })
}

function operate(){
  const operation = trending.textContent.slice(-1); 
  const value = trending.textContent.slice(0,-1);
  let newValue;
  switch(operation){
    case '÷':
     newValue = (value / display.textContent).toFixed(4);
     console.log(newValue);
     console.log(typeof newValue);
     if (newValue.length > 12){
      display.textContent = newValue.slice(0,12);
      console.log("more than twelve");
     }else{
      display.textContent = newValue;
      console.log("here it is");
     }
     trending.textContent = '';
     break;

    case '×':
      newValue = value * display.textContent;

      if (newValue > 99999999999){
        display.textContent = newValue.toExponential(3)
      }else{
        display.textContent = newValue;
      }
      
      trending.textContent = '';
      break;
    case '+':
      newValue = Number(value) + Number(display.textContent);
      display.textContent = newValue;
      trending.textContent = '';
      break;
    case '-': 
      newValue = value - display.textContent;
      display.textContent = newValue;
      trending.textContent = '';
      break;     
  }
}

displayOperation();


