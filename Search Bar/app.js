let input = document.querySelector("input#myInput");

let li = [];
li.push(document.querySelector("#li1"));
li.push(document.querySelector("#li2"));
li.push(document.querySelector("#li3"));
li.push(document.querySelector("#li4"));
li.push(document.querySelector("#li5"));
li.push(document.querySelector("#li6"));
li.push(document.querySelector("#li7"));

let value_check = [];
value_check.push(li1.innerHTML.toLowerCase());
value_check.push(li2.innerHTML.toLowerCase());
value_check.push(li3.innerHTML.toLowerCase());
value_check.push(li4.innerHTML.toLowerCase());
value_check.push(li5.innerHTML.toLowerCase());
value_check.push(li6.innerHTML.toLowerCase());
value_check.push(li7.innerHTML.toLowerCase());

input.addEventListener("keyup",function () {
  let check = input.value.toLowerCase();

  for (let i = 0; i < 7; i++){
    if (value_check[i].indexOf(check) == -1){
      li[i].style.display = "none";
    } else {
      li[i].style.display = "block";
    }
  }
  if (check == "") {
    for (let i = 0; i < 7; i++) {
      document.getElementsByClassName('list_item')[i].style.display = 'none';
    }
   }
});