import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

import axios from 'axios';
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Documenation from './Pages/Documentation';
import Dashboard from './Pages/Dashboard';
import GetPremiumPage from './Pages/GetPremiumPage';
import { useEffect, useState } from 'react';
import NavBar from './Pages/Navbar';
import Loading from './Loading';
function App() {
  const URL = "https://urldb-backend.onrender.com";

  const[loading,setloading] = useState(true);
  const[islogin,setislogin] = useState(false);
  const[user,setuser] = useState({});
  
  async function isloginhandler(){
    const token = document.cookie;
    try {
      axios.post(`${URL}/api/islogin`,{
        token
      }).then((res)=>{
        if(res.status==200){
          setloading(false);
          setuser(res.data.user);
          setislogin(true);
        }else if(res.status==201){
          setloading(false);
          setislogin(false);
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    isloginhandler();
  }, [])
  

  return (
    <Router>
    <Routes>
      <Route path={"/"} element={loading?<Loading/> :<>{<Home user={islogin?user:{}} islogin={islogin} isPrimeUser={islogin?user.isPrimeUser:false}/> }</>}/>
       <Route path={"/signup"} element={loading?<Loading/> :<>{islogin?<Dashboard user={user}/>:<Signup/> }</>}/>
      <Route path={"/login"} element={loading?<Loading/> :<>{islogin?<Dashboard/>:<Login/> }</>}/>
      <Route path={"/docs"} element={loading?<Loading/> :<>{<><NavBar isPrimeUser={islogin?user.isPrimeUser:false} islogin={islogin} user={user}/><Documenation/></> }</>}/>
      <Route path={"/dashboard"} element={loading?<Loading/> :<>{islogin?<Dashboard user={user}/> : <Login/> }</>}/>
      <Route path={"/premium"} element={loading?<Loading/> :<>{islogin ?<><NavBar isPrimeUser={islogin?user.isPrimeUser:false} islogin={islogin} user={user}/><GetPremiumPage/></>:<Login/> }</>}/>
      {/* <Route path={"/visualize/:database_name"} element={<>{<DatabaseVisualize/> }</>}/> */}
        
      </Routes>
  </Router>
  );
}

export default App;
