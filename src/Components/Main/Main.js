import React,{useContext} from 'react'
import CSS from './Main.module.css'
import profile from '../../images/profile.jpg'
import { UserContext } from '../../Contexts/UserContext'

export default function Main() {

    const {activeUser, userDetails} = useContext(UserContext);


    return (
        <>
            <p className={CSS.main}>الرئيسية</p>
            <div className={CSS.score}>
                <div>
                    <h4>ساعات التدريس</h4>
                    <h1>723810</h1>
                </div>
                <div>
                    <h4>طلاب درست لهم</h4>
                    <h1>9321</h1>
                </div>
                <div>
                    <h4>مشاهدات ملفك</h4>
                    <h1>437102</h1>
                </div>
            </div>

            <div className={CSS.selectDate}>
                <div>
                    <h3>المواعيد</h3>
                    <p>مارس 2022</p>
                </div>
                <div className={CSS.buttonsContainer}>
                    <button className={CSS.on}>اليوم</button>
                    <button className={CSS.off}>اسبوعي</button>
                    <button className={CSS.off}>شهري</button>
                </div>
            </div>

            <div className={CSS.lesson}>
                <div className={CSS.hours}>
                    <button>08:00 ص</button>
                    <button>09:00 ص</button>
                    <button>10:00 ص</button>
                    <button>11:00 ص</button>
                    <button>12:00 م</button>
                    <button>01:00 م</button>
                    <button>02:00 م</button>
                    <button>03:00 م</button>
                    <button>04:00 م</button>
                    <button>05:00 م</button>
                    <button>06:00 م</button>
                    <button>07:00 م</button>
                </div>
                <div className={CSS.course}>
                    <div className={CSS.forth}>
                        <div className={CSS.empty}></div>
                        <div className={CSS.empty}></div>
                        <div className={CSS.empty}></div>
                        <div className={CSS.empty}></div>
                    </div>
                    <div className={CSS.first}>
                        <div>
                            <p>درس خصوصي</p>
                            <h3>محمد عبدالرحمن</h3>
                        </div>
                        <div>
                            <button className={CSS.linkBtn}>رابط الدرس</button>
                        </div>
                    </div>
                    <div className={CSS.fifth}>
                        <div className={CSS.empty}></div>
                        <div className={CSS.empty}></div>
                        <div className={CSS.empty}></div>
                        <div className={CSS.empty}></div>
                    </div>
                    <div className={CSS.second}>
                        <div>
                            <p>دورة تطويرية</p>
                            <h3>تحسين محركات البحث</h3>
                        </div>
                        <div>
                            <button className={CSS.linkBtn}>رابط الدرس</button>
                        </div>
                    </div>
                    <div className={CSS.sixth}>
                        <div className={CSS.empty}></div>
                        <div className={CSS.empty}></div>
                        <div className={CSS.empty}></div>
                        <div className={CSS.empty}></div>
                    </div>
                    <div className={CSS.third}>
                        <div>
                            <p>درس خصوصي</p>
                            <h3>عبد الرحمن خطري</h3>
                        </div>
                        <div>
                            <button className={CSS.linkBtn}>رابط الدرس</button>
                        </div>
                    </div>
                </div>
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
        </>
    )
}
