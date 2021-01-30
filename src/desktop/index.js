import React from 'react'
import style from './style.module.css'
import LockScreen from './lockscreen'
import Home from './home'

const Desktop = () => {
    return (
        <div className={style.container}>
            <LockScreen />
            <Home />
        </div>
    )
}

export default Desktop