import React from 'react'
import PhoneInputCSS from "./PhoneInput.module.css"

export default function PhoneInput(props) {
  return (
    <div className={PhoneInputCSS.phoneDiv}>
      <input 
        className={PhoneInputCSS.phoneInput} 
        placeholder="رقم الجوال" 
        value={props.inputValues.phone} 
        onChange={e => props.setInputValues({...props.inputValues, phone: e.target.value})}
      ></input>
      <label className={PhoneInputCSS.phoneLabel}>رقم الجوال</label>
      <select className={PhoneInputCSS.phoneSelect}>
        <option value="+966">+966</option>
      </select>
      <p className={PhoneInputCSS.warning} ref={props.phoneWarning}>* استخدام 9 ارقام فقط</p>
    </div>
  )
}