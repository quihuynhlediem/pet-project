let input = document.getElementById('inputTodo');
let btn = document.getElementById('submit');
let alert = document.getElementById('alert_area');
let todoContainer = document.getElementById('todoContainer')


function todoRender(){
  let getDataFromlocalStorage = JSON.parse(localStorage.getItem("TodoForm"));
  let divItem = document.createElement('div');
  divItem.innerHTML = `
    <div class = 'todoContent'>
      <div>${getDataFromlocalStorage[getDataFromlocalStorage.length - 1].todo}</div>
    </div>`;
  divItem.className = "todoItem";
  todoContainer.appendChild(divItem);
}


function localStorageSave(){
  let getDataFromlocalStorage = JSON.parse(localStorage.getItem("TodoForm"));
  let newTodo = {
    todo: input.value,
    status: "processing"
  }
  getDataFromlocalStorage.push(newTodo);
  localStorage.setItem("TodoForm", JSON.stringify(getDataFromlocalStorage));

  //Renew input
  input.value = '';
}


btn.addEventListener('click', function(){
  if ((input.value != null) && (input.value != "")){
    //Green alert
    alert.innerHTML = 'Information Saved';
    alert.style.backgroundColor = 'green';
    alert.style.display = 'block';

    
    let checkLocal = JSON.parse(localStorage.getItem("TodoForm"));
    if (checkLocal == null) {
      //Save info to localStorage
      let emptyArray = [];
      localStorage.setItem("TodoForm", JSON.stringify(emptyArray));

      localStorageSave();
      todoRender();
    } else {
      localStorageSave();
      todoRender();
    }
  } else {
    //Red alert
    alert.innerHTML = 'Please fill in something';
    alert.style.display = 'block';
    alert.style.backgroundColor = 'red';
  }

  //Disappear alert
  setTimeout(function(){
    alert.style.display = 'none';
  }, 1500)
})

//Render to screen when reload
if (JSON.parse(localStorage.getItem("TodoForm")) != null){
  for (let i = 0; i < JSON.parse(localStorage.getItem("TodoForm")).length; i++){
    let divItem = document.createElement('div');
    divItem.innerHTML = `
    <div class = 'todoContent'>
      <div>${JSON.parse(localStorage.getItem("TodoForm"))[i].todo}</div>
    </div>`;
    divItem.className = "todoItem";
    todoContainer.appendChild(divItem);
  }
}