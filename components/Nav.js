import { Fragment } from "react";
import Link from "next/link";

const Nav = ({ page }) => {
  const items = [
    { label: "Home", link: "/", page: "home" },
    { label: "About", link: "/about", page: "about" },
    { label: "Experiences", link: "/experiences", page: "experiences" },
    { label: "Contact", link: "/contact", page: "contact" },
  ];
  return (
    <Fragment>
      <div className="container">
        {items.map((item) => {
          return (
            <div
              className={`item ${item.page === page ? "active" : "nonactive"}`}
              key={item.label}
              style={{ marginLeft: "30px", marginTop: "10px" }}
              id="fontNav"
            >
              <Link href={item.link}>{item.label}</Link>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .nonactive {
        }
        .nonactive:hover {
          border-bottom: 2px solid #C7D36F;
          transition: 0.1s;
          opacity: 0.8;
        }
        .active {
          font-weight: 600;
          transition: 1s;
          color: #C7D36F;
          border-bottom: 2px solid #C7D36F;
        }
        #fontNav {
          font-size: 100%;
        }
        .container {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
          margin-right: 20px;
        }
        @media only screen and (max-width: 1024px) {
          .container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
          }
          #fontNav {
            font-size: 100%;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Nav;