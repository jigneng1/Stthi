import React, { Fragment, useState } from "react";
import Footer from "../../components/Footer";
import Layout from "../../components/Layout";
import { Modal, Box} from "@mui/material";
export default () => {
  const [modal, setModal] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    boxShadow: 24,
  };
  return (
    <Fragment>
      <Layout page="experiences">
        <div className="container">
          <div className="info">
            <div>
              <img src="/assets/award/playground.png" alt="sit playground" className="img1" />
            </div>
            <div className="content">
              <h1>Playground</h1>
              <p>
                Web application of cargo services to let customer can keep track
                of their orders. Also let staff to update the status of products
                by scan barcode of traking number. I am a freelance full stack
                developer of this project. My responsibility is gathering
                information and requirement from KKP cargo company, design the
                database, frontend, and backend.
              </p>
              <h2>Technology stack</h2>
              <ul>
                <li>Front-End Framework: NextJS</li>
                <li>Back-End Framework: NodeJS (Express)</li>
                <li>Database: MySQL</li>
                <li>Version Control: Github</li>
                <li>Host: Azure</li>
              </ul>
              <p></p>
            </div>
          </div>
          <div className="gallery">
            <h1>Gallery</h1>
            <hr style={{ width: "80vw" ,margin:"50px 0px"}} />
            <div>
              <img
                id="myImg"
                src="/assets/award/playground.png"
                alt="Snow"
                onClick={() => setModal(!modal)}
                className="img1"
              />
              <Modal
                open={modal}
                onClose={() => setModal(!modal)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <img
                    id="myImg"
                    src="/assets/award/playground.png"
                    alt="Snow"
                    onClick={() => setModal(!modal)}
                    className="img2"
                  />
                </Box>
              </Modal>
            </div>
          </div>
        </div>
        <Footer />
      </Layout>
      <style jsx>{`
        .info{
            display:flex;
            justify-content:center;
            align-items:center;
            flex-wrap:wrap;
        }
        .img1{
            width:100%;
            max-width:450px;
            
        }
        .img2{
            width:100%;
            max-width:80vh;

        }
        .content{
            width: 50%;
            height: auto;
            padding: 50px;

        }
        .container{
            height: 100%;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin:10px;
        }
        #myImg {
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s;
          }
        #myImg:hover {opacity: 0.7;}
        h1,h2{
            color: #c8d26f;
        }
        
      
        @media only screen and (max-width: 1024px) {
            .content{
                width: 90%;
                height: auto;
                padding: 0px;
            }
            .gallery{
                width: 90%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            h1,h2{
                text-align: center;
            }
            
            .container{
                height: 100%;
                width: 100vw;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                margin:50px 0px;
            }
      `}</style>
    </Fragment>
  );
};
