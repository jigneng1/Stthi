import { Fragment, useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Typing from "../../components/Typing";
import Footer from "../../components/Footer";
import Link from "next/link";

const Home = () => {
  return (
    <Fragment>
      <div>
        <Layout page="home">
          <div className="motion">
            <div className="container">
              <img
                src="/images/profile.jpeg"
                width="350px"
                height="auto"
                className="profilePic"
                alt="profile picture"
              ></img>
              <h1 className="text" style={{ margin: "20px 0px 0px 0px" }}>
                Hello, 🥝{"   "}
              </h1>
              <div className="column-con">
                <div>
                  <div>
                    <div className="row-con">
                      <h1
                        className="text"
                        style={{ margin: "20px 0px 0px 0px" }}
                      >
                        I’m{" "}
                      </h1>
                      <div
                        className="text"
                        style={{
                          paddingLeft: "10px",

                          color: "#C7D36F",
                          margin: "20px 0px 0px 0px",
                        }}
                      >
                        {" "}
                        <Typing></Typing>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line">
                  <div className="typing">
                    <p style={{ fontWeight: "500", color: "#4F4F4F" }}>
                      Welcome to my online portfolio website
                    </p>
                  </div>
                  <div className="typing">
                    <p style={{ margin: "0px", color: "#6D6D6D" }}>
                    I’m currently sophomore student at KMUTT major in Computer Science.
                      student
                    </p>
                  </div>
                  <div className="typing">
                    <p style={{ color: "#6D6D6D" }}>
                      Just a friendly note, you can call me
                    </p>
                    <p
                      style={{
                        fontWeight: "600",
                        color: "#6D6D6D",
                      }}
                    >
                      “Neng”
                    </p>
                  </div>

                  <div className="containerButon">
                    <Link href="/about">
                      <button className="button">
                        <span
                          style={{
                            fontSize: "14px",
                            backgroundColor: "transparent",
                          }}
                        >
                          More infomation about me{" "}
                        </span>
                      </button>
                    </Link>
                  </div>
                  <Footer></Footer>
                </div>
              </div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
        </Layout>
      </div>

      <br />
      <style jsx>{`
         .profilePic {
          border-radius: 50%;
          width: 350px;
          height: auto;
          margin: 30px;
        }
         .line {
          background-color: #C7D36F;
          width: 320px;
          height: 3px;
        }
        .containerButon {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
        }
        .motion {
          position: relative;
          animation: mymove 1s;
        }
        .button {
          background-color: #C7D36F;
          width: 200px;
          height: 40px;
          border-radius: 30px;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          outline: none;
        }
        .button:hover {
          transition: 0.5s;
          color: #C7D36F;
          border: solid;
          background-color: white;
          opacity: 1;
          right: 1;
        }
        .container {
          min-height: 70vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .column-con {
          //   margin-top: -100px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .row-con {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
        }
        .typing {
          margin: 0px;
          padding: 0px;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          animation-name: example;
          animation-duration: 4s;
        }
        .text {
          font-size: 1.5rem;
        }
        @keyframes example {
          0% {
            opacity: 0%;
          }
          25% {
            opacity: 60%;
          }
          50% {
            opacity: 80%;
          }
          75% {
            opacity: 90%;
          }
          100% {
            opacity: 100%;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Home;