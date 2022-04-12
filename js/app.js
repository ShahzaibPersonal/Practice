const addBtn = document.getElementById("add-btn")
const addTask = document.getElementById("task_list")
const addTaskForm = document.getElementById("form")
const addTaskFormBlur = document.getElementById("blur")

let click = 0

addTaskForm.style.display = "none"
addTaskFormBlur.style.display = "none"


addBtn.addEventListener('click', () => {

    if (click == 0) {

        addBtn.classList.add("add_click");
 
        addTaskForm.classList.add("top-1/4")
        addTaskForm.classList.add("mt-5")
        addBtn.classList.add("object-scale-down");

        addTaskForm.style.display = "inline"
        addBtn.classList.remove('close_click')

        addBtn.src = 'res/close.png';
        click = 1;



    } else {

        addTaskForm.style.display = "none"
        addTaskFormBlur.style.display = "none"
        addBtn.classList.add('close_click')

        addBtn.src = 'res/add.png'
        click = 0;

    }

})