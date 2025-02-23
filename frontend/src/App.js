
import './App.css';
import {Route, Routes} from 'react-router-dom';
import SignUp from './pages/SignUp';
import Login from './pages/Login.js'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<SignUp />}  />
        <Route path = '/login' element = {<Login />} />
      </Routes>
      
    </div>
  );
}

export default App;
