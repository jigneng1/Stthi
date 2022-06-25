import { Fragment} from "react";
import Layout from "../components/Layout";
// import Skills from "../component/skills";
import Footer from "../components/Footer";
// import style from "../styles/about";

const About = () => {
  return (
    <Fragment>
      <div>
        <Layout page="about">
          <div className="motion">
            <div className="container">
              <img className="profilePic" src="/images/profile.jpeg"></img>
              <div className="column-con">
                <div>
                  <div>
                    {/* <h1 className="text" style={{ margin: "20px 0px 0px 0px" }}>
                      Hello, 🥝{"   "}
                    </h1> */}
                    <div className="row-con">
                      
                      <h1
                        className="text"
                        style={{
                          paddingLeft: "10px",

                          color: "#C7D36F",
                          margin: "20px 0px 0px 0px",
                        }}
                      >
                        {" "}
                        Sitiporn Wimolpunyakul
                      </h1>
                      {/* <h1
                        className="text"
                        style={{ margin: "20px 0px 0px 0px" }}
                      >
                        I’m{" "}
                      </h1> */}
                    </div>
                  </div>
                </div>
                <div className="line" style={{ margin: "5px" }}></div>

                <div className="typing">
                  <p style={{ color: "#7B7B7B" }}>
                    {`- I’ m a sophomore student in Computer Science at King
                     Mongkut's University of Technology Thonburi (KMUTT)`}
                  </p>
                </div>
                <div className="typing">
                  <p style={{ color: "#7B7B7B" }}>
                    {`- I'm a full-stack developer who is interested in web ,algorithms and networks`}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container1">
              <div className="info">
                <div className="container-card">
                  <div
                    className="row"
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <h1 style={{ color: "#C7D36F" }}>Education</h1>
                    <i
                      className="fas fa-school"
                      style={{
                        color: "#C7D36F",
                        fontSize: "2rem",
                        marginLeft: "1rem",
                      }}
                    ></i>
                  </div>
                  <div className="card">
                    <p>Sarasas Witead Bangbuathong School 2010 - 2020</p>
                    <p>Science-Mathematices Program GPAX : 3.89</p>
                  </div>

                  <div className="card" style={{ marginTop: "2rem" }}>
                    <p>{`King Mongkut's University of Technology Thonburi`}</p>

                    <p>2021 - Present</p>
                    <p>{`I'm currently studying bachelor's second year of`}</p>
                    <p>Computer Science at School of Information Technology</p>
                    <p>Current GPAX : 3.25</p>
                  </div>
                </div>
                <div className="container-card">
                  <div
                    className="row"
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <h1 style={{ color: "#C7D36F" }}>Technical Skills</h1>
                    <i
                      className="fas fa-laptop-code"
                      style={{
                        color: "#C7D36F",
                        fontSize: "2rem",
                        marginLeft: "1rem",
                      }}
                    ></i>
                  </div>
                  <div className="card1">
                    <div className="row" style={{ paddingLeft: "20px" }}>
                      <h3 style={{ color: "#C7D36F", margin: "0px" }}>
                        Frontend
                      </h3>
                      <h3
                        style={{
                          marginLeft: "5px",
                          margin: "0px  0px 0px 5px",
                        }}
                      >
                        Development
                      </h3>
                    </div>
                    {/* <Skills id={"font"}></Skills> */}
                  </div>
                  <br />
                  <div className="card1">
                    <div className="row" style={{ paddingLeft: "20px" }}>
                      <h3 style={{ color: "#C7D36F", margin: "0px" }}>
                        Backend
                      </h3>
                      <h3
                        style={{
                          marginLeft: "2px",
                          margin: "0px  0px 0px 5px",
                        }}
                      >
                        Development
                      </h3>
                    </div>
                    {/* <Skills id={"back"}></Skills> */}
                  </div>
                  <br />
                  <div className="card1">
                    <div className="row" style={{ paddingLeft: "20px" }}>
                      <h3 style={{ color: "#C7D36F", margin: "0px" }}>
                        Tools
                      </h3>
                      <h3
                        style={{
                          marginLeft: "5px",
                          margin: "0px  0px 0px 5px",
                        }}
                      >
                        Development
                      </h3>
                    </div>
                    {/* <Skills id={"tools"} /> */}
                  </div>
                  <br />
                  <div className="card1">
                    <div className="row" style={{ paddingLeft: "20px" }}>
                      <h3 style={{ color: "#C7D36F", margin: "0px" }}>
                        Graphic
                      </h3>
                      <h3
                        style={{
                          marginLeft: "5px",
                          margin: "0px  0px 0px 5px",
                        }}
                      >
                        Skills
                      </h3>
                    </div>
                    {/* <Skills id={"design"} /> */}
                  </div>
                </div>
              </div>
            </div>
            <Footer></Footer>
          </div>
        </Layout>
      </div>
      <style jsx>{`
         .profilePic {
            border-radius: 50%;
            margin: 30px;
            width: 350px;
            height: auto;
          }
          @keyframes profile {
            0% {
              background-image: url(./images/1.jpg);
            }
            25% {
              background-image: url(./images/2.jpg);
            }
            50% {
              background-image: url(./images/3.jpg);
            }
            75% {
              background-image: url(./images/4.jpg);
            }
            100% {
              background-image: url(./images/1.jpg);
            }
          }
          .line {
            background-color: #C7D36F;
            width: 100%;
            height: 3px;
          }
          .row {
            display: flex;
            flex-direction: row;
          }
          .info {
            margin-left: -80px;
            display: flex;
            flex-direction: row;
          }
          .card {
            display: flex;
            justify-content: center;
            background: white;
            transition: 0.3s;
            width: 500px;
            padding: 50px;
            border-radius: 2vh;
            border: none;
            box-shadow: 3px 3px 5px 3px #ccc;
            padding: 0 10px 5px 30px;
            flex-direction: column;
          }
          .card1 {
            height: 100%;
            display: flex;
            background: white;
            transition: 0.3s;
            width: 500px;
            padding: 10px;
            border-radius: 2vh;
            border: none;
            box-shadow: 3px 3px 5px 3px #ccc;
            flex-direction: column;
            flex-wrap:wrap;
          }
          .motion {
            position: relative;
            animation: mymove 1s;
          }
          @keyframes mymove {
            from {
              top: 100px;
            }
            to {
              top: 0px;
            }
          }
          .container-card {
            display: flex;
            margin-left: 3%;
            align-items: flex-start;
            flex-direction: column;
          }
          .container {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: row;
          }
          .container1 {
            min-height: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: row;
          }
          .column-con {
            margin-top: 60px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .row-con {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
            flex-direction: row;
          }
          .typing {
            width: 550px;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
          }
          .text {
            font-size: 3.6rem;
            margin: 0px;
            padding: 0px;
          }
          @keyframes example {
            0% {
              opacity: 0%;
            }
            25% {
              opacity: 40%;
            }
            50% {
              opacity: 60%;
            }
            75% {
              opacity: 80%;
            }
            100% {
              opacity: 100%;
            }
          }
          @media only screen and (max-width: 1024px) {
            .typing {
              width: 300px;
              display: flex;
              justify-content: flex-start;
              align-items: flex-start;
            }
            .column-con {
              margin: 0px;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              flex-direction: column;
            }
            .info {
              margin-left: 0px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            .profilePic {
              // margin:30px;
              width: 350px;
              height: auto;
            }
            .text {
              text-align: center;
              font-size: 2rem;
            }
            .container {
              height: 100%;
              width: 100vw;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }
            .container1 {
              height: 100%;
              width: 100vw;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              flex-direction: column;
            }
            .line {
              background-color: #C7D36F;
              width: 100%;
              height: 3px;
            }
            .container-card {
              width: 95%;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              margin: 0px;
            }
            .card {
              display: flex;
              padding: 5px;
              justify-content: center;
              background: white;
              transition: 0.3s;
              width: 100%;
              border-radius: 2vh;
              border: none;
              box-shadow: 3px 3px 5px 3px #ccc;
              flex-direction: column;
            }
            p {
              padding: 0px;
              font-size: 0.8rem;
              margin: 5px;
              text-align: center;
            }
            .card1 {
              height: 90%;
              width: 100%;
              display: flex;
              justify-content: flex-start;
              background: white;
              transition: 0.3s;
              padding: 50px;
              border-radius: 2vh;
              border: none;
              box-shadow: 3px 3px 5px 3px #ccc;
              padding: 0 10px 5px 30px;
              flex-direction: column;
              padding: 0px;
            }
            .row {
              display: flex;
              margin-top: 10px;
              flex-direction: row;
            }
          }
      `}</style>
    </Fragment>
  );
};

export default About;