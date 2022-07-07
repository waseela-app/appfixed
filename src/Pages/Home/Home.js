import React, { useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import CSS from './Home.module.css'
import { UserContext } from '../../Contexts/UserContext'
import profile from '../../images/profile.jpg'
import Main from '../../Components/Main/Main'
import Dates from '../../Components/Dates/Dates'
import Massages from '../../Components/Massages/Massages'
import Development from '../../Components/Development/Development'
import FreeLessons from '../../Components/FreeLessons/FreeLessons'
import Savings from '../../Components/Savings/Savings'
import Settings from '../../Components/Settings/Settings'

export default function Home() {

  const { Auth, setAuth, activeUser, userDetails, homeTab, setHomeTab } = useContext(UserContext);

  useEffect(()=>{
    if (Auth){
      if(homeTab === ""){
        setHomeTab("main")
      }
      highlight()
    }
  },[homeTab])
  
  const button1 = useRef();
  const button2 = useRef();
  const button3 = useRef();
  const button4 = useRef();
  const button5 = useRef();
  const button6 = useRef();
  const button7 = useRef();

  function removeActive() {
    button1.current.classList.remove(CSS[`active`])
    button2.current.classList.remove(CSS[`active`])
    button3.current.classList.remove(CSS[`active`])
    button4.current.classList.remove(CSS[`active`])
    button5.current.classList.remove(CSS[`active`])
    button6.current.classList.remove(CSS[`active`])
    button7.current.classList.remove(CSS[`active`])
  }

  function highlight(){
    if (homeTab === "main"){button1.current.classList.add(CSS[`active`])}
    if (homeTab === "dates"){button2.current.classList.add(CSS[`active`])}
    if (homeTab === "massages"){button3.current.classList.add(CSS[`active`])}
    if (homeTab === "development"){button4.current.classList.add(CSS[`active`])}
    if (homeTab === "freeLessons"){button5.current.classList.add(CSS[`active`])}
    if (homeTab === "savings"){button6.current.classList.add(CSS[`active`])}
    if (homeTab === "settings"){button7.current.classList.add(CSS[`active`])}
  }

  

  return (
    <>
      {!Auth && (
        <div className={CSS.loginContainer}>
          <Link to={'/login'}>
            <button className={CSS.loginButton}>تسجيل الدخول</button>
          </Link>
          <Link to={'/signup'}>
            <button className={CSS.signupButton}>حساب جديد</button>
          </Link>
        </div>
      )}

      {Auth && (
        <div className={CSS.container}>

          <div className={CSS.sidebar}>

            <div className={CSS.profile}>
              <img src={profile} alt='logo' />
              <p className={CSS.name}>{activeUser.name}</p>
              {userDetails.certificate === "bechlor"
                ? <p>بكالريوس {userDetails.specialization} </p>
                : <p> دبلوم {userDetails.specialization}</p>
              }
            </div>

            <button ref={button1} className={CSS.button} onClick={() => {
              removeActive()
              button1.current.classList.add(CSS[`active`])
              setHomeTab("main")
            }}>الرئيسية</button>
            <button ref={button2} className={CSS.button} onClick={() => {
              removeActive()
              button2.current.classList.add(CSS[`active`])
              setHomeTab("dates")
            }}>المواعيد</button>
            <button ref={button3} className={CSS.button} onClick={() => {
              removeActive()
              button3.current.classList.add(CSS[`active`])
              setHomeTab("massages")
            }}>الرسائل</button>
            <button ref={button4} className={CSS.button} onClick={() => {
              removeActive()
              button4.current.classList.add(CSS[`active`])
              setHomeTab("development")
            }}>الدورات التطويرية</button>
            <button ref={button5} className={CSS.button} onClick={() => {
              removeActive()
              button5.current.classList.add(CSS[`active`])
              setHomeTab("freeLessons")
            }}>الدروس المجانية</button>
            <button ref={button6} className={CSS.button} onClick={() => {
              removeActive()
              button6.current.classList.add(CSS[`active`])
              setHomeTab("savings")
            }}>المحفظة و المجموعات</button>
            <button ref={button7} className={CSS.button} onClick={() => {
              removeActive()
              button7.current.classList.add(CSS[`active`])
              setHomeTab("settings")
            }}>الإعدادات</button>
            <button className={CSS.exit} onClick={(e) => { setAuth(false) }}>تسجيل الخروج</button>
            <h2>تميز الحساب</h2>

          </div>

          <div className={CSS.content}>

            <h3>صباح الخير-أستاذ {activeUser.name}</h3>

            {homeTab === "main" && (<Main />)}
            {homeTab === "dates" && (<Dates />)}
            {homeTab === "massages" && (<Massages />)}
            {homeTab === "development" && (<Development />)}
            {homeTab === "freeLessons" && (<FreeLessons />)}
            {homeTab === "savings" && (<Savings />)}
            {homeTab === "settings" && (<Settings />)}


          </div>

          <div className={CSS.info}>

            <div className={CSS.balance}>
              <div className={CSS.price}>
                <h1>6450.00</h1>
                <p>ريال </p>
              </div>
              <p>الرصيد الكلي</p>
              <button>المعاملات المالية</button>
            </div>

            <h2>الموعد القادم</h2>
            <div className={CSS.date}>
              <div className={CSS.teacher}>
                <img src={profile} alt='logo' />
                <div>
                  <h3>{activeUser.name}</h3>
                  {userDetails.teaching === "attend"
                    ? <p className={CSS.tag}>حضوري</p>
                    : <p className={CSS.tag}>عن بعد</p>
                  }
                </div>
              </div>
              <div className={CSS.time}>
                <div>
                  <h1>36</h1>
                  <p>دقائق</p>
                </div>
                <div>
                  <h1>05</h1>
                  <p>ساعات</p>
                </div>
                <div>
                  <h1>01</h1>
                  <p>يوم</p>
                </div>
              </div>
              <button>رابط الدرس</button>
            </div>

            <h2>روابط سريعة</h2>
            <div className={CSS.links}>
              <div><h4>كيف يظهر ملفك للطلاب</h4></div>
              <div><h4>دعوة الاصدقاء</h4></div>
              <div><h4>إدخال كود الإحالة</h4></div>
              <div><h4>الشروط و الأحكام</h4></div>
              <div><h4>سياسة الإستخدام</h4></div>
              <div><h4>الدعم الفني واتس اب</h4></div>
            </div>

          </div>
        </div>
      )}
    </>
  )
}