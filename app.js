document.querySelector('form').addEventListener('submit', handleSubmitForm);
document
  .querySelector('ul')
  .addEventListener('click', handleClickDeleteOrCheck);

document.getElementById('clearAll').addEventListener('click', handleClearAll);
function handleSubmitForm(e) {
  e.preventDefault();

  let input = document.querySelector('input');

  if (input.value != '') {
    addTodo(input.value);
  }
  input.value = '';
}
function handleClickDeleteOrCheck(e) {
  // console.log(e);
  // console.log(e.target.name);
  if (e.target.name == 'checkbox') {
    checkTodo(e);
  }
  if (e.target.name == 'deleteButton') {
    deleteTodo(e);
  }
}
function countItems() {
  let ul = document.querySelector('ul');
  var count = ul.childElementCount;
  var counter = document.querySelector('#item-count');
  counter.innerHTML = count;
}
function addTodo(todo) {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');

  li.innerHTML = `<input type="checkbox" name="checkbox" class="checkbox-round" />
  <span class="todo-item">${todo}</span>
  
  <button name="deleteButton" class="del-button"><i class="fas fa-trash"></i></button>
  `;
  li.classList.add('todo-list-item');
  ul.appendChild(li);

  //var count = ul.childElementCount;
  // var counter = document.querySelector('#item-count');
  //counter.innerHTML = count;
  countItems();
}
function checkTodo(e) {
  let item = e.target.parentNode;

  if (item.style.textDecoration === 'line-through') {
    item.style.textDecoration = '';
    //  console.log(item.style.textDecoration);
  } else {
    item.style.textDecoration = 'line-through';
    // console.log(item.style.textDecoration);
  }
}
function deleteTodo(e) {
  let item = e.target.parentNode;
  item.remove();

  //let ul = document.querySelector('ul');
  //var count = ul.childElementCount;
  //var counter = document.querySelector('#item-count');
  //counter.innerHTML = count;
  countItems();
}
function handleClearAll(e) {
  document.querySelector('ul').innerHTML = '';
  countItems();
}
