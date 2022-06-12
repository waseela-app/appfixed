import React from 'react'
import LogoCSS from './Logo.module.css';
import logo from '../images/elm.PNG'


export default function Logo() {
  return (
    <img className={LogoCSS.elmImage} src={logo} alt="logo"></img>
  )
}
