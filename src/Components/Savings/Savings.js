import React, { useState } from 'react'
import CSS from './Savings.module.css'
import one from '../../images/one.png'
import logo from '../../images/smallLogo.png'
import three from '../../images/three.png'

export default function Savings() {

  const [form, setForm] = useState(false)
  const [account, setAccount] = useState({
    type: "",
    name: "",
    number: "",
    ipan: "",
  })

  function save() {
    if (account.type !== "" && account.name !== "" && account.number !== "" && account.ipan !== "") {
      setForm(false)
    }
    else {
      alert("الرجاء تعبئه كافه البيانات")
    }
  }

  return (
    <>
      {!form && (<>
        <p className={CSS.main}>الرئيسية/المحفظة و المدفوعات</p>
        <h1 className={CSS.title}>المحفظة و المدفوعات</h1>
        <h3 className={CSS.note}>يتم تحويل مستحقاتك بداية كل شهر ميلادي تلقائيا</h3>
        <div className={CSS.container}>
          <div className={CSS.priceContainer}>
            <div>
              <div className={CSS.price}>
                <h1>6450.00</h1>
                <p>ريال</p>
              </div>
              <h4>الرصيد الكلي</h4>
            </div>
            <div className={CSS.center}>
              <div className={CSS.price}>
                <h1>725.00</h1>
                <p>ريال</p>
              </div>
              <h4>الرصيد المعلق</h4>
            </div>
            <div>
              <div className={CSS.price}>
                <h1>3450.00</h1>
                <p>ريال</p>
              </div>
              <h4>الرصيد القابل للسحب</h4>
            </div>
          </div>
          <div className={CSS.totalContainer}>
            <h4>إجمالي تعاملاتك داخل المنصة</h4>
            <div className={CSS.price}>
              <h4>6450.00</h4>
              <p style={{ fontSize: "10px" }}>ريال</p>
            </div>
          </div>
        </div>
        <div className={CSS.account}>
          {account.type === "" && (
            <>
              <div>
                <h3>اضف حساب بنكي لتحويل مستحقاتك</h3>
                <p>إذا لم تمتلك حساب بنكي يمكن التواصل مع الإداره و تحديد الطريقه المناسبه لتحويل مستحقاتك</p>
              </div>
              <button onClick={() => { setForm(true) }}>إضافة</button>
            </>
          )}
          {account.type !== "" && (
            <>
              <div>
                <h3>{account.type} - {account.name}</h3>
                <p>عادة تستغرق العملية الى ان تظهر في حسابك 48 ساعة</p>
              </div>
              <button onClick={() => { setForm(true) }}>تعديل</button>
            </>
          )}
        </div>
        <h3>المعاملات المالية</h3>
        <div className={CSS.transaction}>
          <div className={CSS.imgDiv}>
            <img src={logo} className={CSS.logo} alt={"img"} />
            <div>
              <h4>تحويل لحسابك البنكي</h4>
              <p>الخميس 01 اكتوبر 2021</p>
            </div>
          </div>
          <p style={{ color: "red" }}>- 5377.00 رس</p>
        </div>
        <div className={CSS.transaction}>
          <div className={CSS.imgDiv}>
            <img src={one} style={{ width: "45px" }} alt={"img"} />
            <div>
              <h4>أحمد شوقي</h4>
              <p>السبت 12 ديسمبر 2021</p>
            </div>
          </div>
          <p style={{ color: "#55ca31" }}>+ 377.00 رس</p>
        </div>
        <div className={CSS.transaction}>
          <div className={CSS.imgDiv}>
            <img src={three} style={{ width: "45px" }} alt={"img"} />
            <div>
              <h4>مروة محمد</h4>
              <p>السبت 20 ديسمبر 2021</p>
            </div>
          </div>
          <p style={{ color: "#55ca31" }}>+ 95.00 رس</p>
        </div>
      </>)}
      {form && (<>
        <p className={CSS.main}>الرئيسية/المحفظة و المدفوعات</p>
        <h1 className={CSS.title}>المحفظة و المدفوعات</h1>

        <div className={CSS.inputs}>
          <h2>ادخل معلومات الحساب البنكي الذي ترغب في استقبال مستحقاتك عليه</h2>
          <div>
            <select defaultValue={account.type} onChange={(e) => { setAccount({ ...account, type: e.target.value }) }}>
              <option value="" disabled hidden>اختر اسم البنك</option>
              <option value="الاهلي">الاهلي</option>
              <option value="الراجحي">الراجحي</option>
              <option value="البلاد">البلاد</option>
              <option value="العربي">العربي</option>
            </select>
            <label>اختر البنك التابع لك</label>
          </div>
          <div>
            <input placeholder="اسم صاحب البنك" defaultValue={account.name} onChange={(e) => { setAccount({ ...account, name: e.target.value }) }} />
            <label>اسم صاحب البنك</label>
          </div>
          <div>
            <input placeholder="رقم الحساب" defaultValue={account.number} onChange={(e) => { setAccount({ ...account, number: e.target.value }) }} />
            <label>رقم الحساب</label>
          </div>
          <div>
            <input placeholder="رقم الايبان" defaultValue={account.ipan} onChange={(e) => { setAccount({ ...account, ipan: e.target.value }) }} />
            <label>رقم الايبان</label>
          </div>
        </div>
        <button className={CSS.save} onClick={save}>حفظ</button>
      </>)}
    </>
  )
}
