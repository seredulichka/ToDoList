const list = document.querySelector('.todo-list'),
      input = document.querySelector('.todo-input'),
      form = document.querySelector('.todo-form'),
      priority = document.querySelector('.todo-priority');

priority.addEventListener('click', ()=> {
    priority.classList.toggle('is-important');
    if (priority.classList.contains('is-important')) {
      priority.textContent = 'An important task';
    } else {
      priority.textContent = 'Common task'; 
    }
}); 

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  let newTask = input;

  const isImportant = priority.classList.contains('is-important');

  document.querySelector('.todo-list').innerHTML += `
  <li class = "item-to-do ${ isImportant ? 'is-important' : '' }"> ${newTask.value}
    <div class="delete"></div>
  </li>
  `;

  input.value = '';
});

document.querySelector('.todo-list').addEventListener("click", e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});