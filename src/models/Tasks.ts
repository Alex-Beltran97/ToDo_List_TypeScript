import Task from "./Task";

export default class Tasks {
  private tasks: Task[] = [];

  createTask(newTask: Task) : Task {
    this.tasks = [...this.tasks, newTask];

    return newTask;
  };

  get listTasks () {
    return this.tasks;
  };

  changeStatusTask(taskId: string){
    const list = [...this.listTasks];

    const task = list[list.findIndex((task: Task)=> task.taskId === taskId)];

    task.completeTask();

    list[list.findIndex((task: Task)=> task.taskId === taskId)] = task;

    this.tasks = list;
  }

  deleteTask(taskId: string){
    this.tasks = this.tasks.filter( (task: Task)=> task.taskId !== taskId);

    return this.tasks;
  }
};