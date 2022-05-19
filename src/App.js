import { ToastContainer } from 'react-toastify';
import './App.css';
import ToDoApp from './Components/ToDoApp/ToDoApp';
import 'react-toastify/dist/ReactToastify.css';
import TodoData from './Components/TodoData/TodoData';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import SignUp from './Components/Login/Signup';
import RequireAuth from './Components/Login/RequireAuth';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <RequireAuth>
            <ToDoApp />
          </RequireAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
