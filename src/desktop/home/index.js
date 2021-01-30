import React, { Fragment, useState } from 'react'
import { parseClassNames } from '../../utils/helper'
import style from './style.module.css'

const Home = () => {
    const [visible, setIsVisible] = useState(false)
    return (
        <Fragment>
            <div className={style.container} >
            <div className={style.home}>
            ASd
            </div>
            <div className={style.taskBar}>
                <div onClick={() => setIsVisible(!visible)} className={style.start}>
                    Home
                </div>
            </div>
            <div className={parseClassNames([style.popup, visible && style.popupvisible])}>
                <div className={style.popupleftsidebar}>
                    asd
                </div>
                <div className={style.popuplist}>
                <div className={parseClassNames([style.popuplistcontent, visible && style.contentlistshow])}>
                        <div className={parseClassNames([style.blockdefault, visible && style.blockdefaulthide])} />
                        <div className={style.contentlist}>asd</div>
                        <div className={style.contentlist}>asd</div>
                        <div className={style.contentlist}>asd</div>
                        <div className={style.contentlist}>asd</div>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}

export default Home