import React, { Fragment, useState } from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Project from "../components/Project";
import Music from "../components/Music";
function Experience() {
    const [current, setCurrent] = useState(1);
    const renderPage = () => {
      switch (current) {
        case 1:
          return <Project />;
        case 2:
          return <Music />
      }
    };
    const items = [
      { label: "Development", page: 1 },
  
      { label: "Music", page: 2 },
  
    ];
    return (
      <Fragment>
        <Layout page="experiences">
          <div className="container">
            <h1>Showcase</h1>
            <p style={{ fontWeight: "500", color: "#4F4F4F" }}>-Minimal & simple are a passion of mine-</p>
            <p style={{ color: "#4F4F4F" }}> I will try my best to create good quality and work</p>
            <p style={{ color: "#4F4F4F" }}>The showcase composes of Development and Graphic design</p>
            <div className="row">
              {items.map((item) => {
                return (
                  <div key={item.label}>
                    <br />
                    <button
                      className={`item ${item.page === current ? "active" : "nonactive"
                        }`}
                      onClick={() => {
                        setCurrent(item.page);
                      }}
                    >
                      {item.label}
                    </button>
                  </div>
                );
              })}
            </div>
            <br />
            <div className="card">{renderPage()}</div>
          </div>
          <Footer />
        </Layout>
        <style jsx>{`
          .nonactive {
            margin: 10px;
            font-weight: 700;
          }
          .nonactive:hover {
            border-bottom: 3px solid #c7d26f;
            transition: 0.1s;
            opacity: 0.8;
          }
          .active {
            margin: 10px;
            font-weight: 700;
            background-color: #c7d26f;
            color: white;
            border-radius:15px;
            box-shadow: 1px 1px 2px 1px #cccc;
            border-bottom: 3px solid #c7d26f;
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
            color: #c8d26f;
            font-size: 4rem;
          }
          p {
            padding-left: 10px;
            padding-right: 10px;
          }
          .container {
            text-align: center;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
          }
          .card{
            display: flex;
            justify-content:center;
            flex-wrap: wrap;
          }
        `}</style>
      </Fragment>
    );
  };
export default Experience;
