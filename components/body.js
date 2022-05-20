import React from "react";
import styles from "./body.module.css";
import Image from 'next/image'
const Body = () => {
  return (
    <div className={styles.body}>
      <div className={styles.body__text}>
        <h2>Get your favourate one</h2>
        <p style={{color:"white"}}>
          Experience the new and simple way of clothing.Cheap and best looking with comfort😎. 
        </p>
        <button className={styles.body__btn}>Shop Now</button>
        <div className={styles.body__bubble1}></div>
        <div className={styles.body__bubble2}></div>
        <div className={styles.body__bubble3}></div>
      </div>
    </div>
  );
};

export default Body;
