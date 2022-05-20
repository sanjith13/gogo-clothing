import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Body from '../components/body'
import SecondBody from '../components/secondbody'
import ProductBody from '../components/productbody'
import Footer from '../components/footer'
import Head from 'next/head'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GoGo | Home</title>
        <meta name = "home" content = "gogoclothing" />
      </Head>
      <Header />
      <Body />
      <SecondBody />
      <ProductBody />
      <Footer />
    </div>
  )
}