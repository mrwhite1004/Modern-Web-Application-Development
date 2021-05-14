import Head from 'next/head'
import styles from '../styles/homepage.module.css'
import Header from '../functions/header'
import LeftBar from '../functions/leftbar'
import Center from '../functions/center'
import RightBar from '../functions/rightbar'

export default function Home() {
  return (
    <div>
    <Head>
      <title>今日头条</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
       <div>
        <Header></Header>
         <div id={styles.main}>
           <LeftBar></LeftBar>
           <Center></Center>
           <RightBar></RightBar>
         </div>
      </div>
    </main>
  </div>
  )
}
