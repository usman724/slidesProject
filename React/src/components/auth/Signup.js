import React, { Fragment } from "react";

const Signup = () => {
  return (
    <Fragment>
      <header className="log-sign-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <div className="logo d-flex align-items-center justify-content-start">
                <h5>LOGO</h5>
              </div>
            </div>
            <div className="col-md-10 d-flex align-items-center justify-content-end"></div>
          </div>
        </div>
      </header>
      <div className="login-page">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="logreg-forms h-100 d-flex align-items-start flex-column justify-content-center mb-5 mb-md-0">
                {/* <!-- <a><img className="img-fluid w-25" src="images/softgates-technologies-logo.png"></a> -->
                <!-- <a><h1>LOGO</h1></a> */}
                <h1
                  className="h3 mb-2 mt-2 font-weight-normal"
                  style={{ textalign: "center" }}
                >
                  Welcome back!
                </h1>
                {/* <p className="text-center">Log in to your Interactive APP account</p> --> */}
                <img className="img-fluid" src=" images/login-reg-image.png" />
              </div>
            </div>
            <div className="col-md-6">
              <div id="logreg-forms" className="logreg-forms">
                <form className="form-signin">
                  <h1 className="h3 mb-2 mt-2 text-center"> Welcome back!</h1>
                  <p className="text-center">
                    Log in to your Interactive APP account
                  </p>

                  <div className="social-login mt-4">
                    <a
                      href="https://www.facebook.com/"
                      className="btn facebook-btn social-btn d-flex align-items-center"
                      type="button"
                    >
                      <span>
                        <i className="fab fa-facebook-f"></i> Sign up with
                        Facebook
                      </span>{" "}
                    </a>
                    <a
                      href=""
                      className="btn google-btn social-btn d-flex align-items-center"
                      type="button"
                    >
                      <svg
                        className="mx-md-1"
                        width="20px"
                        height="20px"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        // xmlns:xlink='http://www.w3.org/1999/xlink'
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        //  style={{'enable-background:new 0 0 512 512;'}}
                        //xml:space='preserve'
                      >
                        <path
                          //  style='fill:#FBBB00;'
                          d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
                      c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
                      C103.821,274.792,107.225,292.797,113.47,309.408z"
                        />
                        <path
                          //  style='fill:#518EF8;'
                          d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
                      c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
                      c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                        />
                        <path
                          //  style='fill:#28B446;'
                          d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
                      c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
                      c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                        />
                        <path
                          // style='fill:#F14336;'
                          d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
                      c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
                      C318.115,0,375.068,22.126,419.404,58.936z"
                        />
                      </svg>
                      <span>Sign up with Google</span>
                    </a>
                  </div>
                  <p className="text-center mb-1"> OR </p>
                  <div className="form-outline mb-3">
                    <input
                      type="text"
                      id="form5"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Email address</label>
                  </div>
                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      id="form6"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Password</label>
                  </div>
                  <div className="container ">
                    <div className="row mb-4">
                      <div className="col d-flex align-items-center justify-content-start">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="form1Example3"
                          />
                          <label className="form-check-label">
                            {" "}
                            Remember me{" "}
                          </label>
                        </div>
                      </div>

                      <div className="col d-flex justify-content-end">
                        <a className="text-primary" href="#!" id="forgot_pswd">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-column flex-md-row justify-content-between">
                    <button className="btn btn-primary" type="submit">
                      Sign in
                    </button>
                    <button
                      className="btn btn-light"
                      type="button"
                      id="btn-signup"
                    >
                      Create Account
                    </button>
                  </div>
                </form>

                <form action="#" className="form-reset">
                  <h1 className="h3 mb-4 mt-2 text-center">Reset password</h1>
                  <div className="form-outline mb-3">
                    <input
                      type="text"
                      id="exampleInputEmail1"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Email address</label>
                  </div>
                  <button className="btn btn-primary btn-block" type="submit">
                    Reset Password
                  </button>
                  <a
                    className="text-primary mt-4 text-end"
                    href="#"
                    id="cancel_reset"
                  >
                    {" "}
                    Log in
                  </a>
                </form>

                <form action="#" className="form-signup">
                  <h1 className="h3 mb-2 mt-2 text-center">
                    Create a free account
                  </h1>
                  <div className="social-login mt-4">
                    <a
                      href="https://www.facebook.com/"
                      className="btn facebook-btn social-btn d-flex align-items-center"
                      type="button"
                    >
                      <span>
                        <i className="fab fa-facebook-f"></i> Sign up with
                        Facebook
                      </span>{" "}
                    </a>
                    <a
                      href=""
                      className="btn google-btn social-btn d-flex align-items-center"
                      type="button"
                    >
                      <svg
                        className="mx-md-1"
                        width="20px"
                        height="20px"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 512 512"
                        //  style='enable-background:new 0 0 512 512;'
                        xmlspace="preserve"
                      >
                        <path
                          style={{ fill: "#FBBB00" }}
                          d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
                          c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
                          C103.821,274.792,107.225,292.797,113.47,309.408z"
                        />
                        <path
                          style={{ fill: "#518EF8" }}
                          d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
                          c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
                          c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                        />
                        <path
                          style={{ fill: "#28B446" }}
                          d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
                          c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
                          c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                        />
                        <path
                          style={{ fill: "#F14336" }}
                          d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
                          c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
                          C318.115,0,375.068,22.126,419.404,58.936z"
                        />
                      </svg>
                      <span>Sign up with Google</span>
                    </a>
                  </div>

                  <p className="text-center">OR</p>
                  <div className="form-outline mb-3">
                    <input
                      type="text"
                      id="form1"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Full Name</label>
                  </div>
                  <div className="form-outline mb-3">
                    <input
                      type="text"
                      id="form2"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Email address</label>
                  </div>
                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      id="form3"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Password</label>
                  </div>
                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      id="form4"
                      className="form-control"
                      required
                    />
                    <label className="form-label">Confirm Password</label>
                  </div>
                  <div className="input-group">
                    <button
                      className="btn btn-primary btn-block submit"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </div>

                  <div className="text-center">
                    Already have an account?{" "}
                    <span>
                      <a
                        className="text-primary mt-4 d-inline-block"
                        href="#"
                        id="cancel_signup"
                      >
                        {" "}
                        Log in
                      </a>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Signup;
