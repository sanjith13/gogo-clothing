import React from 'react'
import styles from './secondbody.module.css'
const SecondBody = () => {
  return (
    <div className={styles.secondBody}>
        <h1 className={styles.secondBody__header}>Why shop with us</h1>
        <hr className={styles.secondBody__hr}></hr>
        <div className={styles.secondBody__points}>
          <div className={styles.secondBody__point}>FastDelivery🚛</div>
          <div className={styles.secondBody__point}>Bestquality👕</div>
          <div className={styles.secondBody__point}>Cheap💰</div>
        </div>
    </div>
  )
}

export default SecondBody