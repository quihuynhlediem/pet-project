let colorRandom = document.querySelector('#color_container span');
let copyBtn = document.getElementById('copy');
let randomBtn = document.getElementById('random');
let body = document.getElementById('body');

randomBtn.addEventListener('click', function(){
  let color = Math.floor(Math.random()*15790320).toString(16);
  //Hàm Math.floor() lấy phần nguyên của số thập phân
  //Hàm Math.random() chọn random 1 số thực lớn hơn 0 nhỏ hơn 1
  //toString() chuyển integer thành string, toString(2) chuyển integer thành dãy nhị phân
  colorRandom.innerHTML = "#" + color;
  body.style.backgroundColor = "#" + color;
});

copyBtn.addEventListener('click', function(){
  navigator.clipboard.writeText(colorRandom.innerHTML); //Lưu vào clipboard
  alert('Color copied!');
})