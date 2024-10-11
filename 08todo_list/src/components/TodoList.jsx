import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function  TodoList(){
    let [todo, setTodo] = useState([{task: "sample-task", id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");
    // let [currTodo, setDelTodo] = useState("");

    let addNewTask = () =>{
        console.log("we have to add new task in todo");
        if(newTodo != ""){
            setTodo((prevTodo) =>{
                return [...prevTodo, {task: newTodo, id: uuidv4(), isDone: false}];
            });
        }
        setNewTodo("");
    };
    let updateTodoValue = (event) => {
        // console.log(event.target.value);
        setNewTodo(event.target.value);
    };



    let delCurrTask = (id) =>{
        // console.log(val);

        // setTodo((prevTodo) =>
            // prevTodo.filter((_, idx)=>idx !== prevTodo.length-1));   /* for a common button for removing the last element */
        setTodo((prevTodo)=>
            todo.filter((prevTodo) => prevTodo.id !== id)
        );
    };

    let markAllDone = () => {
        setTodo((prev) => (
            prev.map((k) =>{
            return {
                ...k, isDone: true 
            };
        })));
        // console.log(newArr);
    };

    let markDone = (id) => {
        // console.log("done");

        setTodo((prev) => (
            prev.map((k) =>{
                if(k.id == id){
                    return {
                        ...k, isDone: true,
                    };
                }
                else {return k;}
            })
        ));

    }

    return <div>
        <h2>Todo List</h2>
        <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}/>
        <br />
        <button onClick={addNewTask}>Add Task</button>
        {/* <button onClick={delCurrTask} disabled={todo.length === 0}>Remove Task</button> */}     {/* for a common button for removing the last element */}
        <br />
        <br />
        <br />

        <hr />
        <h3>Task To Do</h3>
        <ul>
            {
                todo.map((k) =>(
                    <li key={k.id}  ><span style={k.isDone ? {backgroundColor: "yellow"} : {}}>{k.task}</span>
                    &nbsp; &nbsp; &nbsp;
                    <button onClick={()=>delCurrTask(k.id)}>Delete</button>       {/* call back ki tareh pass kiya hai taki direct execute naa ho */}
                    <button onClick={()=>markDone(k.id)}>Done</button>
                    </li>
                ))
            }
        </ul>
        <button onClick={markAllDone}>Done</button>
    </div>
}