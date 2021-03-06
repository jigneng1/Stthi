import { Fragment } from "react";

const Typing = ({}) => {
  return (
    <Fragment>
      <p className="line anim-typewriter">Sitiporn Wimolpunyakul</p>

      <style jsx>{`
        .line {
          color: "#C7D36F";
          width: 2em;
          margin: 0px;
          border-right: 2px solid rgba(255, 255, 255, 0.75);
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
        }
        .anim-typewriter {
          animation: typewriter 2s steps(40) 1s 1 normal both,
            blinkTextCursor 500ms steps(40) infinite normal;
        }
        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 11em;
          }
        }
        @keyframes blinkTextCursor {
          from {
            border-right-color: black;
          }
          to {
            border-right-color: transparent;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Typing;