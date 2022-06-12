import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
//pages and components
import LoginCSS from "./Login.module.css"
import Logo from '../../Components/Logo/Logo';
import PhoneInput from '../../Components/PhoneInput/PhoneInput';
import PasswordInput from '../../Components/PasswordInput/PasswordInput';

export default function Login(props) {

  //get all users phone number and password
  const phoneValues = props.userValues.map(function(element){
    return element.phone ;
  })
  const passwordValues = props.userValues.map(function(element){
    return element.password;
  })

  // Variables
  let user = 0;

  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    phone: "",
    password: "",
    eye: "password",
  });

  function login(){
    phoneValues.map(function(element){
      if (inputValues.phone === element){
        user = phoneValues.indexOf(element)
      }
    })

    if (inputValues.password === passwordValues[user] && inputValues.phone === phoneValues[user]){
      props.setActiveUser({
        name: props.userValues[user].name,
        phone: props.userValues[user].phone,
        email: props.userValues[user].email,
        gender: props.userValues[user].gender,
        password: props.userValues[user].pssword,
      })
      props.setAuth(true)
      navigate('/stepone');
    }
    else{
      alert("Wrong phone number or password")
    }
  }
  
  return (
    <>
      <div className={LoginCSS.container}>
        <Logo />
        <div className={LoginCSS.formContainer}>
          <div className={LoginCSS.titleDiv}>
            <h1>تسجيل الدخول</h1>
            <p>ليس لديك حساب؟ <Link to='/signup'>حساب جديد</Link></p>
          </div>
          <PhoneInput inputValues={inputValues} setInputValues={setInputValues}/>
          <PasswordInput inputValues={inputValues} setInputValues={setInputValues} forget={"نسيت كلمة المرور"}/>
          <button className={LoginCSS.signinButton} onClick={login}>تسجيل الدخول</button>
        </div>
      </div>
    </>
  )
}