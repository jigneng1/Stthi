import { Fragment} from "react";
const Skills = ({ id }) => {
  const skills = [
    {
      icons: [
        { title: "HTML", icon: "/assets/HTML.svg" },
        { title: "CSS", icon: "/assets/CSS.svg" },
        { title: "JS", icon: "/assets/JavaScript.svg" },
        { title: "Sass", icon: "/assets/Sass.svg" },
        { title: "React", icon: "/assets/React-Dark.svg" },
        { title: "Boostrap", icon: "/assets/Bootstrap.svg" },
        { title: "Tailwind", icon: "/assets/TailwindCSS-Dark.svg" },
        { title: "Mui", icon: "/assets/MaterialUI-Dark.svg" },

      ],
    },
  ];
  const backends = [
    {
      icons: [
        { title: "Node JS", icon: "/assets/NodeJS-Dark.svg" },
        { title: "Express", icon: "/assets/ExpressJS-Dark.svg" },
        { title: "MongoDB", icon: "/assets/MongoDB.svg" },



      ],
    },
  ];
  const dnt = [
    {
      icons: [
        { title: "Git", icon: "/assets/Git.svg" },
        { title: "Git Hub", icon: "/assets/Github-Dark.svg" },
        { title: "Figma", icon: "/assets/Figma-Dark.svg" },


      ],
    },
  ];
  const design = [
    {
      icons: [
        { title: "Photoshop", icon: "/assets/Photoshop.svg" },
        { title: "Illustrator", icon: "/assets/Illustrator.svg" },
        { title: "Premire Pro", icon: "/assets/Premiere.svg" },
      ],
    },
  ];
  if (id == "font") {
    return (
      <Fragment>
        <div className="row">
          <div>
            {skills.map((i, index) => (
              <div key={index}>
                <div className="rowfront">
                  {i.icons.map((s, i) => (
                    <div>
                      <div className="column" key={i}>
                        {s.icon.substring(0, 1) == "/" ? (
                          <img src={`${s.icon}`} className="icon1"></img>
                        ) : (
                          <i className={`fab fa-${s.icon}`}></i>
                        )}

                        <p className="font">{s.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
            i {
                color: #d18585;
                font-size: 35px;
              }
              .icon1 {
                width: 57px;
              }
              .icon {
                width: 40px;
              }
              .row {
                display: flex;
                justify-content: center;
                text-align:center;
                align-items: center;
                flex-wrap:wrap;
              }
              .rowfront {
                display: grid;
                justify-content: center;
                text-align:center
                // width: 100px;
                align-items: center;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                justify-items: center;
              }
              .column {
                margin: 20px;
                // width:240px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                flex-wrap:wrap;
              }
              .font {
                font-size: 13px;
                font-weight: 500;
              }
              @media only screen and (max-width: 768px) {
                i {
                  color: #d18585;
                  font-size: 25px;
                }
                .font {
                  font-size: 10px;
                  font-weight: 500;
                }
                .icon {
                  width: 20px;
                }
                .icon1 {
                  width: 42.5px;
                }
                .column {
                  margin: 10px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-direction: column;
                }
              }            
        `}</style>
      </Fragment>
    );
  }
  if (id == "tools") {
    return (
      <Fragment>
        <div className="row">
          <div>
            {dnt.map((i, index) => (
              <div key={index}>
                <div className="row">
                  {i.icons.map((s, i) => (
                    <div>
                      <div className="column" key={i}>

                        {s.icon.substring(0, 1) == "/" ? (
                          <img src={`${s.icon}`} className="icon"></img>
                        ) : (
                          <i className={`${s.icon}`}></i>
                        )}


                        <p className="font">{s.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
            i {
                color: #d18585;
                font-size: 35px;
              }
              .icon1 {
                width: 57px;
              }
              .icon {
                width: 57px;
              }
              .row {
                display: flex;
                justify-content: center;
                text-align:center;
                align-items: center;
                flex-wrap:wrap;
              }
              .rowfront {
                display: grid;
                justify-content: center;
                text-align:center
                // width: 100px;
                align-items: center;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                justify-items: center;
              }
              .column {
                margin: 20px;
                // width:240px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                flex-wrap:wrap;
              }
              .font {
                font-size: 13px;
                font-weight: 500;
              }
              @media only screen and (max-width: 768px) {
                i {
                  color: #d18585;
                  font-size: 25px;
                }
                .font {
                  font-size: 10px;
                  font-weight: 500;
                }
                .icon {
                  width: 42.5px;
                }
                .icon1 {
                  width: 42.5px;
                }
                .column {
                  margin: 10px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-direction: column;
                }
              }
            
        `}</style>
      </Fragment>
    );
  }
  if (id == "back") {
    return (
      <Fragment>
        <div className="row">
          <div>
            {backends.map((i, index) => (
              <div key={index}>
                <div className="row">
                  {i.icons.map((s, i) => (
                    <div>
                      <div className="column" key={i}>
                        {s.icon.substring(0, 1) == "/" ? (
                          <img src={`${s.icon}`} className="icon"></img>
                        ) : (
                          <i className={`${s.icon}`}></i>
                        )}

                        <p className="font">{s.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
            i {
                color: #d18585;
                font-size: 35px;
              }
              .icon1 {
                width: 57px;
              }
              .icon {
                width: 57px;
              }
              .row {
                display: flex;
                justify-content: center;
                text-align:center;
                align-items: center;
                flex-wrap:wrap;
              }
              .rowfront {
                display: grid;
                justify-content: center;
                text-align:center
                // width: 100px;
                align-items: center;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                justify-items: center;
              }
              .column {
                margin: 20px;
                // width:240px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                flex-wrap:wrap;
              }
              .font {
                font-size: 13px;
                font-weight: 500;
              }
              @media only screen and (max-width: 768px) {
                i {
                  color: #d18585;
                  font-size: 25px;
                }
                .font {
                  font-size: 10px;
                  font-weight: 500;
                }
                .icon {
                  width: 42.5px;
                }
                .icon1 {
                  width: 42.5px;
                }
                .column {
                  margin: 10px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-direction: column;
                }
              }
            
        `}</style>
      </Fragment>
    );
  }
  if (id == "design") {
    return (
      <Fragment>
        <div className="row">
          <div>
            {design.map((i, index) => (
              <div key={index}>
                <div className="row">
                  {i.icons.map((s, i) => (
                    <div>
                      <div
                        className="column"
                        key={i}
                        style={{ margin: "15px" }}
                      >
                        <img src={`${s.icon}`} className="icon"></img>

                        <p className="font">{s.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
            i {
                color: #d18585;
                font-size: 35px;
              }
              .icon1 {
                width: 57px;
              }
              .icon {
                width: 57px;
              }
              .row {
                display: flex;
                justify-content: center;
                text-align:center;
                align-items: center;
                flex-wrap:wrap;
              }
              .rowfront {
                display: grid;
                justify-content: center;
                text-align:center
                // width: 100px;
                align-items: center;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                justify-items: center;
              }
              .column {
                margin: 20px;
                // width:240px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                flex-wrap:wrap;
              }
              .font {
                font-size: 13px;
                font-weight: 500;
              }
              @media only screen and (max-width: 768px) {
                i {
                  color: #d18585;
                  font-size: 25px;
                }
                .font {
                  font-size: 10px;
                  font-weight: 500;
                }
                .icon {
                  width: 42.5px;
                }
                .icon1 {
                  width: 42.5px;
                }
                .column {
                  margin: 10px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-direction: column;
                }
              }
            
        `}</style>
      </Fragment>
    );
  }

  return <Fragment>test</Fragment>;
};
export default Skills;