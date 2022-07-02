import Link from "next/link";
import React, { Fragment } from "react";
function Project() {
  const data = [
    {
      id: 1,
      intro: "graphic design & consulting",
      content:
        "A project that allows students to research and study to create services on a given topic, the 2021 topic is Homework Services.",
      title: "🥇 SIT playground",
      year: "2021",
      img: "/assets/award/playground.png",
      front: "",
      back: "",
      socket: "",
      db: "",
      link: "experiences/playground",
      css: "",
      site: "",
      github: "",
    },
    {
      id: 2,
      intro: "graphic design",
      content:
        "a volunteer project of the SIT faculty. I am in a design position to jointly make stories for the Foundation for the Blind.",
      title: "SIT Volunteer 2021",
      year: "2021",
      img: "/assets/award/Sit vorunteer.jpg",
      front: "",
      back: "",
      socket: "",
      db: "",
      link: "",
      css: "",
      site: "",
      github: "",
    },
  ];
  return (
    <Fragment>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <div className="row">
              <div className="container">
                <img
                  src={item.img}
                  style={{ width: "320px", borderRadius: "32px" }}
                ></img>

                <h3 className="font">{item.title}</h3>
                <p>{item.year}</p>

                <br />
                <div className="hoverdiv">
                  <div className="content">
                    <h1>{item.title}</h1>

                    <h5> {item.intro}</h5>
                    <p>{item.content}</p>
                  </div>

                  <Link href={item.link}>
                    <button className="button">
                      <span
                        style={{
                          fontSize: "14px",
                          backgroundColor: "transparent",
                        }}
                      >
                        see more information
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <style jsx>{`
        h1 {
          color: #333333;
        }
        h5 {
          color: #6d6d6d;
        }
        .p {
        }
        .button {
          postion: absolute;
          background-color: #c7d36f;
          width: 200px;
          height: 40px;
          border-radius: 30px;
          color: white;
          border: none;
          outline: none;
        }
        .button:hover {
          transition: 0.5s;
          color: #c7d36f;
          border: solid;
          background-color: white;
          opacity: 1;
          right: 1;
        }
        p {
          color: #6d6d6d;
          padding: 0;
          margin: 10px;
        }
        .content {
          margin: 0;
          padding: 5px;
        }
        .link {
          color: #c7d36f;
        }
        .container {
          width: 320px;
          height: 350px;
          box-shadow: 3px 3px 5px 3px #ccc;
          margin: 20px;
          border-radius: 32px;
          transform: scale(1);
          transition: all 0.3s ease-in-out;
        }
        .hoverdiv {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: white;
          color: black;
          opacity: 0;
          border-radius: 32px;
          transition: all 0.15s ease-in-out;
          transition-delay: 0.15s;
          box-sizing: border-box;
        }
        .container:hover .hoverdiv,
        .container:active .hoverdiv {
          opacity: 1;
        }
        .container:hover {
          transform: scale(1.03);
        }
        .row {
          flex-wrap: wrap;
          display: flex;
          justify-content: center;
          flex-direction: row;
        }
      `}</style>
    </Fragment>
  );
}
export default Project;
