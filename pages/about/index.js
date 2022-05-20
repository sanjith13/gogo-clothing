import React from "react";
import Head from "next/head";
import Header from "../../components/header";
const About = () => {
  return (
    <div>
      <Head>
        <title>GoGo | About</title>
        <meta name="products" content="gogoclothing" />
      </Head>
      <Header />
      <div style={{textAlign:"center",width:"100vw",backgroundColor:"black",color:"white",fontFamily:""}}>
        <div style={{width:"10vw",height:"5vh",backgroundColor:"rgba(235, 178, 189, 0.247)",transform:"rotate(-30deg)",position:"absolute",marginLeft:"-3vw",marginTop:"6vh",borderRadius:"40px"}}></div>
        <div style={{width:"20vw",height:"10vh",backgroundColor:"rgba(235, 178, 189, 0.247)",transform:"rotate(-30deg)",position:"absolute",marginLeft:"-3vw",marginTop:"7vh",borderRadius:"40px"}}></div>
        <div style={{width:"10vw",height:"5vh",backgroundColor:"rgba(235, 178, 189, 0.247)",transform:"rotate(-30deg)",position:"absolute",marginLeft:"-3vw",marginTop:"20vh",borderRadius:"40px"}}></div>
        <p style={{margin:"20px",padding:"20px",zIndex:"10"}}>
          We GOGO clothing have taken interest in building our website for the
          development of our business and to engage our customers with our best
          products, So I Kavin founder and executive officer of GOGO clothing
          has taken interest in recruiting Sanjeev. S (19CSR171), Sanjith.
          M(19CSR173) , Santhiya. R(19CSR174) for the development of our website
          with the following information to understand our purpose of our brand.
          We will provide an amount of Rs.8,100 + 18% GST for the website,by
          meeting our specifications and requirements. Further maintaince if
          needed will be done at any cost on chargeable basics. Thanking you
          GOGO clothing Kavin.U.K, Gogo clothing
        </p>
      </div>
    </div>
  );
};

export default About;
