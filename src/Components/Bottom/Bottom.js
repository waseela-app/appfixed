import React, {useContext} from 'react'
import CSS from './Bottom.module.css'
import { UserContext } from '../../Contexts/UserContext';

export default function Bottom() {

  const {userDetails, tab, setTab, subjects, time} = useContext(UserContext);

  function next(){
    if (tab === "StepOne"){
        if (userDetails.country !== "" && userDetails.city !== "" && userDetails.type !== "" && userDetails.prief !== ""){
            setTab("StepTwo")
        }
        else{alert("الرجاء تعبئه كافه البيانات")}
    }
    if(tab === "StepTwo"){
        if (userDetails.certificate !== "" && userDetails.specialization !== "" && userDetails.experience !== ""){
            setTab("StepThree")
        }
        else{alert("الرجاء تعبئه كافه البيانات")}
    }
    if(tab === "StepThree"){
        let subjectPass =  (subjects.arabic !== "" || subjects.english !== "" || subjects.engineer !== "" || subjects.sience !== "" || subjects.physics !== "" || subjects.math !== "" )
        if (userDetails.student !== "" && userDetails.price !== "" && userDetails.teaching !== "" && userDetails.stage !== "" && subjectPass){
            setTab("StepFour")
        }
        else{alert("الرجاء تعبئه كافه البيانات")}
    }
    if(tab === "StepFour"){
        let timePass = time.sat !== "" || time.san !== "" || time.mon !== "" || time.tus !== "" || time.wen !== "" || time.thr !== "" || time.fri !== ""
        if (userDetails.order !== "" && timePass){
            setTab("thanks") 
        }
        else{alert("الرجاء تعبئه كافه البيانات")}
    }
  }

  function previos(){
    if(tab === "StepTwo"){setTab("StepOne")}
    if(tab === "StepThree"){setTab("StepTwo")}
    if(tab === "StepFour"){setTab("StepThree")}
  }

  return (
    <div className={CSS.bottom}>
        <div>
            <button onClick={previos} className={CSS.previos}>السابق</button>
            <button onClick={next} className={CSS.next}>التالي</button>
        </div>
        <button className={CSS.skip}>تخطي الآن</button>
  </div>
  )
}
