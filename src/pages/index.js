import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import { Header } from "../common/components/ui/header/header.js"
import { Hero } from "../common/components/ui/hero/index.js"
import { Footer } from "../common/components/ui/footer/footer.js"
import { SectionOne } from "../common/components/modules/section-one/index.js"
import { SectionTwo } from "../common/components/modules/section-two/index.js"
import { SectionThree } from "../common/components/modules/section-three/index.js"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <> 
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="page-wrapper">
          <Header />
          <Hero />
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <Footer />
        </div>
       
      </main>
    </>
  )
}
