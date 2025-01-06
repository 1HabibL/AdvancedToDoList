/* CHANGE ADD ICON WHEN HOVERED OVER */

const icon = document.querySelector('.icon');
const taskButton = document.querySelector('.add-task-button-2');

taskButton.addEventListener('mouseover', () => {
    icon.textContent = 'add_circle'
});

taskButton.addEventListener('mouseout', () => {
    icon.textContent = 'add';
});

/* CHANGE ADD ICON WHEN HOVERED OVER */

/* Give Add Task button 2 button functionality */
const addTaskButton = document.querySelector('.add-task-button-2')
const hiddenForm = document.getElementById('task-to-do-list-form')

addTaskButton.addEventListener('click', function(){
    hiddenForm.classList.toggle('hidden-form')
    hiddenForm.classList.toggle('visible-form')
})

/* Give Add Task button 2 button functionality */
/* Give cancel button functionality button functionality */

const cancelButton = document.querySelector('.cancel-Button')

cancelButton.addEventListener('click', function(){
    hiddenForm.classList.toggle('hidden-form')
    hiddenForm.classList.toggle('visible-form')

})
/* Give cancel button functionality button functionality */

/* give form Functioanlity */
document.addEventListener("DOMContentLoaded", () => {
const formInfo = document.getElementById("task-to-do-list-form")
const actualTask = document.getElementById("actualTask")
const minorDesc = document.getElementById('minorDesc')
const taskDue = document.getElementById('taskDue')
const priority = document.getElementById('priority')
const AddTaskButton = document.getElementById('addTaskButton3')
const taskSections = document.getElementById('todolisttasks')
const deleteButtonDiv = document.getElementById('deleteButton1')
  

//load tasks from local storage

const loadTasks = () => {
    const taskData = JSON.parse(localStorage.getItem('tasks')) || [];
    taskData.forEach(({taskTitle, taskDesc, taskDueDate, taskUrgency}) => {
        createTaskCard(taskTitle, taskDesc, taskDueDate, taskUrgency);
    });
};

//Save task Cards to local startes

const saveTaskCard = () => {
    const taskCards = Array.from(taskSections.children).map(card => {
        return {
            taskTitle: card.querySelector('li').textContent,
            taskDesc: card.querySelector('p').textContent,
            taskDueDate: card.querySelector('section').textContent.split(" - ")[0],
            taskUrgency: card.querySelector('section').textContent.split(" - ")[1]
        };
    });
    localStorage.setItem('tasks', JSON.stringify(taskCards));
};

 // Function to add task to the list
 function createTaskCard(taskTitle, taskDesc, taskDueDate, taskUrgency) {

    const taskCard = document.createElement("div")
    taskCard.className = "taskCard";

    const listItem = document.createElement("li");
    listItem.textContent = taskTitle

    const paragraphItem = document.createElement("p");
    paragraphItem.textContent = taskDesc;

    const sectionItem = document.createElement("section");
    sectionItem.textContent = `${taskDueDate} - ${taskUrgency}`;
    
    listItem.className = "taskListItem";
    paragraphItem.className = "taskDescription";
    sectionItem.className = "taskdueDate";
   
/* delete button */

const deleteButton = document.createElement("Button")
deleteButton.classList.add('deleteButton');
deleteButton.textContent = "Delete"
deleteButton.addEventListener("click", () => {
    taskCard.remove();
    saveTaskCard();
});
/* delete button */

/* complete button */
const completeButton = document.createElement("Button")
completeButton.classList.add('taskCompletedButton');
completeButton.textContent = "Complete"
completeButton.addEventListener("click", () => {
    taskCard.remove();
    saveTaskCard();
});
/* complete button */


//appending task title, task description, due dates and urgency to taskCard div
taskCard.appendChild(listItem);
taskCard.appendChild(paragraphItem);
taskCard.appendChild(sectionItem);
taskCard.appendChild(deleteButton);
taskCard.appendChild(completeButton);
//append taskCard div
document.getElementById('todolisttasks').appendChild(taskCard);
 }
    // Form submission handler
    AddTaskButton.addEventListener("click", () => {
        event.preventDefault();
        const taskTitle = document.getElementById('actualTask').value
        const taskDescription = document.getElementById('minorDesc').value
        const taskDueDate = document.getElementById('taskDue').value
        const taskPriority = document.getElementById('priority').value
        if (taskTitle) {
            createTaskCard(taskTitle, taskDescription,taskDueDate,taskPriority);
     saveTaskCard(); // Save new card to localStorage
      formInfo.reset(); // Clear the form
    } else {
        alert("Please enter a task");
    }
    });
    
    loadTasks(); 
}

);








