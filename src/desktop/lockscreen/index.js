import React, { useState } from 'react'
import style from './style.module.css'
import { parseClassNames } from '../../utils/helper'

const Lockscreen = () => {
    const [slideUp, setSlipdeUp] = useState(false)
    const onClickHandler = () => setSlipdeUp(true)
    return (
        <div className={parseClassNames([style.container, slideUp && style.slideUp])}>
            <div className={style.creds}>
                <div className={style.initials}>A</div>
                <div className={style.name}>Aseem Upadhyay</div>
                <button onClick={onClickHandler} className={style.signIn}>Sign In</button>
            </div>
        </div>
    )
}

export default Lockscreen