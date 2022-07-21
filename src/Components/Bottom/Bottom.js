import React, { useContext } from 'react'
import CSS from './Bottom.module.css'
import { UserContext } from '../../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Bottom() {

    const { userDetails, Tab, setTab, subjects, time } = useContext(UserContext);
    const navigate = useNavigate()

    function next() {
        if (Tab === "StepOne") {
            if (userDetails.country !== "" && userDetails.city !== "" && userDetails.type !== "" && userDetails.prief !== "") {
                setTab("StepTwo")
                window.scrollTo(0, 0)
            }
            else { alert("الرجاء تعبئه كافه البيانات") }
        }
        if (Tab === "StepTwo") {
            if (userDetails.certificate !== "" && userDetails.specialization !== "" && userDetails.experience !== "") {
                setTab("StepThree")
                window.scrollTo(0, 0)
            }
            else { alert("الرجاء تعبئه كافه البيانات") }
        }
        if (Tab === "StepThree") {
            let subjectPass = (subjects.arabic !== "" || subjects.english !== "" || subjects.engineer !== "" || subjects.sience !== "" || subjects.physics !== "" || subjects.math !== "")
            if (userDetails.student !== "" && userDetails.price !== "" && userDetails.teaching !== "" && userDetails.stage !== "" && subjectPass) {
                setTab("StepFour")
                window.scrollTo(0, 0)
            }
            else { alert("الرجاء تعبئه كافه البيانات") }
        }
        if (Tab === "StepFour") {
            let timePass = time.sat.fromTime !== "" || 
            time.san.fromTime !== "" || 
            time.mon.fromTime !== "" || 
            time.tus.fromTime !== "" || 
            time.wen.fromTime !== "" || 
            time.thr.fromTime !== "" || 
            time.fri.fromTime !== ""
            
            if (userDetails.order !== "" && timePass) {
                setTab("thanks")
                window.scrollTo(0, 0)
            }
            else { alert("الرجاء تعبئه كافه البيانات") }
        }
    }

    function previos() {
        if (Tab === "StepTwo") {
            setTab("StepOne")
            window.scrollTo(0, 0)
        }
        if (Tab === "StepThree") {
            setTab("StepTwo")
            window.scrollTo(0, 0)
        }
        if (Tab === "StepFour") {
            setTab("StepThree")
            window.scrollTo(0, 0)
        }
    }

    function skip() {
        setTab("main")
        navigate('/home')
        window.scrollTo(0, 0)
    }

    return (
        <div className={CSS.bottom}>
            <button onClick={skip} className={CSS.skip}>تخطي الآن</button>
            <button onClick={next} className={CSS.next}>التالي</button>
            <button onClick={previos} className={CSS.previos}>السابق</button>
        </div>
    )
}
