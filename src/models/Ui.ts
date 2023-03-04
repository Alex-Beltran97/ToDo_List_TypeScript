import Task from "./Task";

const taskTemplate = (document.getElementById("task-template") as HTMLTemplateElement | null )?.content;
const taskContainer = document.getElementById("tasks-container");
const fragment = document.createDocumentFragment();

export default class Ui {

  renderTasks(tasks: Task[]) : void {
    if ( taskContainer ){

      taskContainer.textContent = "";

      tasks.forEach( (task: Task) =>{
        const clone = taskTemplate?.cloneNode( true ) as Document;

        clone.getElementById("task")!.setAttribute("id", task.taskId);
        clone.getElementById("taskName")!.textContent = task.taskName;
        clone.getElementById("check-task")!.setAttribute("name", task.taskId);
        task.taskStatus&&clone.getElementById("check-task")!.setAttribute("checked", `${task.taskStatus}`);
        clone.getElementById("delete-task")!.setAttribute("name", task.taskId);

        fragment.appendChild(clone);
      })
      taskContainer.appendChild(fragment);
    }
  };
};