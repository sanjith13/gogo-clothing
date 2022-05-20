import React from 'react'
import Head from 'next/head'
import Header from '../../components/header'
import styles from '../../components/productbody.module.css'
import Footer from '../../components/footer'
import Image from "next/image";
const ProductsHome = () => {
  return (
    <div style={{width: "100vw",overflow: "hidden"}}>
      <Head>
        <title>GoGo | Products</title>
        <meta name = "products" content = "gogoclothing" />
      </Head>
      <Header />
      <div style={{backgroundColor: "rgb(241,30,65)",color: "white",textAlign:"center",padding: "40px",weight:"bold",fontFamily:"fantasy"}}><h1>PRODUCTS GRID</h1></div>
      <div style={{color: "rgb(241,30,65)",textAlign:"center",padding: "20px",fontFamily:"fantasy"}}><span style={{fontSize:"40px"}}><span style={{color: "black",fontFamily:"serif"}}>Our</span> Products</span></div><hr style={{color: "rgb(241,30,65)",width:"50px",height:"4px",marginLeft:"auto",marginRight:"auto",marginTop:"-20px"}}/>
      <div className={styles.productBody__products}>
        <div className={styles.productBody__product} style={{textAlign:"center"}} >
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
          <div className={styles.productBody__product} style={{textAlign:"center"}}>
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
        <div className={styles.productBody__product} style={{textAlign:"center"}}>
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
          <div className={styles.productBody__product} style={{textAlign:"center"}}>
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
        <div className={styles.productBody__product} style={{textAlign:"center"}}>
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
        <div className={styles.productBody__product} style={{textAlign:"center"}}>
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
      </div><div className={styles.productBody__products} style={{textAlign:"center"}}>
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
          <div className={styles.productBody__product} style={{textAlign:"center"}}>
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
        <div className={styles.productBody__product} style={{textAlign:"center"}}>
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
          <div className={styles.productBody__product} style={{textAlign:"center"}}>
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
        <div className={styles.productBody__product} style={{textAlign:"center"}}>
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
        <div className={styles.productBody__product} style={{textAlign:"center"}}>
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
      <Footer />
    </div>
  )
}

export default ProductsHome