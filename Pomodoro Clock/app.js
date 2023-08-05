let pomodoroBtn = document.getElementById('pomodoro');
let shortbreakBtn = document.getElementById('short_break');
let longbreakBtn = document.getElementById('long_break');
let startBtn = document.getElementById('start');
let timeshow = document.getElementById('timeshow');
container = document.getElementById('container');
let min = 25;
let second = 0;

function showtimeSet(){
  if (second == -1) {
    second = 59;
    secondShow = String(second);
    min = min - 1;
  } else if (second < 10) {
    secondShow = "0" + String(second);
  } else {
    secondShow = String(second);
  }

  if (min < 10) {
    minShow = "0" + String(min);
  } else {
    minShow = String(min);
  }
  timeshow.innerHTML = minShow + ' : ' + secondShow;
}

pomodoroBtn.addEventListener('click', function(){
  container.style.backgroundColor = '#ff6363';
  pomodoroBtn.style.backgroundColor = '#d45252';
  shortbreakBtn.style.backgroundColor = '#ff6363';
  longbreakBtn.style.backgroundColor = '#ff6363';
  startBtn.style.color = '#d45252';
  min = 25;
  second = 0;
  timeshow.innerHTML = '25 : 00';
});

shortbreakBtn.addEventListener('click', function(){
  container.style.backgroundColor = '#39e4ae';
  shortbreakBtn.style.backgroundColor = '#2bbd8f';
  pomodoroBtn.style.backgroundColor = '#39e4ae';
  longbreakBtn.style.backgroundColor = '#39e4ae';
  startBtn.style.color = '#2bbd8f';
  //clearInterval(timeInterval);
  min = 5;
  second = 0;
  timeshow.innerHTML = '05 : 00';
});

longbreakBtn.addEventListener('click', function(){
  container.style.backgroundColor = '#2cb8e7';
  pomodoroBtn.style.backgroundColor = '#2cb8e7';
  shortbreakBtn.style.backgroundColor = '#2cb8e7';
  longbreakBtn.style.backgroundColor = '#26a5cf';
  startBtn.style.color = '#26a5cf';
  //clearInterval(timeInterval);
  min = 15;
  second = 0;
  timeshow.innerHTML = '15 : 00';
});

startBtn.addEventListener('click',function(){
  if (startBtn.innerHTML == 'Start') {
    timeInterval = setInterval(function(){
      second = second - 1;
      showtimeSet();
    }, 1000);
    startBtn.innerHTML = 'Stop';
  } else if (startBtn.innerHTML == 'Stop') {
    clearInterval(timeInterval);
    showtimeSet();
    startBtn.innerHTML = 'Start';
  }
});