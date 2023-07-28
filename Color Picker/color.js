let colorRandom = document.querySelector('#color_container span');
let copyBtn = document.getElementById('copy');
let randomBtn = document.getElementById('random');
let body = document.getElementById('body');

randomBtn.addEventListener('click', function(){
  let color = Math.floor(Math.random()*15790320).toString(16);
  colorRandom.innerHTML = "#" + color;
  body.style.backgroundColor = "#" + color;
});

copyBtn.addEventListener('click', function(){
  navigator.clipboard.writeText(colorRandom.innerHTML);
  alert('Color copied!');
})