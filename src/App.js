import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import{HashRouter, Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import EditTask from './components/EditTask';
import Nav from './components/Nav';
import CompletedList from './components/CompletedList';

function App() {
  return (
    <div class="container">
      <HashRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/edit-task/:id' element={<EditTask />} />
          <Route path='/completed-tasks' element={<CompletedList/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
