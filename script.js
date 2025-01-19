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
    taskData.forEach(({taskTitle, taskDesc, taskDueDate, taskUrgency, taskStatus}) => {
        createTaskCard(taskTitle, taskDesc, taskDueDate, taskUrgency, taskStatus);
    });
};

//Save task Cards to local storage

const saveTaskCard = () => {
    const taskCards = Array.from(taskSections.children).map(card => {
        return {
            taskTitle: actualTask.value,
            taskDesc: minorDesc.value,
            taskDueDate: taskDue.value,
            taskUrgency: priority.value
        };
    });
    localStorage.setItem('tasks', JSON.stringify(taskCards));
};

 // Function to add task to the list

 function createTaskCard(taskTitle, taskDesc, taskDueDate, taskUrgency) {

     // Create a task card
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


/* edit button */
const editButton = document.createElement("Button")
editButton.classList.add('taskCompletedButton');
editButton.textContent = "Edit"


editButton.addEventListener("click", () => {
    const currentTask = listItem.textContent;
    const currentDesc = paragraphItem.textContent;
    const currentDate = taskDueDate;
    const currentPriority = taskUrgency;

  taskCard.innerHTML = "";

  const mainTaskDiv = document.createElement('div');
  mainTaskDiv.id = "mainTaskDiv"

     /* new task edit form */
    const newTaskTitleLabel = document.createElement('label')
    newTaskTitleLabel.classList.add('editNewTaskTitle')
    newTaskTitleLabel.textContent = "Task"
    //taskCard.appendChild(newTaskTitleLabel)

    /* newly edit task input*/
    const newEditedTask = document.createElement('input');
    newEditedTask.classList.add('editedNewTaskInput')
    newEditedTask.id = 'newEditedTask'
    
    newEditedTask.type = 'text';
    newEditedTask.value =  currentTask;

    //taskCard.appendChild(newEditedTask);
    /* newly edit task input*/

     /* newly edit desc input*/
    const newTaskDescLabel = document.createElement('label');
    newTaskDescLabel.classList.add('editNewTaskTitle')
    newTaskDescLabel.textContent = "Task Description"
    //taskCard.appendChild(newTaskDescLabel);

    const newTaskDesc = document.createElement('input');
    newTaskDesc.classList.add('editedNewTaskInput')
    newTaskDesc.id = 'newTaskDesc';
   
    newTaskDesc.type = "text";
    newTaskDesc.value = currentDesc;

    mainTaskDiv.appendChild(newTaskTitleLabel)
    mainTaskDiv.appendChild(newEditedTask)
    mainTaskDiv.appendChild(newTaskDescLabel)
    mainTaskDiv.appendChild(newTaskDesc)



    //taskCard.appendChild(newTaskDesc);
     /* newly edit desc input*/
     
      /* newly edit section input for date and urgency*/
    const newSection = document.createElement("section");
    newSection.classList.add('section')
    newSection.id = "newSection"
        /* new due date */
        const newDueDateLabel = document.createElement("label")
        newDueDateLabel.classList.add('editNewTaskTitle')
        newDueDateLabel.id = 'newDueDateLabel'

        const newDueDate = document.createElement("input")
        newDueDate.type = 'date'
        newDueDate.value=  currentDate;
        newDueDate.classList.add('editedNewTaskInput')
        newDueDate.id = "newDueDate"
        newSection.appendChild(newDueDateLabel)
        newSection.appendChild(newDueDate)
        /* new due date */

           /* new priority */
           const newPrioroityLabel = document.createElement("label")
           newPrioroityLabel.classList.add('editNewTaskTitle')
           newPrioroityLabel.id = 'newPrioroityLabel'
   
           const newPriority = document.createElement("Select")
           newPriority.classList.add('editedNewTaskInput')
           newPriority.id = "newPriority"
           newPriority.value = currentPriority;
           /* code to put options in drop down menu */
           const priorityOptions = ["Low", "Medium", "High", "Urgent"];

           priorityOptions.forEach(priorityOption => {
            const option = document.createElement("option");
            option.value = priorityOption;
            option.textContent = priorityOption;
            option.id = priorityOption;
            newPriority.appendChild(option)
           })
           /* code to put options in drop down menu */
           newSection.appendChild(newPrioroityLabel)
           newSection.appendChild(newPriority)
           /* new priority  */

 /* newly edit section input for date and urgency*/
 /* Operation buttons*/
    const cancelButton = document.createElement('button');
    cancelButton.classList.add('deleteButton');
    cancelButton.textContent = 'cancel';
    


    const updateButton = document.createElement('button');
    updateButton.classList.add('deleteButton');
    updateButton.id = 'updateButton';
    updateButton.textContent = 'update';
    
/* Operation buttons*/

    /* all features appended */
    taskCard.append(mainTaskDiv)
    taskCard.append(newSection)
    taskCard.appendChild(cancelButton);
    taskCard.appendChild(updateButton);
    /* all features appended */

    updateButton.addEventListener("click", function (event) {

        listItem.textContent = newEditedTask.value;
        paragraphItem.textContent = newTaskDesc.value;
        sectionItem.textContent = `${newDueDate.value} - ${newPriority.value}`

        taskCard.innerHTML = "";
        /*
        const taskName1 = document.getElementById("newEditedTask").value;
        const desc2 = document.getElementById("newTaskDesc").value;
        const sec2 = document.getElementById("newSection").value;
        const updatedDueDate = document.getElementById("newDueDate").value
        const updatedPrioroty = document.getElementById("newPriority").value

        const taskTitleNew = document.createElement('h1');
        taskTitleNew.textContent = taskName1;
        
        const taskDescNew = document.createElement('p');
        taskDescNew.textContent = desc2;

        const newUpdatedSection = document.createElement("section")
        newUpdatedSection.id = "newUpdatedSection"
        newUpdatedSection.textContent = `${updatedDueDate} - ${updatedPrioroty}`

        newTaskTitleLabel.remove();
        newEditedTask.remove();
        newTaskDescLabel.remove();
        newSection.remove();
        newTaskDesc.remove();
        cancelButton.remove();
        updateButton.remove();
        */

        taskCard.appendChild(listItem)
        taskCard.appendChild(paragraphItem)
        taskCard.appendChild(sectionItem)
        taskCard.appendChild(deleteButton)
        taskCard.appendChild(editButton)
        saveTaskCard();
    })
    
});
/* edit button */


//appending task title, task description, due dates and urgency to taskCard div
taskCard.appendChild(listItem);
taskCard.appendChild(paragraphItem);
taskCard.appendChild(sectionItem);
taskCard.appendChild(deleteButton);
taskCard.appendChild(completeButton);
taskCard.appendChild(editButton);

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








