import Step1CSS from './StepOne.module.css'

export default function StepOne(props) {

  function logout(){
    props.setAuth(false)
  }

  return (
    <>
    <div className={Step1CSS.container}>
      <h1>{props.activeUser.email}</h1>
      <h1>{props.activeUser.name}</h1>
      <h1>+966{props.activeUser.phone}</h1>
      <h1>{props.activeUser.gender}</h1>
      <button className={Step1CSS.logoutButton} onClick={logout}>تسجيل الخروج</button>
    </div>
    </>
)}