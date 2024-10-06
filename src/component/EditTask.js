import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Taskform from "./taskform";
import Axios from 'axios';
import apiService from "./apiService";


function EditTask(){
    const {id} = useParams();
    const[initialValue, setInitialValue] = useState({task:"", date:""});
    const[newData, setNewData] = useState([]);
    useEffect(()=>{
        apiService.get("/homepage/update-task/"+id)
        .then((res)=>{
            if(res.status===200){
                const {task, date} = res.data;
                setInitialValue({task, date});
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{
            alert(err);
        })
    }, [id])    
    
    const getState = (childData)=>{
        setNewData(childData);
    }

    const handleSubmit=()=>{
        const data={task:newData[0], date:newData[1]}
        apiService.put("/homepage/update-task/"+id, data)
        .then((res)=>{
            if(res.status===200){
                window.location.href = "http://localhost:3000/";
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
            <h1>hhhhhhhhhhhhhhhh</h1>
            <Taskform getState={getState}
                      taskValue={initialValue.task}
                      dateValue={initialValue.date}/>  
        </form>
                
    )
}

export default EditTask;