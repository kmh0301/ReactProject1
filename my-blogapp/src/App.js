import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from'react-router-dom';
import Home from "./pages/Home"; 
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import {useState} from'react';
import { signOut } from 'firebase/auth';
import {auth}from './firebase-config';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/login';
      
  })
};


  return (

    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/createpost">Create Post</Link>
        {!isAuth ? <Link to="/login">Login</Link> :<button onClick={signUserOut}> Log Out</button>} 
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/createpost" element={<CreatePost/>}/> 
        <Route path="/login" element={<Login setIsAuth = {setIsAuth}/>}/> 
      </Routes>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
