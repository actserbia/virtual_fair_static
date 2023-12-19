"use client";

import MainScene from './3d/MainScene'
import styles from './page.module.css'
import { dummyBooths } from './3d/lib/consts/dummyData';
import { useEffect, useContext} from 'react';
import { GridContext } from './3d/contexts/GridContext';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

export default function HomePage() {
  const { initBooths } = useContext(GridContext);
  const router = useRouter();

  useEffect(() => {
    initBooths(dummyBooths);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenAccountInfo = () => {
    router.push("/detail");
  }

  return (
    <>
      <Head>
        <title>Main scene</title>
        <meta property="og:title" content="Main scene" />
        {/* <meta
          property="og:description"
          content=""
        /> */}
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_ROOT}/images/og1.jpg`}
        />
      </Head>
      <main className={styles.main}>
        <MainScene handleOpenAccountInfo={handleOpenAccountInfo} />
      </main>
    </>

  )
}
