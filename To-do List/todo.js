let input = document.getElementById('inputTodo');
let btn = document.getElementById('submit');
let alert = document.getElementById('alert_area');
let todoContainer = document.getElementById('todoContainer')


function todoRender(){
  let getDataFromlocalStorage = JSON.parse(localStorage.getItem("TodoForm"));
  let divItem = document.createElement('div');
  divItem.innerHTML = `
    <input type = "checkbox" class onclick = "checkDone(event)"/>
    <label class = 'todoContent'>
      ${getDataFromlocalStorage[getDataFromlocalStorage.length - 1].todo}
    </label>
    <br>`;
  divItem.className = "todoItem";
  divItem.id = JSON.parse(localStorage.getItem("TodoForm")).length;
  todoContainer.appendChild(divItem);
}


function localStorageSave(){
  let getDataFromlocalStorage = JSON.parse(localStorage.getItem("TodoForm"));
  let newTodo = {
    id: getDataFromlocalStorage.length + 1,
    todo: input.value,
    status: "processing"
  }
  getDataFromlocalStorage.push(newTodo);
  localStorage.setItem("TodoForm", JSON.stringify(getDataFromlocalStorage));

  //Renew input
  input.value = '';
}


function checkDone(){
  let getDataFromlocalStorage = JSON.parse(localStorage.getItem("TodoForm"));
  getId = Number(this.event.target.parentElement.id);
  divTarget = document.getElementById(this.event.target.parentElement.id);
  if (this.event.target.checked) {
    divTarget.firstElementChild.nextElementSibling.style.textDecoration = 'line-through';
    getDataFromlocalStorage[getId - 1].status = 'done';
  } else {
    divTarget.firstElementChild.nextElementSibling.style.textDecoration = 'none';
    getDataFromlocalStorage[getId - 1].status = 'processing';
  }
  localStorage.setItem("TodoForm", JSON.stringify(getDataFromlocalStorage));
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
    <input type = "checkbox" onclick = "checkDone(event)" />
    <label class = 'todoContent'>
      ${JSON.parse(localStorage.getItem("TodoForm"))[i].todo}
    </label>
    <br>`;
    divItem.className = "todoItem";
    divItem.id = JSON.parse(localStorage.getItem("TodoForm"))[i].id;
    todoContainer.appendChild(divItem);
    if (JSON.parse(localStorage.getItem("TodoForm"))[i].status == "done") {
      divItem.firstElementChild.nextElementSibling.style.textDecoration = 'line-through';
      divItem.firstElementChild.checked = 'checked';
    } else {
      divItem.firstElementChild.nextElementSibling.style.textDecoration = 'none';
    }
  }
}