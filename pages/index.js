import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Link from "next/link";

import react, { useState, useEffect } from "react";
export default function Home() {
  // useEffect(() => {
  //   const monsterFetchUrl =
  //     "https://souvikotaku.github.io/silenthillapi/data.json";

  //   const fetchData = async () => {
  //     const response = await fetch(monsterFetchUrl);
  //     const data = await response.json();
  //     console.log(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className={styles.mainBackgroundDiv}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        {/* bootstrap 5 */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        ></link>
        <script
          async
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link href="#" legacyBehavior>
            <a className="navbar-brand">Silent Hill</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav"></ul>
          </div>
        </div>
      </nav>

      <main className={styles.main}>
        <div className={styles.mainCardDiv}>
          <div className={styles.innerCard}>
            <h5 className="card-header" style={{ color: "red" }}>
              Silent Hill 1 monster list
            </h5>
            <div className={styles.innerCardBody}>
              <h5 className="card-title" style={{ color: "transparent" }}>
                Special title treatment
              </h5>
              <p className="card-text" style={{ color: "transparent" }}>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link href="/games/silentHill1" legacyBehavior>
                <a className="btn btn-primary">Go</a>
              </Link>
            </div>
          </div>
          <div className={styles.innerCard}>
            <h5 className="card-header" style={{ color: "red" }}>
              Silent Hill 2 monster list
            </h5>
            <div className={styles.innerCardBody2}>
              <h5 className="card-title" style={{ color: "transparent" }}>
                Special title treatment
              </h5>
              <p className="card-text" style={{ color: "transparent" }}>
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              {/* <Link href="/games/silentHill2">
                <a className="btn btn-primary" disabled>
                  In Progress
                </a>
              </Link> */}
              <button type="button" className="btn btn-warning" disabled>
                Work In Progress
              </button>
              {/* <Link href="/games/silentHill2" legacyBehavior>
                <a className="btn btn-primary">Go</a>
              </Link> */}
            </div>
          </div>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <Link
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          legacyBehavior
        >
          <a>Made by Souvik </a>
        </Link>
      </footer> */}
    </div>
  );
}
