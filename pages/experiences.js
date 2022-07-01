import React, { Fragment } from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
function Experience() {
  return (
    <Fragment>
      <Layout page="experiences">
        <div className="container">
          <h1>Showcase</h1>
          <p style={{ fontWeight: "500", color: "#4F4F4F" }}>
            -Good things, take time.-
          </p>
          <p style={{ color: "#4F4F4F" }}>
            {" "}
            These is my experience about programming & music that I enjoy to do.
          </p>
        </div>
        <Footer />
      </Layout>
      <style jsx>{`
        .nonactive {
          margin: 10px;
          font-weight: 700;
        }
        .nonactive:hover {
          border-bottom: 3px solid #d18585;
          transition: 0.1s;
          opacity: 0.8;
        }
        .active {
          margin: 10px;
          font-weight: 700;
          background-color: #d18585;
          color: white;
          border-radius: 15px;
          box-shadow: 1px 1px 2px 1px #cccc;
          border-bottom: 3px solid #d18585;
        }
        button {
          border: none;
          background-color: white;
          height: 30px;
          outline: none;
        }
        .row {
          display: flex;
          flex-direction: row;
        }
        h1 {
          color: #c7d36f;
          font-size: 4rem;
        }
        p {
          padding-left: 10px;
          padding-right: 10px;
        }
        .container {
          text-align: center;
          min-height:86vh;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
        }
      `}</style>
    </Fragment>
  );
}
export default Experience;
