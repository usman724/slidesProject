import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "./layout/Header";

const NoPresentation = () => {
  return (
    <Fragment>
      <Header />
      <section className="noPresentations">
        <div className="container h-100">
          <div className="d-flex align-items-center justify-content-center flex-column h-100">
            <div className="noPresentations-video">
              {/* <!-- <video width="100%" height="100%">
                            <source src="https://static.mentimeter.com/static/motion/noPresentations.h264.mp4" type="mp4">
                        </video> --> */}
              <video width="100" height="100" autoplay muted>
                <source
                  src="https://static.mentimeter.com/static/motion/noPresentations.h264.mp4"
                  type="mp4"
                />
                <source src="" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h4>No Presentations here yet!</h4>
            <p>
              Start creating interactive and engaging presentations to include
              your audience.
            </p>
            <div className="noPresentations-buttons d-flex align-items-center justify-content-between flex-md-row flex-column">
              <Link
                to="/edit-new-first"
                className="btn btn-primary mb-3 mb-md-0"
              >
                + No presentation
              </Link>
              <button className="btn">Simple presentation builder</button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default NoPresentation;
