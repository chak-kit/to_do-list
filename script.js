const input = document.getElementsByTagName('input')[0];
const ul = document.querySelector('ul');
let counter1 = document.getElementById('js-all-tasks');
let counter2 = document.getElementById('js-done-tasks');

let number = 0;
let num = 0;
input.addEventListener("keypress", (keyPressed) => {
  const keyEnter = 13;

  if (keyPressed.which === keyEnter) {
    let li = document.createElement("li");
    counter1.innerHTML = ++number;
    counter2.innerHTML = num;
    li.classList.add('app__list-text', 'app__list-item');
    let spanElement = document.createElement("span");
    spanElement.classList.add('app__list-remove');

    let newTodo = input.value;
    input.value = '';
    ul.appendChild(li).append(newTodo, spanElement);
    deleteTodo(spanElement);
  }
});

function deleteTodo(span) {
  span.addEventListener("click", function (event) {
    span.parentElement.remove();
    // event.stopPropagation();
    counter1.innerHTML = --number;

    if (!event.target.parentElement.classList.contains("app__list-checked")) {
      counter2.innerHTML = ++num;
    }
  });
}

// event listener to linethrough list if clicked
function onClickTodo(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("app__list-checked");
  }
}

ul.addEventListener("click", onClickTodo);


function loadTodo() {
  if (localStorage.getItem('todoList')) {
    ul.innerHTML = localStorage.getItem('todoList');
    deleteTodo();
  }
}

loadTodo();
