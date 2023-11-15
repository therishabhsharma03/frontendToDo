import {Link} from "react-router-dom";

function Nav(){
    return(
        <nav class="navbar bg-dark">
            <Link to= "/" class="navbar-brand mx-3 text-white">Task Scheduler</Link>
            <div>
                <Link to="/completed-tasks" class="nav-link text-white mx-3">Completed Tasks</Link>
            </div>
        </nav>
    )
}

export default Nav;