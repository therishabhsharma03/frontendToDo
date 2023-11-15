import { useState } from "react";

function TaskForm(props){
    
    const[task, setTask] = useState(props.taskValue);
    const[date, setDate] = useState(props.dateValue);

    const arr = [task, date];

    const handleClick = ()=>{
        props.getState(arr);
    }

    return(
        <div style={{maxWidth:"40%", margin:"0px auto"}}>
            <input onChange={(event)=>setTask(event.target.value)} class="form-control my-3" placeholder="Enter your task"/>
            <input onChange={(event)=>setDate(event.target.value)} class="form-control my-3" placeholder="Enter the due date"/>
            <button onClick={handleClick} class="btn btn-success my-3 d-block mx-auto" type="submit">Submit</button>
        </div>
    )
}
export default TaskForm;