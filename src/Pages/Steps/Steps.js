import  { useContext, useRef } from 'react'
import { UserContext } from '../../Contexts/UserContext';
import CSS from './Steps.module.css'
import elmLogo from '../../images/smallLogo.png'
import apple from '../../images/appleLogo.png'
import play from '../../images/playLogo.png'
import SidebarSteps from '../../Components/SidebarSteps/SidebarSteps';
import StepOne from '../../Components/StepOne/StepOne';
import StepTwo from '../../Components/StepTwo/StepTwo';
import StepThree from '../../Components/StepThree/StepThree';
import StepFour from '../../Components/StepFour/StepFour';
import Thanks from '../../Components/Thanks/Thanks';
import Bottom from '../../Components/Bottom/Bottom';

export default function Steps() {

  const {setAuth, tab, blur} = useContext(UserContext);

  return (
    <div ref={blur} className={CSS.Container}>
      {tab !== "thanks" && (
        <div className={CSS.container}>

          <div className={CSS.header}>

            <div className={CSS.buttons}>
              <p>English</p>
              <img src={apple} className={CSS.apple} alt='logo'></img>
              <img src={play} className={CSS.play} alt='logo'></img>
            </div>

            <div className={CSS.words}>
              <p>سياسة الاستخدام</p>
              <p>الشروط و الاحكام</p>
              <p>تواصل معنا</p>
            </div>

            <div className={CSS.logo}>
              <img onClick={()=>{setAuth(false)}} src={elmLogo} alt='logo'></img>
            </div>
            
          </div>

          <div className={CSS.content}>
            {tab === "StepOne" && (<StepOne />)}
            {tab === "StepTwo" && (<StepTwo />)}
            {tab === "StepThree" && (<StepThree />)}
            {tab === "StepFour" && (<StepFour />)}

            <Bottom />
          </div>

          <SidebarSteps />            
          
        </div>
      )}
      
      {tab === "thanks" && ( <Thanks /> )}
    </div>
  )
}