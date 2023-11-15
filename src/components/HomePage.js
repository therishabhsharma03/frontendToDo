import CreateTask from "./CreateTask";
import TaskList from "./TasksList";
function HomePage(){
    return(
        <div>
            <CreateTask />
            <TaskList />
        </div>
    )
}

export default HomePage;