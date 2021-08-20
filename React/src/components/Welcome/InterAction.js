import { Fragment } from "react";
import { Link } from "react-router-dom";

import { Routes } from "../../Services/Routes/APP";

const InterAction = ({ nextStep }) => {
  const formHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <form
        className="sgt-welcome-use text-center w-100"
        onSubmit={formHandler}
      >
        <p>Step 2 of 4</p>
        <h1 class="h3 mb-4 mt-2 text-center">
          Where will you use interactive APP?
        </h1>
        <div className="container">
          <div className="col-md-7 m-auto">
            <div className="row">
              <div className="col-md-4">
                <input
                  className="checkbox-tools"
                  type="radio"
                  name="tools"
                  id="tool-1"
                />
                <label
                  className="for-checkbox-tools d-flex flex-column align-items-center justify-content-center"
                  for="tool-1"
                >
                  <svg
                    viewBox="0 0 48 48"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    height="48px"
                    width="48px"
                    className="mb-3"
                  >
                    <ellipse
                      fill="#FFC738"
                      cx="24.39"
                      cy="17.88"
                      rx="17.51"
                      ry="17.61"
                    ></ellipse>
                    <path
                      fill="#252B36"
                      d="M29.85,23.47a5.46,5.46,0,1,1-10.91,0Z"
                    ></path>
                    <ellipse
                      fill="#252B36"
                      cx="29.08"
                      cy="19.25"
                      rx="2.55"
                      ry="3.28"
                    ></ellipse>
                    <ellipse
                      fill="#252B36"
                      cx="19.7"
                      cy="19.25"
                      rx="2.55"
                      ry="3.28"
                    ></ellipse>
                    <rect
                      fill="#B4CCE5"
                      y="20.15"
                      width="48"
                      height="27.58"
                      rx="3.94"
                    ></rect>
                    <ellipse
                      fill="#196CFF"
                      cx="24"
                      cy="33.94"
                      rx="3.83"
                      ry="3.85"
                    ></ellipse>
                  </svg>
                  Work
                </label>
              </div>
              <div className="col-md-4">
                <input
                  className="checkbox-tools"
                  type="radio"
                  name="tools"
                  id="tool-2"
                />
                <label
                  className="for-checkbox-tools d-flex flex-column align-items-center justify-content-center"
                  for="tool-2"
                >
                  <svg
                    viewBox="0 0 48 48"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    height="48px"
                    width="48px"
                    className="mb-3"
                  >
                    <ellipse
                      fill="#0D6B45"
                      cx="24"
                      cy="33.46"
                      rx="14.58"
                      ry="4.65"
                    ></ellipse>
                    <rect
                      fill="#0D6B45"
                      x="9.42"
                      y="16.4"
                      width="29.16"
                      height="17.06"
                    ></rect>
                    <circle
                      fill="#0D6B45"
                      cx="42.92"
                      cy="31.6"
                      r="1.24"
                    ></circle>
                    <line
                      fill="none"
                      stroke="#0D6B45"
                      stroke-miterlimit="10"
                      stroke-width="3px"
                      x1="42.92"
                      y1="31.6"
                      x2="42.92"
                      y2="19.99"
                    ></line>
                    <path
                      fill="#00DB91"
                      d="M47.52,20.7,24.29,30a.83.83,0,0,1-.58,0L.48,20.7a.77.77,0,0,1,0-1.43L23.71,9.94a.83.83,0,0,1,.58,0l23.23,9.33A.77.77,0,0,1,47.52,20.7Z"
                    ></path>
                  </svg>
                  square
                </label>
              </div>
              <div className="col-md-4">
                <input
                  className="checkbox-tools"
                  type="radio"
                  name="tools"
                  id="tool-3"
                />
                <label
                  className="for-checkbox-tools d-flex flex-column align-items-center justify-content-center"
                  for="tool-3"
                >
                  <svg
                    viewBox="0 0 48 48"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    height="48px"
                    width="48px"
                    className="mb-3"
                  >
                    <circle fill="#FFB9D0" cx="6.69" cy="24" r="6.69"></circle>
                    <circle fill="#FF80AB" cx="24" cy="24" r="6.69"></circle>
                    <circle fill="#FF403D" cx="41.31" cy="24" r="6.69"></circle>
                  </svg>
                  Other
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="col-md-7 m-auto">
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4">
                <Link
                  className="btn btn-primary"
                  OnClick={nextStep}
                  id="sgt-save-use"
                >
                  Save Selection
                </Link>
              </div>
              <div className="col-4 d-flex align-items-center justify-content-end">
                <Link to={Routes?.presentation}>
                  Skip &nbsp;<i class="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default InterAction;
