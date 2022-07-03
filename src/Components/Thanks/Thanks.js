import React, { useContext } from 'react'
import CSS from './Thanks.module.css'
import { UserContext } from '../../Contexts/UserContext'


export default function Thanks() {

    const {setTab} = useContext(UserContext);

  return (
    <div className={CSS.container}>
        <h1>شكرا, تم إستلام طلبك بنجاح</h1>
        <p>سوف تتواصل معك الإداره خلال 48 ساعه</p>
        <div><button onClick={()=>(setTab("StepOne"))}>فهمت</button></div>
        <p>إغلاق</p>
    </div>
  )
}