import Axios from "axios";
import {Link} from "react-router-dom";

function TaskListRow(props){
    const {_id, task, date} = props.obj;

    const handleClick=()=>{
        const data = {task:task, date:date}
        Axios.post("http://localhost:4000/completedTaskRoute/create-task",data)
        .then((res)=>{
            if(res.status===200){
                Axios.delete("http://localhost:4000/taskRoute/delete-task/"+_id)
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

    return(
        <tr>
            <td>{task}</td>
            <td>{date}</td>
            <td>
                <button class="btn btn-warning mx-2">
                    <Link class="text-decoration-none text-light" to={"/edit-task/"+_id}>Edit</Link>
                </button>
                <button onClick={handleClick} class="btn btn-success mx-2">Complete</button>
            </td>
        </tr>
    )
}

export default TaskListRow;