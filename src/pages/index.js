import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import Layout from "@components/Layout";
import Container from "@components/Container";
import Button from "@components/Button";

import styles from "@styles/Home.module.scss";
import Map from "@components/Map";

export default function Home({ images, nextCursor }) {
  // console.log("images", images);
  // console.log("nextCursor", nextCursor);

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
                <a href={image.link} rel="noreferrer">
                  <div className={styles.imageImage}>
                    <Image
                      width={image.width}
                      height={image.height}
                      src={image.image}
                      alt={image.title}
                    />
                  </div>
                  <h3 className={styles.imageTitle}>{image.title}</h3>
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_API_KEY +
            ":" +
            process.env.CLOUDINARY_API_SECRET
        ).toString("base64")}`,
      },
    }
  ).then((r) => r.json());
  const { resources, next_cursor: nextCursor } = results;

  const images = resources.map((resource) => {
    const { width, height } = resource;
    return {
      id: resource.asset_id,
      title: resource.public_id,
      image: resource.secure_url,
      width,
      height,
    };
  });

  return {
    props: { images, nextCursor },
  };
}
