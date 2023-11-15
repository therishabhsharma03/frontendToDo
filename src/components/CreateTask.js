import { useState } from "react";
import TaskForm from "./TaskForm";
import Axios from "axios";

function CreateTask(){
    const[arr, setArr] = useState([]);

    const getState = (childData)=>{
        setArr(childData);
    }

    const handleSubmit = ()=>{
        const data = {task: arr[0], date: arr[1]}
        Axios.post("http://localhost:4000/taskRoute/create-task", data)
        .then((res)=>{
            if(res.status===200){
                window.location.reload();
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{
            alert(err);
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <TaskForm getState={getState}/>
        </form>
    )
}

export default CreateTask;