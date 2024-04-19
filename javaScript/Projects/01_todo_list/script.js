let todo = [];
let req = prompt("Enter Your Request")

while(true){
    if(req == 'quit'){
        console.log("quiting app")
        break;
    }
    if(req == 'list'){
        console.log("-------------------")
        // for(task of todo){
        //     console.log(task)
        // }
        for(let i=0; i<todo.length;i++){
            console.log(i, todo[i])
        }
        console.log("-------------------")
    }
    else if(req == 'add'){
        let task = prompt("Enter the task you want to add")
        todo.push(task)
        console.log("task added")
    }
    else if(req == 'delete'){
        let idx = prompt('Enter the index of tast, want to delete')
        todo.splice(idx, 1)
        console.log('Task deleted')
    }
    else{
        console.log("wrong request!")
    }

    req = prompt("Enter Your Request")
}