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
        addBtn.classList.add("absolute");
        addBtn.classList.add("top-20");
        addBtn.classList.add("mt-2");
        addTaskForm.classList.add("top-1/4")
        addTaskForm.classList.add("mt-5")
        addBtn.classList.add("object-scale-down");

        addTaskForm.style.display = "block"
        // addTaskFormBlur.style.display = "block"


        addBtn.classList.remove('close_click')

        addBtn.src = 'res/close.png';
        click = 1;



    } else {

        addTaskForm.style.display = "none"
        addTaskFormBlur.style.display = "none"

        addBtn.classList.remove("absolute");
        addBtn.classList.remove("top-20");

        addBtn.classList.add('close_click')
        addBtn.classList.remove('add_click')

        addBtn.src = 'res/add.png'
        click = 0;

    }

})