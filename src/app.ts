import Task from "./models/Task";
import Tasks from "./models/Tasks";
import Ui from "./models/Ui";

const newTask = document.getElementById("newTask") as HTMLInputElement;

const main = () =>{

  const tasks = new Tasks();

  const ui = new Ui();

  ui.renderTasks(tasks.listTasks);

  document.addEventListener("click", e =>{
    const event = e.target as HTMLInputElement;

    switch(event.id){
      case "delete-task":
        ui.renderTasks(tasks.deleteTask( event.name ));
      break;
      case "add-task-btn":
        tasks.createTask(new Task(newTask.value));
        ui.renderTasks(tasks.listTasks);
      break;
      case "check-task":
        tasks.changeStatusTask(event.name);
        // ui.renderTasks(tasks.listTasks);
      break;
    };
  })
};

main();