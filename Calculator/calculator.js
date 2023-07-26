// JS Calculation
let resultString = "";
let result = 0;
let container = document.querySelector("div.container");
let btn = document.querySelectorAll("div.btn");
let btnNumber = document.querySelectorAll("div.btnNumber");
let btnEqual = document.querySelector("div.equal");
let numberString = "";
let array = [];

  for (let i = 0; i < 16; i++) {
    btn[i].addEventListener("click", function(){
      if (this.innerHTML != "=") {resultString += this.innerHTML};
      document.querySelector(".operation").innerHTML = resultString;
      let clickValue = this.innerHTML;
      let className = this.className;
      if (className == "btn btnNumber") {numberString = numberString + clickValue} 
        else {
          array.push(numberString); 
          numberString = "";
          if (className != "btn equal") {array.push(clickValue)};
        }
    })
  }

btnEqual.addEventListener("click", function(){
  if (array[1] == "+") {
    document.querySelector(".result").innerHTML = array[0] + array[2];
  }
  if (array[1] == "-") {
    document.querySelector(".result").innerHTML = array[0] - array[2];
  }
  if (array[1] == "x") {
    document.querySelector(".result").innerHTML = array[0] * array[2];
  }
  if (array[1] == "/") {
    document.querySelector(".result").innerHTML = array[0] / array[2];
  }
  array=[];
  array.push(document.querySelector(".result").innerHTML);
  resultString = document.querySelector(".result").innerHTML;
  document.querySelector(".operation").innerHTML = resultString;
  console.log(array[0]);  
  console.log(resultString);
})




// JS localStorage