import  { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
// Pages
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Home from '../Home/Home';
import StepOne from '../StepOne/StepOne';
import TermsConditions from '../TermsConditions/TermsConditions';

export default function App() {
  // variables
  const [ userValues, setUserValues] = useState([]);
  const [ activeUser, setActiveUser] = useState({});
  const [ Auth, setAuth ] = useState(null);
  //get from localStorage
  useEffect(() => {
    const storedUserValues = JSON.parse(localStorage.getItem("userValues")) 
    const storedActiveUser = JSON.parse(localStorage.getItem("activeUser"))
    const storedAuth = JSON.parse(localStorage.getItem("Auth")) 

    storedUserValues && setUserValues(storedUserValues)
    storedActiveUser && setActiveUser(storedActiveUser)
    storedAuth && storedAuth ? setAuth(true) : setAuth(false)
  }, []);
  //set to localStorage
  useEffect(() => {
    localStorage.setItem("userValues", JSON.stringify(userValues))
    localStorage.setItem("activeUser", JSON.stringify(activeUser))
    localStorage.setItem("Auth", Auth)
  }, [Auth, userValues, activeUser]);

  return (
    <Routes>
      {!Auth && (
        <>
          <Route path='/home' element={ <Home />}/>
          <Route path='/login' element={ <Login 
            userValues={userValues} 
            setActiveUser={setActiveUser} 
            setAuth={setAuth} />}
          />
          <Route path='/signup' element={<Signup 
            userValues={userValues} 
            setUserValues={setUserValues} 
            activeUser={activeUser} 
            setActiveUser={setActiveUser} 
            setAuth={setAuth}/>}
          />
          <Route path='/termsconditions' element={<TermsConditions />}/>
        </>
      )}
      {Auth && (<Route path='/stepone' element={ <StepOne activeUser={activeUser} setAuth={setAuth}/>}/>)}
      <Route path='*' element={<Navigate to={Auth ? "/stepone" : "/home"} />}/>
    </Routes>
  );
}