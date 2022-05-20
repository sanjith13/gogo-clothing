import React from "react";
import HeaderLogo from "./headerlogo";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer__contact}>
        <div className={styles.footer__contactinfo}>
          <HeaderLogo />
          <p>
            <strong>ADDRESS</strong>: 28 White tower, Street Name New York City,
            USA
          </p>
          <p>
            <strong>TELEPHONE</strong>: +91 987 654 3210
          </p>
          <p>
            <strong>EMAIL</strong>: yourmain@gmail.com
          </p>
        </div>
        <div className={styles.footer__contactus}>
          <input
            type="text"
            name="subscribe"
            style={{
              padding: "10px",
              borderRadius: "10px",
            }}
          ></input>
          <button
          className={styles.footer__contactbutton}>
            subscribe
          </button>
          <p>*subscribe to receive notifications regarding updates</p>
        </div>
      </div>
      <div style={{
              backgroundColor: "black",
              color: "white",
              width: "100vw",
              height: "5vh",
              textAlign: "center",
            }} className={styles.footer__foot}>
          <p>© 2021 All Rights Yet To Be Reserved By <span style={{color:"rgb(241, 30, 65)"}}>GoGo Clothing</span></p>
      </div>
    </div>
  );
};

export default Footer;
