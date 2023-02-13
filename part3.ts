interface TodoInterface{
    Tasks:string[];
    addTask(task:string):number;
    listAllTasks(): void;
    deleteTask(task:string):number;
}

class Todo implements TodoInterface{
    constructor(){}

    Tasks: string[]=[];

    addTask(task: string): number {
        this.Tasks.push(task);
        console.log("Task " + task + " add to my Tasks Array.");
        return this.Tasks.length;
    }

     listAllTasks(): void {
        for(let i=0;i<this.Tasks.length;i++){
            console.log("Task "+(i+1)+ " is "+this.Tasks[i]);
        }
    }

     deleteTask(task: string): number {
        let index: number = this.Tasks.indexOf(task);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log("Task: " + task + " removed from array.");
        } else {
            console.log("Task " + task + " no present in array.");
        }
        return this.Tasks.length;
    }



}
let myTodo = new Todo();
myTodo.addTask("Eat");
myTodo.addTask("Work");
myTodo.addTask("Sleep");
myTodo.listAllTasks();
myTodo.deleteTask("Eat");
myTodo.listAllTasks();