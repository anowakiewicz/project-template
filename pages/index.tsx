import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Our App</title>
      </Head>
    </div>
  )
}