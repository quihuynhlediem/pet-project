let resultString = "";
let result = document.querySelector('div.result');
let btnEqual = document.querySelector("div.equal");
let btnDel = document.querySelector("div.delete");
let operation = document.querySelector("div.operation");

function addition(a, b){
  return(a + b);
}

function subtraction(a, b){
  return(a - b);
}

function multiplication(a, b){
  return(a * b);
}

function division(a, b){
  di = a / b;
  return(di.toFixed(2));
}

function addToString(){
  resultString += this.event.target.innerHTML;
  operation.innerHTML = resultString;
}

function deleteString(){
  resultString = resultString.substring(0, resultString.length - 1);
  //string.substring(a, b) cắt 1 chuỗi từ chuỗi string bắt đầu từ vtri a kết thúc ở b
  operation.innerHTML = resultString;
}

btnEqual.addEventListener('click', function(){
  //string.indexOf(a) in ra vị trí của a đầu tiên trong chuỗi string, nếu không có in ra -1
  if (resultString.indexOf('+') != -1){
    x = Number(resultString.substring(0, resultString.indexOf('+')));
    y = Number(resultString.substring(resultString.indexOf('+') + 1, resultString.length));
    result.innerHTML = addition(x, y);
  } else if (resultString.indexOf('-') != -1){
    x = Number(resultString.substring(0, resultString.indexOf('-')));
    y = Number(resultString.substring(resultString.indexOf('-') + 1, resultString.length));
    result.innerHTML = subtraction(x, y);
  } else if (resultString.indexOf('x') != -1){
    x = Number(resultString.substring(0, resultString.indexOf('x')));
    y = Number(resultString.substring(resultString.indexOf('x') + 1, resultString.length));
    result.innerHTML = multiplication(x, y);
  } else if (resultString.indexOf('/') != -1){
    x = Number(resultString.substring(0, resultString.indexOf('/')));
    y = Number(resultString.substring(resultString.indexOf('/') + 1, resultString.length));
    result.innerHTML = division(x, y);
  } else {
    result.innerHTML = resultString;
  }

  resultString = '';
  operation.innerHTML = resultString;

})