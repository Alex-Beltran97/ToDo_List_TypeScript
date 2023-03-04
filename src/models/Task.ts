import { v4 as uuidv4 } from 'uuid';

export default class Task {
  private id: string;
  private name: string;
  private checked: boolean;

  constructor(name : string){
    this.id = uuidv4();
    this.name = name;
    this.checked = false;
  };

  get taskName () {
    return this.name;
  }

  get taskId () {
    return this.id;
  }

  get taskStatus () {
    return this.checked;
  }

  completeTask () {

    this.checked = !this.checked;
  };

};