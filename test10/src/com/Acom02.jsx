import React from 'react'
import styles from './Acom02.module.scss'

const Acom02 = ({text, type="normal", oncl}) => {
    let cls;
    if(type === 'normal'){
        cls = styles.btn
    }
    else if(type === 'danger'){
        cls = `${styles.btn} ${styles.danger}`
    }
    else{
        cls = `${styles.btn} ${styles.blue}`
    }

  return (
    <div>
        <button className={cls} onClick={oncl}>{text}</button>
    </div>
  )
}

export default Acom02