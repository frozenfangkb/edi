import Head from 'next/head'
import Image from 'next/image'
import { Edi01 } from '../components/Edi01/Edi01'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Edi01 />
    </div>
  )
}
