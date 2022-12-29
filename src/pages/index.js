import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import Layout from "@components/Layout";
import Container from "@components/Container";
import Button from "@components/Button";

import styles from "@styles/Home.module.scss";
import Map from "@components/Map";

export default function Home() {
  // console.log("images", images);
  // console.log("nextCursor", nextCursor);

  const images = [
    
    {
      id: 'e02db7fe17409b10f9d70ad8b1729435',
      width: 1000,
      height: 1333,
      public_id: 'casoni/IMG_8249_otvxle',
      lat: `44 deg 8' 53.24" N`,
      long: `10 deg 53' 57.80" E`
    },
    {
      id: '7bc16f2c8e6549df269f0e1a8b12be5a',
      width: 1000,
      height: 1333,
      public_id: 'casoni/IMG_E8237_uh91du',
      lat: `44 deg 8' 45.68" N`,
      long: `10 deg 54' 5.29" E`
    },
    {
      id: 'd5849a8afe72b07c0f32720614c45739',
      width: 1333,
      height: 1000,
      public_id: 'casoni/IMG_8250_zurpjo',
      lat: `44 deg 8' 53.61" N`,
      long: `10 deg 53' 57.71" E`
    },
    {
      id: '7ec5557c1db879fa18134bcef305f8f4',
      width: 1000,
      height: 1333,
      public_id: 'casoni/IMG_8252_wvwnug',
      lat: `44 deg 8' 53.41" N`,
      long: `10 deg 53' 53.64" E`
    },
    {
      id: '692d510585cb1113873d1e683e8f5337',
      width: 1000,
      height: 1333,
      public_id: 'casoni/IMG_E8122_npwima',
      lat: `44 deg 9' 6.43" N`,
      long: `10 deg 54' 6.47" E`
    },
    {
      id: 'a0052e99e8183ee696d94f67a6e1e9ae',
      width: 1000,
      height: 1333,
      public_id: 'casoni/IMG_E8193_klcklc',
      lat: `44 deg 8' 59.50" N`,
      long: `10 deg 54' 14.68" E`
    },
    {
      id: 'de0a97d0a35c199354815a3212d0f2c7',
      width: 1000,
      height: 1333,
      public_id: 'casoni/IMG_8247_wgdvva',
      lat: `44 deg 8' 53.11" N`,
      long: `10 deg 53' 57.45" E`
    },
    {
      id: '7c4e0243a4465aa1991a58c21bd7d635',
      width: 1333,
      height: 1000,
      public_id: 'casoni/IMG_8243_bl7u74',
      lat: `44 deg 8' 50.21" N`,
      long: `10 deg 53' 53.64" E`
    },
    {
      id: 'c39c1ba98fad2b2ffc7406e4ead6221e',
      width: 2145,
      height: 1000,
      public_id: 'casoni/IMG_8251_qtzgzt',
      lat: `44 deg 8' 53.85" N`,
      long: `10 deg 53' 57.67" E`
    },
    {
      id: 'fd2d83700d835be7f70d62e26c22ee7d',
      width: 1000,
      height: 1333,
      public_id: 'casoni/IMG_8248_nrnxkq',
      lat: `44 deg 8' 53.19" N`,
      long: `10 deg 53' 57.56" E`
    }
  ];
  console.log(images);
  return (
    <Layout>
      <Head>
        <title>Casoni</title>
        <meta name="description" content="All of my cool images." />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>

      <Container>
        <Map />
        <h1 className="sr-only">I casoni di Porchia</h1>

        <ul className={styles.images}>
          {images.map((image) => {
            return (
              <li key={image.id}>
                <a href={`https://res.cloudinary.com/dxbxbdarb/image/upload/v1668253659/${image.public_id}.jpg`} rel="noreferrer">
                  <div className={styles.imageImage}>
                    <Image
                      width={image.width}
                      height={image.height}
                      src={`https://res.cloudinary.com/dxbxbdarb/image/upload/v1668253659/${image.public_id}.jpg`}
                      alt={image.public_id}
                    />
                  </div>
                  <h3 className={styles.imageTitle}>{image.public_id}</h3>
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </Layout>
  );
}

