import React, { Fragment } from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
function Contact() {
  return (
    <Fragment>
      <Layout page="contact">
        <div className="container">
            <a href="https://www.facebook.com/jigneng1/" target="_blank" rel="noreferrer"><img src="/assets/facebook.svg" alt="facebook" /></a>
            <a href="https://www.instagram.com/n.neng_" target="_blank" rel="noreferrer"><img src="/assets/Instagram.svg" alt="instragram" /></a>
            <a href="https://github.com/jigneng1" target="_blank" rel="noreferrer"><img src="/assets/Github-Dark.svg" alt="github" /></a>
            <a href="https://www.linkedin.com/in/sitiporn-wimolpunyakul/" target="_blank" rel="noreferrer"><img src="/assets/LinkedIn.svg" alt="linkin" /></a>
            <a href="mailto:jigneng1@gmail.com"><img src="/assets/Mail.svg" alt="mail" /></a>
        </div>
      </Layout>
      <Footer />
      <style jsx>{`
        .container {
          height: 85vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        img {
          width: 80px;
          height: 80px;
          margin: 0px 50px;
          transition: transform .2s;
        }
        img:hover {
            transform: scale(1.5);
        }
        @media only screen and (max-width: 1024px) {
            .container {
                height: 85vh;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            img {
                width: 50px;
                height: 50px;
                margin: 15px 0px;
            }
        }
      `}</style>
    </Fragment>
  );
}
export default Contact;
