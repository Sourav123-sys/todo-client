import { ToastContainer } from 'react-toastify';
import './App.css';
import ToDoApp from './Components/ToDoApp/ToDoApp';
import 'react-toastify/dist/ReactToastify.css';
import TodoData from './Components/TodoData/TodoData';


function App() {
  return (
    <div>
      <ToDoApp></ToDoApp>
      <TodoData></TodoData>
      <ToastContainer />
    </div>
  );
}

export default App;
