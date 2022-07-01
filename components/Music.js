import React, { Fragment } from 'react';
function Music() {
    const data=[
        {
            id:1,
            intro:"Guitarist of SWBT Band 2016-2020",
            content:
              "Gutarist & Pianist position at SWBT band",
            title: "SWBT band",
            year: "2016-2020",
            img: "/assets/award/Blue yellow Band.jpg",
            link: "",
        },
        {
            id:2,
            intro:"Guitarist ",
            content:
              "Received the 3rd prize in the 2019 Music Contest at Wat Khema Phirataram School.",
            title: "🥉 Music contest 2019",
            year: "2019",
            img: "/assets/award/musicThai2019.jpg",
            link: "",
        },
        {
            id:3,
            intro:"Guitarist ",
            content:
              "Received the 3rd prize in the 2018 Music Contest at Wat Khema Phirataram School.",
            title: "🥉 Music contest 2018",
            year: "2018",
            img: "/assets/award/musicThai2018.jpg",
            link: "",
        },
        {
            id:4,
            intro:"Guitarist ",
            content:
              "Received the 3rd prize in the Suntaraporn band contest in the Sarasas group of the year 2018",
            title: "🥉 SWBT Suntaraporn Band in 2018",
            year: "2018",
            img: "/assets/award/music2018.jpg",
            link: "",
        },
        {
            id:4,
            intro:"Guitarist ",
            content:
              "Received the 2rd prize in the Suntaraporn band contest in the Sarasas group of the year 2016",
            title: "🥈 SWBT Suntaraporn Band in 2016",
            year: "2016",
            img: "/assets/award/music.jpg",
            link: "",
        },
        

    ]
    return(
        <Fragment>
            {data.map((item)=>{
                return(
                    <div key={item.id}>
                    <div className="row">
                      <div className="container">
                        <img
                          src={item.img}
                          style={{ width:"320px", borderRadius: "32px", }}
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

                          <button
                            className="button"
                          >
                            <span
                              style={{
                                fontSize: "14px",
                                backgroundColor: "transparent",
                              }}
                            >
                              see more information
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
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
          // margin: 10px;
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
export default Music;