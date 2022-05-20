import React from "react";
import styles from "./productbody.module.css";
import Image from "next/image";
const ProductBody = () => {
  return (
    <div className={styles.productBody}>
      <h1 className={styles.productBody__title}>
        Our <span className={styles.productBody__title2}>Products</span>
      </h1>
      <div className={styles.body__bubble1}></div>
      <div className={styles.body__bubble2}></div>
      <div className={styles.body__bubble3}></div>
      <div className={styles.productBody__products}>
        <div className={styles.productBody__product}>
          <Image
            src="/shirt40.jpg"
            alt="gogoclothing"
            width={280}
            height={340}
          ></Image>
          <h6>blue t-shirt</h6>
          <p>4.4⭐</p>
          <h6>240 Rs</h6>
          <button className={styles.productBody__productbutton}>buy</button>
          <button className={styles.productBody__productbutton}>addtocart</button>
          </div>
          <div className={styles.productBody__product}>
          <Image
            src="/skyblue.jpg"
            alt="gogoclothing"
            width={280}
            height={340}
          ></Image>
          <h6>blue t-shirt</h6>
          <p>4.4⭐</p>
          <h6>240 Rs</h6>
          <button className={styles.productBody__productbutton}>buy</button>
          <button className={styles.productBody__productbutton}>addtocart</button>
        </div>
        <div className={styles.productBody__product}>
          <Image
            src="/whiteshirt.jpg"
            alt="gogoclothing"
            width={280}
            height={340}
          ></Image>
          <h6>blue t-shirt</h6>
          <p>4.4⭐</p>
          <h6>240 Rs</h6>
          <button className={styles.productBody__productbutton}>buy</button>
          <button className={styles.productBody__productbutton}>addtocart</button>
          </div>
          <div className={styles.productBody__product}>
          <Image
            src="/yellowshirt.jpg"
            alt="gogoclothing"
            width={280}
            height={340}
          ></Image>
          <h6>blue t-shirt</h6>
          <p>4.4⭐</p>
          <h6>240 Rs</h6>
          <button className={styles.productBody__productbutton}>buy</button>
          <button className={styles.productBody__productbutton}>addtocart</button>
        </div>
        <div className={styles.productBody__product}>
          <Image
            src="/liteyellow.jpg"
            alt="gogoclothing"
            width={280}
            height={340}
          ></Image>
          <h6>blue t-shirt</h6>
          <p>4.4⭐</p>
          <h6>240 Rs</h6>
          <button className={styles.productBody__productbutton}>buy</button>
          <button className={styles.productBody__productbutton}>addtocart</button>
        </div>
        <div className={styles.productBody__product}>
          <Image
            src="/brownshirt.jpg"
            alt="gogoclothing"
            width={280}
            height={340}
          ></Image>
          <h6>blue t-shirt</h6>
          <p>4.4⭐</p>
          <h6>240 Rs</h6>
          <button className={styles.productBody__productbutton}>buy</button>
          <button className={styles.productBody__productbutton}>addtocart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductBody;
