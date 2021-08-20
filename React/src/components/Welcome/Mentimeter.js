import React, { Fragment } from "react";

import { Link } from "react-router-dom";

import { Routes } from "../../Services/Routes/APP";

//component

function Mentimeter({ nextStep, backStep }) {
  // render

  return (
    <Fragment>
      <from className="sgt-welcome-goals text-center w-100">
        <p>Step 3 of 4</p>
        <h1 class="h3 mt-2 text-center">
          What are your main goals for using Mentimeter?
        </h1>
        <p class="mb-4">Select all that apply</p>

        <div className="container">
          <div className="col-md-7 m-auto">
            <div className="row">
              <div className="col-md-3">
                <input
                  class="checkbox-tools"
                  type="checkbox"
                  name="tools"
                  id="tool-4"
                />
                <label
                  class="for-checkbox-tools d-flex flex-column align-items-center justify-content-center"
                  for="tool-4"
                >
                  <svg
                    viewBox="0 0 48 48"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    height="48px"
                    width="48px"
                    class="mb-3"
                  >
                    <rect
                      fill="#B4CCE5"
                      x="19.31"
                      y="13.12"
                      width="12.84"
                      height="0.65"
                      transform="translate(0.91 28.5) rotate(-58.83)"
                    ></rect>
                    <rect
                      fill="#B4CCE5"
                      x="18.62"
                      y="2.03"
                      width="0.65"
                      height="17.62"
                      transform="translate(-2.74 8.34) rotate(-23.2)"
                    ></rect>
                    <rect
                      fill="#B4CCE5"
                      x="14.28"
                      y="8.48"
                      width="0.65"
                      height="16.29"
                      transform="translate(-5.49 25.9) rotate(-73.5)"
                    ></rect>
                    <rect
                      fill="#B4CCE5"
                      x="21.88"
                      y="15.52"
                      width="18.52"
                      height="0.65"
                      transform="translate(-3.51 11.34) rotate(-19.57)"
                    ></rect>
                    <circle
                      fill="#ffffff"
                      cx="22.5"
                      cy="18.89"
                      r="7.33"
                    ></circle>
                    <path
                      fill="#B4CCE5"
                      d="M22.5,26.54a7.65,7.65,0,1,1,7.65-7.65A7.66,7.66,0,0,1,22.5,26.54Zm0-14.65a7,7,0,1,0,7,7A7,7,0,0,0,22.5,11.89Z"
                    ></path>
                    <circle
                      fill="#ffffff"
                      cx="22.5"
                      cy="18.89"
                      r="4.68"
                    ></circle>
                    <path
                      fill="#B4CCE5"
                      d="M22.5,24.22a5.33,5.33,0,1,1,5.33-5.33A5.33,5.33,0,0,1,22.5,24.22Zm0-9.36a4,4,0,1,0,4,4A4,4,0,0,0,22.5,14.86Z"
                    ></path>
                    <circle
                      fill="#FF403D"
                      cx="29.06"
                      cy="7.95"
                      r="1.59"
                    ></circle>
                    <path
                      fill="#196CFF"
                      d="M39.86,15.27h0a2.64,2.64,0,0,1-2.29-4h0a2.64,2.64,0,0,1,4.58,0h0a2.64,2.64,0,0,1-2.29,4Z"
                    ></path>
                    <circle
                      fill="#6E54BD"
                      cx="6.94"
                      cy="14.17"
                      r="1.45"
                    ></circle>
                    <rect
                      fill="#00DB91"
                      x="12.72"
                      width="5.2"
                      height="5.2"
                      rx="2.6"
                    ></rect>
                    <rect
                      fill="#ffffff"
                      x="19.37"
                      y="17.93"
                      width="6.65"
                      height="18.72"
                    ></rect>
                    <path
                      fill="#969CF5"
                      d="M32.91,31.51A2.16,2.16,0,0,1,35,29.28H35a2.16,2.16,0,0,1,2.08,2.22c0,4,0,4.41,0,10.41A5.92,5.92,0,0,1,31.41,48H24.67a5.64,5.64,0,0,1-5-3.13l-6-11.56.63-.52a3,3,0,0,1,4.39.33l1.68,2.05V21.05a2.17,2.17,0,0,1,2.1-2.23h0a2.17,2.17,0,0,1,2.09,2.23V29.6a2.16,2.16,0,0,1,2.09-2.17h0a2.09,2.09,0,0,1,2.06,2.13v.69a2.1,2.1,0,0,1,2.06-2.14h0a2.11,2.11,0,0,1,2.06,2.14Z"
                    ></path>
                  </svg>
                  Engagement
                </label>
              </div>
              <div class="col-md-3">
                <input
                  class="checkbox-tools"
                  type="checkbox"
                  name="tools"
                  id="tool-5"
                />
                <label
                  class="for-checkbox-tools d-flex flex-column align-items-center justify-content-center"
                  for="tool-5"
                >
                  <svg
                    viewBox="0 0 48 48"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    height="48px"
                    width="48px"
                    class="mb-3"
                  >
                    <path
                      fill="#FFC738"
                      d="M30.6,48V0H29.21A18.09,18.09,0,0,0,11.12,18.09h0L6.86,24.18a2.31,2.31,0,0,0-.35,1.89h0a2.32,2.32,0,0,0,2.25,1.76h2.71v7.64A3.83,3.83,0,0,0,15.3,39.3h4.79V48Z"
                    ></path>
                    <circle
                      fill="#196CFF"
                      cx="30.77"
                      cy="20.05"
                      r="10.79"
                    ></circle>
                    <path
                      fill="#B4CCE5"
                      d="M38.12,18.3,36.93,18a6.14,6.14,0,0,0-.38-.92l.65-1a.46.46,0,0,0-.06-.58L35.3,13.68a.46.46,0,0,0-.58-.06l-1,.65a5.74,5.74,0,0,0-.92-.38l-.26-1.18a.45.45,0,0,0-.45-.37H29.46a.47.47,0,0,0-.45.37l-.25,1.18a5.74,5.74,0,0,0-.92.38l-1-.65a.45.45,0,0,0-.58.06L24.4,15.52a.47.47,0,0,0-.07.58l.66,1a6.14,6.14,0,0,0-.38.92l-1.19.26a.45.45,0,0,0-.36.45v2.61a.47.47,0,0,0,.36.45l1.19.25A5.74,5.74,0,0,0,25,23l-.66,1a.47.47,0,0,0,.07.58l1.84,1.85a.48.48,0,0,0,.58.06l1-.66a5.74,5.74,0,0,0,.92.38L29,27.4a.47.47,0,0,0,.45.36h2.61a.45.45,0,0,0,.45-.36l.26-1.19a5.74,5.74,0,0,0,.92-.38l1,.66a.48.48,0,0,0,.58-.06l1.84-1.85A.45.45,0,0,0,37.2,24l-.65-1a5.74,5.74,0,0,0,.38-.92l1.19-.25a.47.47,0,0,0,.36-.45V18.75A.45.45,0,0,0,38.12,18.3Zm-4.58,1.75a2.77,2.77,0,1,1-2.77-2.76A2.77,2.77,0,0,1,33.54,20.05Z"
                    ></path>
                  </svg>
                  Training or educating
                </label>
              </div>
              <div class="col-md-3">
                <input
                  class="checkbox-tools"
                  type="checkbox"
                  name="tools"
                  id="tool-6"
                />
                <label
                  class="for-checkbox-tools d-flex flex-column align-items-center justify-content-center"
                  for="tool-6"
                >
                  <svg
                    viewBox="0 0 48 48"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    height="48px"
                    width="48px"
                    class="mb-3"
                  >
                    <circle
                      fill="#FFC738"
                      cx="6.87"
                      cy="28.38"
                      r="6.87"
                    ></circle>
                    <path
                      fill="#252B36"
                      d="M4.73,32.71a2.15,2.15,0,1,1,4.29,0Z"
                    ></path>
                    <ellipse
                      fill="#252B36"
                      cx="8.71"
                      cy="26.07"
                      rx="1"
                      ry="1.28"
                    ></ellipse>
                    <ellipse
                      fill="#252B36"
                      cx="5.03"
                      cy="26.07"
                      rx="1"
                      ry="1.28"
                    ></ellipse>
                    <circle
                      fill="#FFC738"
                      cx="41.13"
                      cy="28.38"
                      r="6.87"
                    ></circle>
                    <path
                      fill="#252B36"
                      d="M43.27,30.56a2.15,2.15,0,1,1-4.29,0Z"
                    ></path>
                    <ellipse
                      fill="#252B36"
                      cx="42.97"
                      cy="26.07"
                      rx="1"
                      ry="1.28"
                    ></ellipse>
                    <ellipse
                      fill="#252B36"
                      cx="39.29"
                      cy="26.07"
                      rx="1"
                      ry="1.28"
                    ></ellipse>
                    <circle fill="#FFC738" cx="24" cy="28.38" r="6.87"></circle>
                    <ellipse
                      fill="#252B36"
                      cx="25.84"
                      cy="26.07"
                      rx="1"
                      ry="1.28"
                    ></ellipse>
                    <ellipse
                      fill="#252B36"
                      cx="22.16"
                      cy="26.07"
                      rx="1"
                      ry="1.28"
                    ></ellipse>
                    <rect
                      fill="#252B36"
                      x="21.53"
                      y="30.95"
                      width="4.84"
                      height="1.36"
                    ></rect>
                    <path
                      fill="#B4CCE5"
                      d="M34.08,14.46a.26.26,0,0,0-.22-.17l-1.37-.13-.55-1.27a.25.25,0,0,0-.46,0l-.54,1.27-1.37.13a.25.25,0,0,0-.22.17.27.27,0,0,0,.07.27l1,.91L30.15,17a.26.26,0,0,0,.1.26.3.3,0,0,0,.15.05.22.22,0,0,0,.13,0l1.18-.71,1.19.71a.25.25,0,0,0,.37-.27L33,15.64l1-.91A.25.25,0,0,0,34.08,14.46Z"
                    ></path>
                    <path
                      fill="#B4CCE5"
                      d="M26.36,14.46a.25.25,0,0,0-.21-.17l-1.37-.13-.55-1.27a.25.25,0,0,0-.46,0l-.54,1.27-1.38.13a.25.25,0,0,0-.21.17.23.23,0,0,0,.07.27l1,.91L22.44,17a.26.26,0,0,0,.1.26.25.25,0,0,0,.15.05.22.22,0,0,0,.13,0L24,16.55l1.18.71a.25.25,0,0,0,.38-.27l-.31-1.35,1-.91A.23.23,0,0,0,26.36,14.46Z"
                    ></path>
                    <path
                      fill="#B4CCE5"
                      d="M18.65,14.46a.25.25,0,0,0-.22-.17l-1.37-.13-.54-1.27a.25.25,0,0,0-.46,0l-.55,1.27-1.37.13a.26.26,0,0,0-.22.17.25.25,0,0,0,.08.27l1,.91L14.73,17a.24.24,0,0,0,.1.26.24.24,0,0,0,.14.05.2.2,0,0,0,.13,0l1.19-.71,1.18.71a.25.25,0,0,0,.38-.27l-.31-1.35,1-.91A.27.27,0,0,0,18.65,14.46Z"
                    ></path>
                  </svg>
                  Insights and feedback
                </label>
              </div>
              <div class="col-md-3">
                <input
                  class="checkbox-tools"
                  type="checkbox"
                  name="tools"
                  id="tool-7"
                />
                <label
                  class="for-checkbox-tools d-flex flex-column align-items-center justify-content-center"
                  for="tool-7"
                >
                  <svg
                    viewBox="0 0 48 48"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    height="48px"
                    width="48px"
                    class="mb-3"
                  >
                    <path
                      fill="#CC660A"
                      d="M22.89,0h0a4.72,4.72,0,0,1,4.72,4.72V48a0,0,0,0,1,0,0H22.89a0,0,0,0,1,0,0V0A0,0,0,0,1,22.89,0Z"
                    ></path>
                    <polygon
                      fill="#B4CCE5"
                      points="42.99 9.76 10.19 12.32 9.75 6.67 42.6 4.29 45.72 6.64 42.99 9.76"
                    ></polygon>
                    <polygon
                      fill="#B4CCE5"
                      points="37.52 22.63 10.18 23.71 10.52 29.36 37.91 27.71 39.21 24.9 37.52 22.63"
                    ></polygon>
                    <polygon
                      fill="#B4CCE5"
                      points="38.14 20.22 4.74 20.22 2.28 17.39 4.74 14.56 38.14 14.56 38.14 20.22"
                    ></polygon>
                  </svg>
                  Not sure yet
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="container mt-4">
          <div class="col-md-7 m-auto">
            <div class="row">
              <div class="col-4 d-flex align-items-center justify-content-start">
                <Link onClick={backStep} id="sgt-wel-back">
                  <i class="fas fa-arrow-left"></i>&nbsp; Back
                </Link>
              </div>
              <div class="col-4">
                <Link
                  class="btn btn-primary"
                  onClick={nextStep}
                  id="sgt-save-goals"
                >
                  Save Selection
                </Link>
              </div>
              <div class="col-4 d-flex align-items-center justify-content-end">
                <Link to={Routes?.presentation}>
                  Skip &nbsp;<i class="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </from>
    </Fragment>
  );
}

export default Mentimeter;
