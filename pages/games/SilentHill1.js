import Head from "next/head";

import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import react, { useState, useEffect } from "react";
import Link from "next/link";
import ReactReadMoreReadLess from "react-read-more-read-less";

const SilentHill1 = (props) => {
  const { monsterData } = props;
  console.log("Monster Data", monsterData);
  // const [monsterData, setMonsterData] = useState([]);
  // useEffect(() => {
  //   const monsterFetchUrl =
  //     "https://pacific-journey-89141.herokuapp.com/api/silent-hill-monsters";

  //   const fetchData = async () => {
  //     const response = await fetch(monsterFetchUrl);
  //     const data = await response.json();
  //     console.log(data.data);
  //     console.log(data.data[0].attributes?.silenthill1monsters);
  //     setMonsterData(data.data[0].attributes?.silenthill1monsters);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className={styles.mainBackgroundDiv} style={{ height: "100vh" }}>
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
            <a className="navbar-brand">Silent Hill 1</a>
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/" legacyBehavior>
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className={styles.mobileRes}>
        {monsterData?.map((monster, index) => {
          const myLoader = ({ src }) => {
            return `${monster?.image_link}`;
          };
          return (
            <div
              key={index}
              className="card col-md-3 col-sm-12"
              style={{ width: "18rem", margin: "1em" }}
            >
              <div
                style={{
                  height: "15em",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="card-img-top"
              >
                <Image
                  // className={style.image_style}
                  style={{
                    width: "auto",
                    height: "100%",
                  }}
                  loader={myLoader}
                  src={monster?.image_link}
                  alt="..."
                  width={500}
                  height={400}
                  // layout="fill"
                />
              </div>

              <div
                className="card-body"
                style={{ height: "50%", color: "black" }}
              >
                <h5 className="card-title">{monster?.monsterName}</h5>
                <p className="card-text">{monster?.description}</p>
              </div>
              {/* <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul> */}
              <div className="card-body" style={{ textAlign: "center" }}>
                <Link href={monster?.page_link} legacyBehavior>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="card-link"
                    style={{ color: "blue" }}
                  >
                    Read More
                  </a>
                </Link>
                {/* <a href="#" className="card-link">
                Another link
              </a> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SilentHill1;
