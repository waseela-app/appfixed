import React from 'react'
import { Link } from 'react-router-dom'
import HomeCSS from './Home.module.css'

export default function Home() {
  return (
    <>
      <div className={HomeCSS.container}>

        <Link to={'/login'}>
          <button className={HomeCSS.loginButton}>تسجيل الدخول</button>
        </Link>

        <Link to={'/signup'}>
          <button className={HomeCSS.signupButton}>حساب جديد</button>
        </Link>

      </div>
    </>
  )
}