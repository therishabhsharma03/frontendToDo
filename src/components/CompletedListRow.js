import Axios from "axios";
import {Link} from "react-router-dom";

function CompletedListRow(props){

    const{_id, task, date} = props.obj;
   
    const handleClick=()=>{
        const data = {task:task, date:date}
        Axios.post("http://localhost:4000/taskRoute/create-task",data)
        .then((res)=>{
            if(res.status===200){
                Axios.delete("http://localhost:4000/completedTaskRoute/delete-task/"+_id)
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
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{
            alert(err)
        })
    }
    
    const handleSubmit=()=>[
        Axios.delete("http://localhost:4000/completedTaskRoute/delete-task/"+_id)
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
    ]

    return(
        <tr>
            <td>{task}</td>
            <td>{date}</td>
            <td>
                <button onClick={handleClick} class="btn btn-success mx-1">Retrieve</button>
                <button onClick={handleSubmit} class="btn btn-danger mx-1">Delete</button>
            </td>
        </tr>

    )
}

export default CompletedListRow;