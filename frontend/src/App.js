
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Login from './pages/Login.js'
import ForgetPassword from './pages/ForgetPassword';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp />}  />
        <Route path = '/login' element = {<Login />} />
        <Route path = '/forgetpassword' element = {<ForgetPassword />} />
      </Routes>
      
    </div>
  );
}

export default App;
