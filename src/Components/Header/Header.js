import React, { useContext } from 'react'
import CSS from './Header.module.css'
import Texts from '../../Texts'
import { UserContext } from '../../Contexts/UserContext'
import apple from '../../images/appleLogo.png'
import play from '../../images/playLogo.png'
import elmLogo from '../../images/smallLogo.png'

export default function Header() {

    const { lang, setLang } = useContext(UserContext);
    const texts = Texts[lang];

    return (
        <div className={CSS.header}>

            <div className={CSS.buttons}>
                <p onClick={() => { lang === "ar" ? setLang("en") : setLang("ar") }}>{texts.lang}</p>
                <img src={apple} className={CSS.apple} alt='logo'></img>
                <img src={play} className={CSS.play} alt='logo'></img>
            </div>
            <p className={CSS.secondary} onClick={() => { lang === "ar" ? setLang("en") : setLang("ar") }}>{texts.lang}</p>

            <div className={CSS.words}>
                <p>{texts.policy}</p>
                <p>{texts.terms}</p>
                <p>{texts.contact}</p>
            </div>

            <div className={CSS.logo}>
                <img src={elmLogo} alt='logo'></img>
            </div>

        </div>
    )
}