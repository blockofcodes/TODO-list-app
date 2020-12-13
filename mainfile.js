document.getElementById('add').addEventListener('click', add);
show();


//Displaying  the current TODO list
function show() {
    let todos = get_todos();

    let tagging = '<ul>';
    for(let i=0; i<todos.length; i++) {
        tagging += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    tagging += '</ul>';
 
    document.getElementById('todos').innerHTML = tagging;
 
    let buttons = document.getElementsByClassName('remove');
    for (let i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}


//retrieving the data from the browser local storage
function get_todos() {
    let todos = new Array;
    let todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}


 // Getting the value from the inputbox and adding it to the local storage
function add() {
    let task = document.getElementById('inputdata').value;
 
    let todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
//removing the selected TODO list 
function remove() {
    let id = this.getAttribute('id');
    let todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    
    show();

    return false;
}
 


 