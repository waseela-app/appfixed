import  { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext';
import Step1CSS from './StepOne.module.css'

export default function StepOne() {

  const {activeUser, setAuth} = useContext(UserContext);

  return (
    <>
    <div className={Step1CSS.container}>
      <h1>{activeUser.email}</h1>
      <h1>{activeUser.name}</h1>
      <h1>+966{activeUser.phone}</h1>
      <h1>{activeUser.gender}</h1>
      <button className={Step1CSS.logoutButton} onClick={ ()=>{setAuth(false)} }>تسجيل الخروج</button>
    </div>
    </>
  )
}