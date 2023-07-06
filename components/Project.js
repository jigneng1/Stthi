import Link from "next/link";
import React, { Fragment } from "react";
function Project() {
  const data = [
    // {
    //   id: 1,
    //   intro: "graphic design & developer",
    //   content:
    //     "A project that allows students to research and study to create services on a given topic, the 2021 topic is Homework Services.",
    //   title: "🥇 SIT playground",
    //   year: "2021",
    //   img: "/assets/award/playground.png",
    //   link:""
    // },
    // {
    //   id: 2,
    //   intro: "graphic design",
    //   content:
    //     "a volunteer project of the SIT faculty. I am in a design position to jointly make stories for the Foundation for the Blind.",
    //   title: "SIT Volunteer 2021",
    //   year: "2021",
    //   img: "/assets/award/Sit vorunteer.jpg",
    //   link:""
    // },
    {
      id: 1,
      intro: "Frontend Developer",
      content: "My own portfolio website",
      title: "Stthi Portfolio",
      year: "2022",
      link: "https://github.com/jigneng1/Stthi",
    },
    {
      id: 2,
      intro: "Fullstack Developer",
      content: "Web application service that can create shorten url",
      title: "Stthi Shortener",
      year: "2023",
      link: "https://github.com/jigneng1/ShortLink",
    },
    {
      id: 3,
      intro: "Fullstack Developer",
      content: "Social Application for KMUTT students",
      title: "Modlife",
      year: "2023",
      link: "https://github.com/CSSIT22/studentlife",
    },
    {
      id: 4,
      intro: "Fullstack Developer",
      content: "Web aplication for CS firstdate 202",
      title: "DeteactiveXXIII",
      year: "2023",
      link: "https://github.com/ThisTine/detectiveXXIII-frontend",
    },
    {
      id: 5,
      intro: "Project Manager & Fullstack",
      content: "Application to join event with the same interesting",
      title: "TungTee",
      year: "2023",
      link: "https://github.com/jigneng1/TungTee",
    },
    {
      id: 6,
      intro: "Devops Developer",
      content: "Mobile Application to solve the foodwaste problem",
      title: "TungLuea",
      year: "2023",
      link: "https://github.com/sorasora46/Tungleua",
    },
  ];
  return (
    <Fragment>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <div className="row">
              <div className="container">
                {/* <img
                  src={item.img}
                  style={{ width: "320px", borderRadius: "32px" }}
                ></img> */}

                <h3 className="font">{item.title}</h3>
                <p>{item.year}</p>
                <br />
                <div className="hoverdiv">
                  <div className="content">
                    <h1>{item.title}</h1>

                    <h5> {item.intro}</h5>
                    <p>{item.content}</p>
                  </div>

                  {/* {handleLinkButton(item.link)} */}
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
          height: 250px;
          box-shadow: 3px 3px 5px 3px #ccc;
          margin: 20px;
          border-radius: 32px;
          transform: scale(1);
          transition: all 0.3s ease-in-out;
          display: flex;
          flex-direction: column;
          justify-content: center;
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
        .tech{
          boder:solid 10px  #c7d36f
          margin: 10px 10px
        }
      `}</style>
    </Fragment>
  );
}
export default Project;
