import React, { useContext, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
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

  const { Auth, setAuth, activeUser, userDetails, Tab, setTab } = useContext(UserContext);
  const navigate = useNavigate()
  
  const sidebar = useRef();
  const button1 = useRef();
  const button2 = useRef();
  const button3 = useRef();
  const button4 = useRef();
  const button5 = useRef();
  const button6 = useRef();
  const button7 = useRef();

  useEffect(() => {

    if (Auth) {
      if (Tab !== "main" && Tab !== "dates" && Tab !== "massages" && Tab !== "development" && Tab !== "freeLessons" && Tab !== "savings" && Tab !== "settings") {
        navigate('/steps')
      }
      else { highlight() }
    }
  }, [Tab])

  function removeActive() {
    button1.current.classList.remove(CSS[`active`])
    button2.current.classList.remove(CSS[`active`])
    button3.current.classList.remove(CSS[`active`])
    button4.current.classList.remove(CSS[`active`])
    button5.current.classList.remove(CSS[`active`])
    button6.current.classList.remove(CSS[`active`])
    button7.current.classList.remove(CSS[`active`])
  }

  function highlight() {
    if (Tab === "main") { button1.current.classList.add(CSS[`active`]) }
    if (Tab === "dates") { button2.current.classList.add(CSS[`active`]) }
    if (Tab === "massages") { button3.current.classList.add(CSS[`active`]) }
    if (Tab === "development") { button4.current.classList.add(CSS[`active`]) }
    if (Tab === "freeLessons") { button5.current.classList.add(CSS[`active`]) }
    if (Tab === "savings") { button6.current.classList.add(CSS[`active`]) }
    if (Tab === "settings") { button7.current.classList.add(CSS[`active`]) }
  }

  function hideSidebar(){
    if (window.innerWidth < 950){sidebar.current.style.display = "none"}
  }

  return (
    <>
      {!Auth && (
        <div className={CSS.loginContainer}>
          <Link to={'/login'}>
            <button className={CSS.loginButton}>?????????? ????????????</button>
          </Link>
          <Link to={'/signup'}>
            <button className={CSS.signupButton}>???????? ????????</button>
          </Link>
        </div>
      )}

      {Auth && (
        <div className={CSS.container}>

          <div className={CSS.contentContainer}>

            <div className={CSS.content}>

              <button className={CSS.sidebarBtn} onClick={() => {
                sidebar.current.style.display = "flex"
                window.scrollTo(0, 0)
              }}>menu</button>

              <h3>???????? ??????????-?????????? {activeUser.name}</h3>

              {Tab === "main" && (<Main />)}
              {Tab === "dates" && (<Dates />)}
              {Tab === "massages" && (<Massages />)}
              {Tab === "development" && (<Development />)}
              {Tab === "freeLessons" && (<FreeLessons />)}
              {Tab === "savings" && (<Savings />)}
              {Tab === "settings" && (<Settings />)}
            </div>

            <div ref={sidebar} className={CSS.sidebar}>

              <div className={CSS.profile}>
                <img src={profile} alt='logo' />
                <p className={CSS.name}>{activeUser.name}</p>
                {userDetails.certificate === "bechlor"
                  ? <p>???????????????? {userDetails.specialization} </p>
                  : <p> ?????????? {userDetails.specialization}</p>
                }
              </div>

              <button ref={button1} className={CSS.button} onClick={() => {
                removeActive()
                button1.current.classList.add(CSS[`active`])
                setTab("main")
                hideSidebar()
              }}>????????????????</button>
              <button ref={button2} className={CSS.button} onClick={() => {
                removeActive()
                button2.current.classList.add(CSS[`active`])
                setTab("dates")
                hideSidebar()
              }}>????????????????</button>
              <button ref={button3} className={CSS.button} onClick={() => {
                removeActive()
                button3.current.classList.add(CSS[`active`])
                setTab("massages")
                hideSidebar()
              }}>??????????????</button>
              <button ref={button4} className={CSS.button} onClick={() => {
                removeActive()
                button4.current.classList.add(CSS[`active`])
                setTab("development")
                hideSidebar()
              }}>?????????????? ??????????????????</button>
              <button ref={button5} className={CSS.button} onClick={() => {
                removeActive()
                button5.current.classList.add(CSS[`active`])
                setTab("freeLessons")
                hideSidebar()
              }}>???????????? ????????????????</button>
              <button ref={button6} className={CSS.button} onClick={() => {
                removeActive()
                button6.current.classList.add(CSS[`active`])
                setTab("savings")
                hideSidebar()
              }}>?????????????? ?? ??????????????????</button>
              <button ref={button7} className={CSS.button} onClick={() => {
                removeActive()
                button7.current.classList.add(CSS[`active`])
                setTab("StepOne")
                navigate('/steps')
                hideSidebar()
              }}>??????????????????</button>
              <button className={CSS.exit} onClick={(e) => { setAuth(false) }}>?????????? ????????????</button>
              <h2>???????? ????????????</h2>

            </div>
          </div>

          <div className={CSS.info}>

            <div className={CSS.balance}>
              <div className={CSS.price}>
                <h1>6450.00</h1>
                <p>???????? </p>
              </div>
              <p>???????????? ??????????</p>
              <button>?????????????????? ??????????????</button>
            </div>

            <h2>???????????? ????????????</h2>
            <div className={CSS.date}>
              <div className={CSS.teacher}>
                <img src={profile} alt='logo' />
                <div>
                  <h3>{activeUser.name}</h3>
                  {userDetails.teaching === "attend"
                    ? <p className={CSS.tag}>??????????</p>
                    : <p className={CSS.tag}>???? ??????</p>
                  }
                </div>
              </div>
              <div className={CSS.time}>
                <div>
                  <h1>36</h1>
                  <p>??????????</p>
                </div>
                <div>
                  <h1>05</h1>
                  <p>??????????</p>
                </div>
                <div>
                  <h1>01</h1>
                  <p>??????</p>
                </div>
              </div>
              <button>???????? ??????????</button>
            </div>

            <h2>?????????? ??????????</h2>
            <div className={CSS.links}>
              <div><h4>?????? ???????? ???????? ????????????</h4></div>
              <div><h4>???????? ????????????????</h4></div>
              <div><h4>?????????? ?????? ??????????????</h4></div>
              <div><h4>???????????? ?? ??????????????</h4></div>
              <div><h4>?????????? ??????????????????</h4></div>
              <div><h4>?????????? ?????????? ???????? ????</h4></div>
            </div>

          </div>
        </div>
      )}
    </>
  )
}