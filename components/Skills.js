import { Fragment } from "react";
const Skills = ({ id }) => {
  const skills = [
    {
      icons: [
        { title: "HTML", icon: "/assets/HTML.svg" },
        { title: "CSS", icon: "/assets/CSS.svg" },
        { title: "JS", icon: "/assets/JavaScript.svg" },
        { title: "TS", icon: "/assets/Typescript.svg" },
        { title: "Sass", icon: "/assets/Sass.svg" },
        { title: "Boostrap", icon: "/assets/Bootstrap.svg" },
        { title: "Tailwind", icon: "/assets/TailwindCSS-Dark.svg" },
        { title: "Mui", icon: "/assets/MaterialUI-Dark.svg" },
        { title: "React", icon: "/assets/React-Dark.svg" },
        { title: "Vue", icon: "/assets/VueJS-Dark.svg" },
        { title: "NextJS", icon: "/assets/NextJS-Dark.svg" },
        { title: "Angular", icon: "/assets/Angular-Dark.svg" },
        { title: "Redux", icon: "/assets/Redux.svg" },
        { title: "JQuery", icon: "/assets/JQuery.svg" },
        { title: "Vite", icon: "/assets/Vite-Dark.svg" },
        { title: "Flutter", icon: "/assets/Flutter-Dark.svg" },
        { title: "Node JS", icon: "/assets/NodeJS-Dark.svg" },
        { title: "Express", icon: "/assets/ExpressJS-Dark.svg" },
        { title: "Prisma", icon: "/assets/Prisma.svg" },
        { title: "MongoDB", icon: "/assets/MongoDB.svg" },
        { title: "MySQL", icon: "/assets/MySQL-Dark.svg" },
        { title: "Firebase", icon: "/assets/Firebase-Dark.svg" },
      ],
    },
  ];
  const programing_langs = [
    {
      icons: [
        { title: "Java", icon: "/assets/Java-Dark.svg" },
        { title: "Python", icon: "/assets/Python-Dark.svg" },
        { title: "C", icon: "/assets/C.svg" },
        { title: "C++", icon: "/assets/Cpp.svg" },
        { title: "C#", icon: "/assets/CS.svg" },
        { title: "GO", icon: "/assets/GoLang.svg" },
        { title: "Dart", icon: "/assets/Dart-Dark.svg" },
      ],
    },
  ];
  const infrastructure = [
    {
      icons: [
        { title: "Docker", icon: "/assets/Docker.svg" },
        { title: "K8S", icon: "/assets/Kubernetes.svg" },
        { title: "Github Action", icon: "/assets/GithubActions-Dark.svg" },
        { title: "Bash", icon: "/assets/Bash-Dark.svg" },
        { title: "Cloudflare", icon: "/assets/Cloudflare-Dark.svg" },
        { title: "GCP", icon: "/assets/GCP-Dark.svg" },
        { title: "Azure", icon: "/assets/Azure-Dark.svg" },
        { title: "Nginx", icon: "/assets/Nginx.svg" },
        { title: "Linux", icon: "/assets/Linux-Dark.svg" },
      ],
    },
  ];
  const design = [
    {
      icons: [
        { title: "Figma", icon: "/assets/Figma-Dark.svg" },
        { title: "Git", icon: "/assets/Git.svg" },
        { title: "Github", icon: "/assets/Github-Dark.svg" },
        { title: "Photoshop", icon: "/assets/Photoshop.svg" },
        { title: "Illustrator", icon: "/assets/Illustrator.svg" },
        { title: "Premire Pro", icon: "/assets/Premiere.svg" },
        { title: "Vscode", icon: "/assets/VSCode-Dark.svg" },
        { title: "AndroidStudio", icon: "/assets/AndroidStudio-Dark.svg" },
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
                    <div key={i}>
                      <div className="column">
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
              @media only screen and (max-width: 1024px) {
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
            {infrastructure.map((i, index) => (
              <div key={index}>
                <div className="rowfront">
                  {i.icons.map((s, i) => (
                    <div key={i}>
                      <div className="column">
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
                width: 100px;
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
              @media only screen and (max-width: 1024px) {
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
            {programing_langs.map((i, index) => (
              <div key={index}>
                <div className="rowfront">
                  {i.icons.map((s, i) => (
                    <div key={i}>
                      <div className="column">
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
                align-items: center;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                justify-items: center;
              }
              .column {
                margin: 20px;
                //width:240px;
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
              @media only screen and (max-width: 1024px) {
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
                <div className="rowfront">
                  {i.icons.map((s, i) => (
                    <div key={i}>
                      <div className="column" style={{ margin: "15px" }}>
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
              @media only screen and (max-width: 1024px) {
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
