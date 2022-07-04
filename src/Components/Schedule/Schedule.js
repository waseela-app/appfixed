import React, { useContext, useEffect, useRef, useState } from 'react'
import CSS from './Schedule.module.css';
import { UserContext } from '../../Contexts/UserContext';

export default function Schedule() {

    const { time, setTime, blur } = useContext(UserContext);
    const [edit, setEdit] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [source, setSource] = useState(["السبت", "الاحد", "الاثنين", "الثلاثاء", "الاربعاء", "الخميس", "الجمعه"]);

    const enterTime = useRef();

    function save() {
        if (edit === "السبت") {
            if (from !== "" && to !== "") {
                setTime({ ...time, sat: { from: from, to: to } })
            }
            else{setTime({...time, sat:""})}
        }
        if (edit === "الاحد") {
            if (from !== "" && to !== "") {
                setTime({ ...time, san: { from: from, to: to } })
            }
            else{setTime({...time, san:""})}
        }
        if (edit === "الاثنين") {
            if (from !== "" && to !== "") {
                setTime({ ...time, mon: { from: from, to: to } })
            }
            else{setTime({...time, mon:""})}
        }
        if (edit === "الثلاثاء") {
            if (from !== "" && to !== "") {
                setTime({ ...time, tus: { from: from, to: to } })
            }
            else{setTime({...time, tue:""})}
        }
        if (edit === "الاربعاء") {
            if (from !== "" && to !== "") {
                setTime({ ...time, wen: { from: from, to: to } })
            }
            else{setTime({...time, wen:""})}
        }
        if (edit === "الخميس") {
            if (from !== "" && to !== "") {
                setTime({ ...time, thr: { from: from, to: to } })
            }
            else{setTime({...time, thr:""})}
        }
        if (edit === "الجمعه") {
            if (from !== "" && to !== "") {
                setTime({ ...time, fri: { from: from, to: to } })
            }
            else{setTime({...time, fri:""})}
        }
        enterTime.current.style.display = "none"
    }

    return (
        <>
            <div className={CSS.timeContainer}>
                {source.map(day => (

                    <div key={day} className={(CSS.time)}>

                        <div>
                            <h4>{day}</h4>
                            <p className={CSS.edit} onClick={() => {
                                setEdit(day)
                                setTo("")
                                setFrom("")
                                enterTime.current.style.display = "block"
                            }}>تعديل</p>
                        </div>

                        {source.indexOf(day) === 0 && (
                            time.sat === "" ? (<p>غير متاح</p>) : (<p>{time.sat.from} الى {time.sat.to}</p>)
                        )}
                        {source.indexOf(day) === 1 && (
                            time.san === "" ? (<p>غير متاح</p>) : (<p>{time.san.from} الى {time.san.to}</p>)
                        )}
                        {source.indexOf(day) === 2 && (
                            time.mon === "" ? (<p>غير متاح</p>) : (<p>{time.mon.from} الى {time.mon.to}</p>)
                        )}
                        {source.indexOf(day) === 3 && (
                            time.tus === "" ? (<p>غير متاح</p>) : (<p>{time.tus.from} الى {time.tus.to}</p>)
                        )}
                        {source.indexOf(day) === 4 && (
                            time.wen === "" ? (<p>غير متاح</p>) : (<p>{time.wen.from} الى {time.wen.to}</p>)
                        )}
                        {source.indexOf(day) === 5 && (
                            time.thr === "" ? (<p>غير متاح</p>) : (<p>{time.thr.from} الى {time.thr.to}</p>)
                        )}
                        {source.indexOf(day) === 6 && (
                            time.fri === "" ? (<p>غير متاح</p>) : (<p>{time.fri.from} الى {time.fri.to}</p>)
                        )}

                    </div>
                ))}
            </div>

            <div ref={enterTime} className={CSS.enterTime}>
                <div className={CSS.header}>
                    <h1>حدد مدى توافرك</h1>
                    <h2 onClick={() => { enterTime.current.style.display = "none" }}>x</h2>
                </div>
                <p>{edit}</p>
                <div className={CSS.input}>
                    <input type="number" placeholder='الى' value={to} onChange={(e) => { setTo(e.target.value) }}></input>
                    <input type="number" placeholder='من' value={from} onChange={(e) => { setFrom(e.target.value) }}></input>
                </div>
                <div className={CSS.header}>
                    <label><input type="checkbox" checked={false} onClick={(e)=>{
                        if (e.target.checked){
                            setTo("")
                            setFrom("")
                            save();
                        }
                    }}/> غير متاح </label>
                    <button onClick={save}>حفظ</button>
                </div>
            </div>
        </>
    )
}