//butttons
const addButton = document.getElementById('add-btn');
const listButton = document.getElementById('list-view-btn');
const cardButton = document.getElementById('card-view-btn');

//elements
const taskInput = document.getElementById('task-input');
const takskList = document.getElementById('task-list-container');

//event listeners
//list
listButton.addEventListener('click', () =>{
    takskList.classList.remove('card-view');
    takskList.classList.add('list-view');
})


//cards
cardButton.addEventListener('click', () => {
    takskList.classList.remove('list-view');
    takskList.classList.add('card-view');
})


//add
addButton.addEventListener('click', () => {
    console.log("Add button pressed.");
    const inputValue = taskInput.value;
    const listElement = document.createElement('li');
    listElement.innerHTML = inputValue;
    takskList.appendChild(listElement);
    taskInput.value = '';   //clear input from previous input
});




// document.getElementById('task-list-container').classList.remove('card-view');
// document.getElementById('task-list-container').classList.add('list-view');