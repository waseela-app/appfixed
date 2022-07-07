import React, { useState, useEffect, useRef } from 'react'

export const UserContext = React.createContext({});

export default function UserContextProvider({ children }) {

  const [Auth, setAuth] = useState(null);
  const [tab, setTab] = useState("StepOne");
  const [activeUser, setActiveUser] = useState({});
  const [homeTab, setHomeTab] = useState("");

  const [subjects, setSubjects] = useState({
    arabic: "",
    english: "",
    engineer: "",
    sience: "",
    physics: "",
    math: "",
  });

  const [time, setTime] = useState({
    sat: "",
    san: "",
    mon: "",
    tus: "",
    wen: "",
    thr: "",
    fri: ""
  })

  const [userDetails, setUserDetails] = useState({
    country: "",
    city: "",
    type: "",
    prief: "",
    certificate: "",
    specialization: "",
    experience: "",
    teaching: "",
    price: "",
    stage: "",
    student: "",
    order: "",
  });

  useEffect(() => {
    const storedActiveUser = JSON.parse(localStorage.getItem("activeUser"))
    const storedTab = JSON.parse(localStorage.getItem("tab"))
    const storedUserDetails = JSON.parse(localStorage.getItem("userDetails"))
    const storedSubjects = JSON.parse(localStorage.getItem("subjects"))
    const storedTime = JSON.parse(localStorage.getItem("time"))
    const storedHomeTab = JSON.parse(localStorage.getItem("homeTab"))
    const storedAuth = JSON.parse(localStorage.getItem("Auth"))

    storedActiveUser && setActiveUser(storedActiveUser)
    storedTab && setTab(storedTab)
    storedSubjects && setSubjects(storedSubjects)
    storedTime && setTime(storedTime)
    storedHomeTab && setHomeTab(storedHomeTab)
    storedUserDetails && setUserDetails(storedUserDetails)
    storedAuth && storedAuth ? setAuth(true) : setAuth(false)
  }, []);

  useEffect(() => {
    localStorage.setItem("activeUser", JSON.stringify(activeUser))
    localStorage.setItem("tab", JSON.stringify(tab))
    localStorage.setItem("subjects", JSON.stringify(subjects))
    localStorage.setItem("Auth", JSON.stringify(Auth))
    localStorage.setItem("time", JSON.stringify(time))
    localStorage.setItem("homeTab", JSON.stringify(homeTab))
    localStorage.setItem("userDetails", JSON.stringify(userDetails))

  }, [Auth, activeUser, tab, userDetails, subjects, time, homeTab]);

  return (
    <UserContext.Provider value={{
      activeUser, setActiveUser,
      Auth, setAuth,
      tab, setTab,
      userDetails, setUserDetails,
      subjects, setSubjects,
      time, setTime,
      homeTab, setHomeTab,
    }}>
      {children}
    </UserContext.Provider>
  )
}