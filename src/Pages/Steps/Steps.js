import { useContext, useEffect } from 'react'
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
import { useNavigate } from 'react-router-dom';

export default function Steps() {

  const { Tab, setTab } = useContext(UserContext);
  const navigate = useNavigate()

  useEffect(() => {
    if (Tab !== "StepOne" && Tab !== "StepTwo" && Tab !== "StepThree" && Tab !== "StepFour" && Tab !== "thanks") {
      navigate('/home')
    }
  }, [])

  return (
    <div className={CSS.Container}>
      {Tab !== "thanks" && (
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
              <img src={elmLogo} alt='logo'></img>
            </div>

          </div>

          <div className={CSS.content}>
            {Tab === "StepOne" && (<StepOne />)}
            {Tab === "StepTwo" && (<StepTwo />)}
            {Tab === "StepThree" && (<StepThree />)}
            {Tab === "StepFour" && (<StepFour />)}

            <Bottom />
          </div>

          <SidebarSteps />

        </div>
      )}

      {Tab === "thanks" && (<Thanks />)}
    </div>
  )
}