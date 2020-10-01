// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");



// Event Listener
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);



// Functions
function addTodo(event) {
    event.preventDefault();
    console.log("ekleme butonuna basıldı");

    // Create Todo Div (ul class="todo-list" in altına ekleme yapıyoruz)
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create Li
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todoInput.value;    // textbox'a yazılan şeyin değerini alacak ve ekleme butonuna bastığımızda listemizde göreceğiz

    todoDiv.appendChild(newTodo);     // todoDiv'in child'ı olarak eklendi

    // Create Completed Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");

    todoDiv.appendChild(completedButton);    // todoDiv'in child'ı olarak eklendi ve ekranda complete button göründü
 
    // Create Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");

    todoDiv.appendChild(deleteButton);       // todoDiv'in child'ı olarak eklendi ve ekranda delete button göründü

    // Append to List
    todoList.appendChild(todoDiv);     // todoDiv'in parent elementi todoList ve burada eklemeyi yaptık. Burası olmazsa ekleme yapınca ekranda gözükmez

    // Clear Todo Input Value
    todoInput.value =  "";       // textbox'a bir şey yazıp ekleme butonuna bastıktan sonra textbox'ı sıfırlayacak
}

function deleteCheck(e) {
    const item = e.target;
    console.log(item);

    // Delete Todo
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall");   // animasyon için CSS kısmında ayarlama yapılacak
        todo.remove();
    }

    // Check Todo
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}