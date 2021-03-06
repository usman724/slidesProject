import React, { Fragment } from "react";

const EditNewFirst = () => {
  return (
    <Fragment>
      <header class="sgt-inner-header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-1 d-flex align-items-center">
              <a href="">Logo</a>
            </div>
            <div class="col-md-7 d-flex align-items-center">
              <a>My Presentations</a> <span> &nbsp;/&nbsp; </span>{" "}
              <input
                name="title"
                type="text"
                class="edit-presentation-title"
                value="My First Presentation"
              />
            </div>
            <div class="col-md-4 d-flex align-items-center justify-content-between">
              <div class="sgt-slide-status">
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  height="24px"
                  width="24px"
                  class="r-svg"
                >
                  <g color="#00DB91">
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </g>
                  </g>
                </svg>
                <span>Saved</span>
              </div>
              <div class="sgt-hvl"></div>
              {/* <!-- <button class="btn"> -->
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" height="24px" width="24px" class="r-svg"><g color="rgba(16, 24, 52, 0.75)"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></g></g></svg>
                        <!-- </button> --> */}
              <div class="sgt-hvl"></div>
              <button
                class="btn btn-outline-primary"
                data-mdb-toggle="modal"
                data-mdb-target="#shareModal"
              >
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  height="16px"
                  width="16px"
                  class="r-svg"
                >
                  <g color="inherit">
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="18" cy="5" r="3"></circle>
                      <circle cx="6" cy="12" r="3"></circle>
                      <circle cx="18" cy="19" r="3"></circle>
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                    </g>
                  </g>
                </svg>
                &nbsp;Share
              </button>

              <div
                class="modal fade"
                id="shareModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered modal-lg">
                  <div class="modal-content pb-2">
                    <div class="modal-header border-0">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Share
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-mdb-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <ul
                        class="nav nav-tabs nav-fill mb-3"
                        id="ex1"
                        role="tablist"
                      >
                        <li class="nav-item" role="presentation">
                          <a
                            class="nav-link active"
                            id="ex1-tab-1"
                            data-mdb-toggle="tab"
                            href="#ex1-tabs-1"
                            role="tab"
                            aria-controls="ex2-tabs-1"
                            aria-selected="true"
                          >
                            Participation
                          </a>
                        </li>
                        <li class="nav-item" role="presentation">
                          <a
                            class="nav-link"
                            id="ex1-tab-2"
                            data-mdb-toggle="tab"
                            href="#ex1-tabs-2"
                            role="tab"
                            aria-controls="ex2-tabs-2"
                            aria-selected="false"
                          >
                            Presentation sharing
                          </a>
                        </li>
                        {/* <!-- <li class="nav-item" role="presentation">
                                                <a class="nav-link" id="ex1-tab-3" data-mdb-toggle="tab" href="#ex1-tabs-3" role="tab" aria-controls="ex2-tabs-3" aria-selected="false">Customize</a>
                                            </li> --> */}
                      </ul>

                      {/* <!-- Tabs navs -->
                                        
                                        <!-- Tabs content --> */}
                      <div class="tab-content" id="ex1-content">
                        <div
                          class="tab-pane fade show active"
                          id="ex1-tabs-1"
                          role="tabpanel"
                          aria-labelledby="ex1-tab-1"
                        ></div>
                        <div
                          class="tab-pane fade"
                          id="ex1-tabs-1"
                          role="tabpanel"
                          aria-labelledby="ex1-tab-1"
                        ></div>
                      </div>
                    </div>
                    <div class="modal-footer border-0">
                      <button
                        type="button"
                        class="btn btn-light"
                        data-mdb-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button type="button" class="btn btn-primary">
                        <svg
                          viewBox="0 0 24 24"
                          preserveAspectRatio="xMidYMid meet"
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          height="16px"
                          width="16px"
                          class="r-svg"
                        >
                          <g color="currentColor">
                            <g
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </g>
                          </g>
                        </svg>
                        &nbsp; Create Folder
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <button class="btn btn-primary">
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  height="16px"
                  width="16px"
                  class="r-svg"
                >
                  <g color="currentColor">
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </g>
                  </g>
                </svg>
                &nbsp;Present
              </button>
            </div>
          </div>
        </div>
      </header>
      <section class="sgt-settings-section">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 d-flex p-0">
              <button class="btn btn-primary">
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  height="16px"
                  width="16px"
                  class="r-svg"
                >
                  <g color="currentColor">
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </g>
                  </g>
                </svg>
                &nbsp; Add slide
              </button>
              <button class="btn btn-light mx-3">
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  height="16px"
                  width="16px"
                  class="r-svg"
                >
                  <g color="currentColor">
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="17 8 12 3 7 8"></polyline>
                      <line x1="12" y1="3" x2="12" y2="15"></line>
                    </g>
                  </g>
                </svg>
                &nbsp; Import
              </button>
              <button
                class="btn"
                data-mdb-toggle="modal"
                data-mdb-target="#exampleModal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-folder"
                  viewBox="0 0 16 16"
                >
                  <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z" />
                </svg>
              </button>

              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content pb-2">
                    <div class="modal-header border-0">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Create New Folder
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-mdb-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div class="form-group mb-0">
                        <input
                          type="text"
                          class="form-control"
                          maxlength="150"
                        />
                      </div>
                    </div>
                    <div class="modal-footer border-0">
                      <button
                        type="button"
                        class="btn btn-light"
                        data-mdb-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button type="button" class="btn btn-primary">
                        <svg
                          viewBox="0 0 24 24"
                          preserveAspectRatio="xMidYMid meet"
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          height="16px"
                          width="16px"
                          class="r-svg"
                        >
                          <g color="currentColor">
                            <g
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </g>
                          </g>
                        </svg>
                        &nbsp; Create Folder
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 d-flex justify-content-end p-0">
              <button class="btn sgt-btn-outline-light">
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  height="16px"
                  width="16px"
                  class="r-svg"
                >
                  <g color="inherit">
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M19 7.9c0 2.1-.8 3.9-2.3 5.2L15.5 16h-7l-1.2-2.9C5.8 11.9 5 10.1 5 7.9 5 4.1 8.1 1 12 1s7 3.1 7 6.9zM14.8 19.5H9.2M14.2 23H9.7"></path>
                    </g>
                  </g>
                </svg>
                &nbsp;Examples
              </button>
              <button class="btn sgt-btn-outline-light mx-3">
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  height="16px"
                  width="16px"
                  class="r-svg"
                >
                  <g color="inherit">
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m18.8279 7.27273c1.7131 2.27272 3.1721 4.57027 3.1721 8.11567 0 3.6364-2.8115 6.6116-6.418 6.6116-3.6066 0-6.582-3.1818-6.582-6.8182 0-3.5454 1.5328-5.63635 3.3361-7.90907 1.4426-2 3.2459-5.27273 3.2459-5.27273s1.7131 3.27273 3.2459 5.27273z"></path>
                      <path d="m7.04167 19.85c-2.75 0-5.04167-2.5667-5.04167-5.3167 0-2.5666 1.46667-3.6666 2.84167-5.31663 1.1-1.46667 2.2-4.21667 2.2-4.21667l1.1 2.10833"></path>
                    </g>
                  </g>
                </svg>
                &nbsp;Themes
              </button>
              <button class="btn sgt-btn-outline-light">
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  height="16px"
                  width="16px"
                  class="r-svg"
                >
                  <g color="inherit">
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </g>
                  </g>
                </svg>
                &nbsp;Settings
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="sgt-edit-slide-section">
        <div class="container-fluid">
          <div class="row">
            <div class="col-2 p-0">
              <div class="sgt-slide-overview">
                <ul id="sortable4" class="list-group list-unstyled w-100">
                  <li class="list-group-item active">
                    <div class="sgt-slide-thumbnail">
                      <div class="sgt-st-options">
                        <p>1</p>
                        <div class="sgt-on-hover">
                          <svg
                            viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMid meet"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            height="16px"
                            width="16px"
                            class="r-svg"
                          >
                            <g color="rgb(183, 186, 194)">
                              <g
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <circle r="1" cx="7.5" cy="2.5"></circle>
                                <circle r="1" cx="16.5" cy="2.5"></circle>
                                <circle r="1" cx="7.5" cy="12"></circle>
                                <circle r="1" cx="16.5" cy="12"></circle>
                                <circle r="1" cx="7.5" cy="21.5"></circle>
                                <circle r="1" cx="16.5" cy="21.5"></circle>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <a class="sgt-on-hover">
                          <svg
                            viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMid meet"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            height="20px"
                            width="20px"
                            class="r-svg"
                          >
                            <g color="#101834">
                              <g
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </g>
                            </g>
                          </svg>
                        </a>
                      </div>
                      <div class="sgt-thumbnail"></div>
                    </div>
                  </li>
                  <li class="list-group-item">
                    <div class="sgt-slide-thumbnail">
                      <div class="sgt-st-options">
                        <p>2</p>
                        <div class="sgt-on-hover">
                          <svg
                            viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMid meet"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            height="16px"
                            width="16px"
                            class="r-svg"
                          >
                            <g color="rgb(183, 186, 194)">
                              <g
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <circle r="1" cx="7.5" cy="2.5"></circle>
                                <circle r="1" cx="16.5" cy="2.5"></circle>
                                <circle r="1" cx="7.5" cy="12"></circle>
                                <circle r="1" cx="16.5" cy="12"></circle>
                                <circle r="1" cx="7.5" cy="21.5"></circle>
                                <circle r="1" cx="16.5" cy="21.5"></circle>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <a class="sgt-on-hover">
                          <svg
                            viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMid meet"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            height="20px"
                            width="20px"
                            class="r-svg"
                          >
                            <g color="#101834">
                              <g
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </g>
                            </g>
                          </svg>
                        </a>
                      </div>
                      <div class="sgt-thumbnail"></div>
                    </div>
                  </li>
                </ul>
                <div class="sgt-slide-overview-home">
                  <a href="">
                    <svg
                      viewBox="0 0 24 24"
                      preserveAspectRatio="xMidYMid meet"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      height="16px"
                      width="16px"
                      class="r-svg"
                    >
                      <g color="#196CFF">
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </g>
                      </g>
                    </svg>
                    &nbsp;My Presentations
                  </a>
                </div>
              </div>
            </div>
            <div class="col-6" id="edit-canvas">
              <div class="sgt-es-mid-section">
                <div class="sgt-edit-slide-canvas"></div>
              </div>
            </div>
            <div class="col-4 p-0 position-relative" id="mySidenav">
              <div class="toolsDrawer">
                <i class="fas fa-chevron-right"></i>
              </div>
              <div class="sgt-slide-tool-options">
                {/* <!-- Tabs navs --> */}
                <ul class="nav nav-tabs nav-fill mb-3" id="ex1" role="tablist">
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link active"
                      id="ex2-tab-1"
                      data-mdb-toggle="tab"
                      href="#ex2-tabs-1"
                      role="tab"
                      aria-controls="ex2-tabs-1"
                      aria-selected="true"
                    >
                      Type
                    </a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link"
                      id="ex2-tab-2"
                      data-mdb-toggle="tab"
                      href="#ex2-tabs-2"
                      role="tab"
                      aria-controls="ex2-tabs-2"
                      aria-selected="false"
                    >
                      Content
                    </a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link"
                      id="ex2-tab-3"
                      data-mdb-toggle="tab"
                      href="#ex2-tabs-3"
                      role="tab"
                      aria-controls="ex2-tabs-3"
                      aria-selected="false"
                    >
                      Customize
                    </a>
                  </li>
                </ul>

                {/* <!-- Tabs navs -->
                            
                            <!-- Tabs content --> */}
                <div class="tab-content" id="ex2-content">
                  <div
                    class="tab-pane fade show active"
                    id="ex2-tabs-1"
                    role="tabpanel"
                    aria-labelledby="ex2-tab-1"
                  >
                    <div class="sgt-st-row">
                      <div class="container-fluid p-0">
                        <h5 class="sgt-st-title">Popular question types</h5>
                        <div class="row">
                          <div class="col-4">
                            <div class="sgt-st-list">
                              <svg
                                viewBox="0 0 48 48"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                height="32px"
                                width="32px"
                                class="r-svg"
                              >
                                <title>Bar Chart Icon</title>
                                <rect
                                  x="32.73"
                                  y="17.04"
                                  width="11.4"
                                  height="25.25"
                                  fill="rgb(231, 232, 235)"
                                ></rect>
                                <rect
                                  x="3.87"
                                  y="26.22"
                                  width="11.4"
                                  height="16.06"
                                  fill="rgb(64, 70, 93)"
                                ></rect>
                                <rect
                                  x="18.3"
                                  y="4.31"
                                  width="11.4"
                                  height="37.97"
                                  fill="rgb(183, 186, 194)"
                                ></rect>
                                <rect
                                  y="42.28"
                                  width="48"
                                  height=".99"
                                  fill="#000000"
                                ></rect>
                              </svg>
                              Multiple Choice
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="sgt-st-list">
                              <svg
                                viewBox="0 0 48 48"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                height="32px"
                                width="32px"
                                class="r-svg"
                              >
                                <title>WordCloud Icon</title>
                                <path
                                  fill="rgb(64, 70, 93)"
                                  d="M37 18.71a9.57 9.57 0 10-16.95-8.89A7.37 7.37 0 009.5 16.46a7.53 7.53 0 00.4 2.39A12 12 0 0012 42.6h24a12 12 0 001-23.89z"
                                ></path>
                                <path
                                  fill="#ffffff"
                                  d="M15.72 36.96h2.1l-4.23-12.6h-2.1l2.55 7.59H8.63l2.55-7.59h-2.1l-4.22 12.6h2.09l1.02-3.04h6.73l1.02 3.04zM27 30.35c2.24 0 2-3 2-3a3.19 3.19 0 00-3.4-3h-6.39V37h4.86c2.78 0 5.34-.25 5.34-3.77A2.91 2.91 0 0027 30.35zm-5.62-4.18H24c2.19 0 2.59.78 2.59 1.61s-.26 1.73-2.59 1.73h-2.67zm2.74 9h-2.79v-3.76c3.52 0 5.82.1 5.82 2s-2.46 1.74-3.08 1.74zM37.56 26c-2.12 0-4 1.66-4 4.68a4.53 4.53 0 004 4.71 3.3 3.3 0 003.29-2.29c1.63.26 2.29.4 2.29.4s-.77 3.68-5.5 3.68-6.24-3.58-6.24-6.5 1.63-6.54 6.14-6.54a5.35 5.35 0 015.46 3.7l-2.22.56a3.05 3.05 0 00-3.22-2.4z"
                                ></path>
                              </svg>
                              Word Cloud
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="sgt-st-list">
                              <svg
                                viewBox="0 0 48 48"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                height="32px"
                                width="32px"
                                class="r-svg"
                              >
                                <title>Conversation Icon</title>
                                <path
                                  fill="rgb(64, 70, 93)"
                                  d="M28.86 7.63v9.61H24a4.8 4.8 0 00-4.8 4.81v4.8h-4.79v4.81l-4.8-4.81H4.8a4.8 4.8 0 01-4.8-4.8V7.63a4.8 4.8 0 014.8-4.8h19.25a4.8 4.8 0 014.81 4.8z"
                                ></path>
                                <path
                                  d="M48 22.63v14a4.67 4.67 0 01-4.67 4.67h-4.67L34 46v-4.68h-9.39a4.67 4.67 0 01-4.67-4.67v-14A4.67 4.67 0 0124.61 18h18.72A4.67 4.67 0 0148 22.63z"
                                  fill="rgb(183, 186, 194)"
                                ></path>
                              </svg>
                              Open Ended
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="sgt-st-list">
                              <svg
                                viewBox="0 0 48 48"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                height="32px"
                                width="32px"
                                class="r-svg"
                              >
                                <title>Scale Icon</title>
                                <path
                                  fill="rgb(64, 70, 93)"
                                  d="M35.65 34.07v7.42H.12v-7.42zM48 34.11v7.42h-3.82v-7.42z"
                                ></path>
                                <path
                                  fill="rgb(231, 232, 235)"
                                  d="M26.16 7.22v7.42H.11V7.22zM48 7.26v7.42H34.71V7.26z"
                                ></path>
                                <path
                                  fill="rgb(183, 186, 194)"
                                  d="M48 20.64v7.42H10.7v-7.42zM2.13 20.66v7.42H.12v-7.42z"
                                ></path>
                                <path
                                  fill="#000000"
                                  d="M37.78 30.86h4.24V44.7h-4.24zM28.31 4h4.24v13.84h-4.24zM4.29 17.43h4.24v13.84H4.29z"
                                ></path>
                              </svg>
                              Scales
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="sgt-st-list">
                              <svg
                                viewBox="0 0 48 48"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                height="32px"
                                width="32px"
                                class="r-svg"
                              >
                                <title>Ranking Icon</title>
                                <path
                                  fill="rgb(183, 186, 194)"
                                  d="M24.49 30.11v8.3H8.7v-8.3zM35.29 20.33v8.3H8.69v-8.3zM47.72 10.57v8.3H8.69v-8.3z"
                                ></path>
                                <path
                                  fill="rgb(64, 70, 93)"
                                  d="M3.22 10v6.59h-1v-4.83a2.32 2.32 0 01-1.65.78v-.93A1.68 1.68 0 002.2 10zM0 27.5a3.09 3.09 0 011.6-2.93l.76-.47c.69-.44 1.07-.79 1.07-1.4a1 1 0 00-1.09-1A1.41 1.41 0 001 22.86l-.95-.27a2.3 2.3 0 012.31-1.78 1.93 1.93 0 012.1 1.9c0 1-.63 1.58-1.54 2.14l-.7.43c-.8.51-1 .93-1.09 1.28h3.35v.94zM4.49 36.5a2 2 0 01-2.24 2 2.27 2.27 0 01-2.39-1.71l1-.26a1.37 1.37 0 001.39 1.1 1.13 1.13 0 001.22-1.12c0-.62-.45-1.1-1.28-1.1h-.3v-.81h.28a1.06 1.06 0 001.13-1 1 1 0 00-1.08-1 1.24 1.24 0 00-1.24 1l-.93-.28a2.17 2.17 0 012.2-1.61 1.85 1.85 0 012.06 1.77A1.63 1.63 0 013.42 35a1.68 1.68 0 011.07 1.5z"
                                ></path>
                              </svg>
                              Ranking
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="sgt-st-list">
                              <svg
                                viewBox="0 0 48 48"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                height="32px"
                                width="32px"
                                class="r-svg"
                              >
                                <title>Question Mark Square Icon</title>
                                <path
                                  fill="rgb(183, 186, 194)"
                                  d="M8.3 1.13h31.3a7.82 7.82 0 017.82 7.81v23.44a7.82 7.82 0 01-7.82 7.81h-7.81L24 48v-7.81H8.3a7.81 7.81 0 01-7.81-7.81V8.94A7.81 7.81 0 018.3 1.13z"
                                ></path>
                              </svg>
                              Q&A
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="sgt-st-row">
                      <div class="container-fluid p-0">
                        <h5 class="sgt-st-title">Quiz Competition</h5>
                        <div class="row">
                          <div class="col-4">
                            <div class="sgt-st-list">
                              <svg
                                viewBox="0 0 48 48"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                height="32px"
                                width="32px"
                                class="r-svg"
                              >
                                <title>Select Answer Icon</title>
                                <path
                                  fill="rgb(183, 186, 194)"
                                  d="M48 33.4v7.41H0V33.4z"
                                ></path>
                                <path
                                  fill="rgb(64, 70, 93)"
                                  d="M48 6.57v7.41H0V6.57z"
                                ></path>
                                <path
                                  fill="rgb(183, 186, 194)"
                                  d="M48 19.99v7.41H0v-7.41z"
                                ></path>
                              </svg>
                              Select Answer
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="sgt-st-list">
                              <svg
                                viewBox="0 0 48 48"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                height="32px"
                                width="32px"
                                class="r-svg"
                              >
                                <title>Typed Answer Icon</title>
                                <path
                                  fill="rgb(64, 70, 93)"
                                  d="M6.06 32.39l-4.55 14.1 14.1-4.55-9.55-9.55z"
                                ></path>
                                <path
                                  fill="rgb(231, 232, 235)"
                                  d="M9.251 29.114L31.447 6.918 41.1 16.57 18.903 38.766z"
                                ></path>
                                <path
                                  fill="rgb(183, 186, 194)"
                                  d="M46.32 8.05L40 1.68a2.19 2.19 0 00-3.18 0l-2.1 2.05 9.55 9.55 2-2a2.19 2.19 0 00.05-3.23z"
                                ></path>
                              </svg>
                              Type Answer
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="sgt-st-row">
                      <div class="container-fluid p-0">
                        <h5 class="sgt-st-title">Content slides</h5>
                        <div class="row">
                          <div class="col-4">
                            <div class="sgt-st-list">
                              <svg
                                viewBox="0 0 48 48"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                height="32px"
                                width="32px"
                                class="r-svg"
                              >
                                <title>Heading Subheading Icon</title>
                                <rect
                                  fill="rgb(64, 70, 93)"
                                  y="18.05"
                                  width="48"
                                  height="10.15"
                                  rx="1.26"
                                ></rect>
                                <rect
                                  fill="rgb(183, 186, 194)"
                                  x="5.54"
                                  y="30.05"
                                  width="36.92"
                                  height="4.62"
                                  rx="1.3"
                                ></rect>
                              </svg>
                              Heading
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="sgt-st-list">
                              <svg
                                viewBox="0 0 48 48"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                height="32px"
                                width="32px"
                                class="r-svg"
                              >
                                <title>Heading Paragraph Icon</title>
                                <rect
                                  fill="rgb(183, 186, 194)"
                                  x="3.93"
                                  y="11.04"
                                  width="40.92"
                                  height="8.66"
                                  rx="1.26"
                                ></rect>
                                <rect
                                  fill="rgb(64, 70, 93)"
                                  y="22.31"
                                  width="48"
                                  height="13.38"
                                  rx="1.26"
                                ></rect>
                              </svg>
                              Paragraph
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="sgt-st-list">
                              <svg
                                viewBox="0 0 48 48"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                height="32px"
                                width="32px"
                                class="r-svg"
                              >
                                <title>Heading Bullets Icon</title>
                                <rect
                                  fill="rgb(231, 232, 235)"
                                  x="-.01"
                                  y="7.96"
                                  width="48.01"
                                  height="8.62"
                                  rx=".66"
                                ></rect>
                                <rect
                                  fill="rgb(183, 186, 194)"
                                  x="7.38"
                                  y="21.5"
                                  width="33.24"
                                  height="3.69"
                                  rx="1.26"
                                ></rect>
                                <rect
                                  fill="rgb(64, 70, 93)"
                                  x=".36"
                                  y="21.87"
                                  width="2.95"
                                  height="2.95"
                                  rx="1.48"
                                ></rect>
                                <rect
                                  fill="rgb(64, 70, 93)"
                                  x=".36"
                                  y="29.26"
                                  width="2.95"
                                  height="2.95"
                                  rx="1.48"
                                ></rect>
                                <rect
                                  fill="rgb(64, 70, 93)"
                                  x=".36"
                                  y="36.64"
                                  width="2.95"
                                  height="2.95"
                                  rx="1.48"
                                ></rect>
                                <rect
                                  fill="rgb(183, 186, 194)"
                                  x="7.38"
                                  y="28.89"
                                  width="33.24"
                                  height="3.69"
                                  rx="1.26"
                                ></rect>
                                <rect
                                  fill="rgb(183, 186, 194)"
                                  x="7.38"
                                  y="36.27"
                                  width="33.24"
                                  height="3.69"
                                  rx="1.26"
                                ></rect>
                              </svg>
                              Bullets
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="sgt-st-list">
                              <svg
                                viewBox="0 0 48 48"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                height="32px"
                                width="32px"
                                class="r-svg"
                              >
                                <title>Picture Icon</title>
                                <path
                                  fill="rgb(183, 186, 194)"
                                  d="M36.44 26.35a2.2 2.2 0 00-3.08 0l-5 5L19 22a2.18 2.18 0 00-3.08 0L.62 37.29A2.18 2.18 0 002.15 41H45.8a2.18 2.18 0 001.55-3.73z"
                                ></path>
                                <circle
                                  fill="rgb(64, 70, 93)"
                                  cx="30.53"
                                  cy="12.6"
                                  r="6.55"
                                ></circle>
                              </svg>
                              Image
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="sgt-st-list">
                              <svg
                                viewBox="0 0 48 48"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                height="32px"
                                width="32px"
                                class="r-svg"
                              >
                                <title>Video Icon</title>
                                <circle
                                  fill="rgb(231, 232, 235)"
                                  cx="23.75"
                                  cy="24"
                                  r="23"
                                ></circle>
                                <path
                                  fill="rgb(64, 70, 93)"
                                  d="M32.89 24.81l-13.41 8.62a1 1 0 01-.52.15 1 1 0 01-.46-.11 1 1 0 01-.5-.85V15.38a1 1 0 01.5-.85 1 1 0 011 0l13.41 8.62a1 1 0 010 1.62z"
                                ></path>
                              </svg>
                              Video
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="sgt-st-list">
                              <svg
                                viewBox="0 0 48 48"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                height="32px"
                                width="32px"
                                class="r-svg"
                              >
                                <title>Big Icon</title>
                                <path
                                  fill="rgb(64, 70, 93)"
                                  d="M17.57 28.87c0 3.76-3 6.1-7.27 6.1H0V13.06h9.61c4.23 0 7.27 2.25 7.27 6a5.11 5.11 0 01-2.95 4.66 5.6 5.6 0 013.64 5.15zM3.48 16.22v6.2h6c2.19 0 3.82-1 3.82-3.1s-1.63-3.1-3.82-3.1zM14 28.59c0-2.1-1.62-3.2-3.85-3.2H3.48v6.42h6.63c2.23 0 3.89-1.09 3.89-3.22zM23.67 35H20.2V13.06h3.47zM48 23.48V35h-3.1v-3.09c-1.63 2.35-4.29 3.47-7.58 3.47-6 0-10.77-5-10.77-11.4a11 11 0 0111.12-11.36 10.64 10.64 0 0110.24 6.82l-3.29 1.1a7.39 7.39 0 00-6.92-4.63c-4.2 0-7.52 3.38-7.52 8.07s3.32 8.11 7.52 8.11c3.35 0 6.45-2.19 6.76-5.32H37.6v-3.29z"
                                ></path>
                              </svg>
                              Big
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="sgt-st-list">
                              <svg
                                viewBox="0 0 48 48"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                height="32px"
                                width="32px"
                                class="r-svg"
                              >
                                <title>Quote Icon</title>
                                <path
                                  fill="rgb(183, 186, 194)"
                                  d="M0 23.72v20.57h20.57V23.72H6.86A13.73 13.73 0 0120.57 10V3.15A20.6 20.6 0 000 23.72zM48 10V3.15a20.6 20.6 0 00-20.57 20.57v20.57H48V23.72H34.29A13.73 13.73 0 0148 10z"
                                ></path>
                              </svg>
                              Quote
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="sgt-st-list">
                              <svg
                                viewBox="0 0 48 48"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                height="32px"
                                width="32px"
                                class="r-svg"
                              >
                                <title>Number Icon</title>
                                <path
                                  fill="rgb(64, 70, 93)"
                                  d="M9.55 12.29v23.28H6V18.51a8.22 8.22 0 01-5.89 2.76V18C2.64 18 6 15.84 6 12.29zM14 35.57c0-4.43 1.33-7.59 5.72-10.35l2.66-1.66c2.46-1.56 3.79-2.79 3.79-5 0-1.79-1.29-3.45-3.86-3.45-2.76 0-4.12 2-4.72 4l-3.36-.93A8.14 8.14 0 0122.42 12c4.83 0 7.42 3.26 7.42 6.69s-2.23 5.59-5.45 7.58l-2.46 1.5c-2.83 1.79-3.66 3.29-3.86 4.52h11.84v3.33zM48 28.81c0 3.76-2.76 7.19-8 7.19-4.56 0-7.75-2.66-8.41-6.15l3.45-.94a4.83 4.83 0 004.96 3.9 4 4 0 004.36-4c0-2.2-1.63-3.86-4.56-3.86h-1V22.1h1a3.72 3.72 0 004-3.66c0-1.9-1.4-3.36-3.86-3.36a4.38 4.38 0 00-4.33 3.46l-3.29-1a7.61 7.61 0 017.75-5.68c4.72 0 7.28 3 7.28 6.25a5.78 5.78 0 01-3.12 5.22A5.93 5.93 0 0148 28.81z"
                                ></path>
                              </svg>
                              Number
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="sgt-st-row">
                      <div class="container-fluid p-0">
                        <h5 class="sgt-st-title">Advanced questions</h5>
                        <div class="row">
                          <div class="col-4">
                            <div class="sgt-st-list">
                              <svg
                                viewBox="0 0 48 48"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                height="32px"
                                width="32px"
                                class="r-svg"
                              >
                                <title>Prio Icon</title>
                                <rect
                                  x="20.61"
                                  y="-14.61"
                                  width="6.77"
                                  height="46"
                                  transform="rotate(90 24 8.39)"
                                  fill="rgb(64, 70, 93)"
                                ></rect>
                                <rect
                                  x="16.12"
                                  y="-.02"
                                  width="6.77"
                                  height="37.01"
                                  transform="rotate(90 19.51 18.49)"
                                  fill="rgb(183, 186, 194)"
                                ></rect>
                                <rect
                                  x="12.27"
                                  y="13.94"
                                  width="6.77"
                                  height="29.31"
                                  transform="rotate(90 15.655 28.595)"
                                  fill="rgb(183, 186, 194)"
                                ></rect>
                                <rect
                                  x="9.06"
                                  y="27.25"
                                  width="6.77"
                                  height="22.89"
                                  transform="rotate(90 12.445 38.695)"
                                  fill="rgb(231, 232, 235)"
                                ></rect>
                              </svg>
                              100 points
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="sgt-st-list">
                              <svg
                                viewBox="0 0 48 48"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                height="32px"
                                width="32px"
                                class="r-svg"
                              >
                                <title>Rating Box</title>
                                <path
                                  fill="rgb(183, 186, 194)"
                                  d="M46.17 48H.39V2.2a1.21 1.21 0 012.41 0v43.37h43.37a1.21 1.21 0 010 2.41z"
                                ></path>
                                <circle
                                  fill="rgb(64, 70, 93)"
                                  cx="14.22"
                                  cy="35.64"
                                  r="3.71"
                                ></circle>
                                <circle
                                  fill="rgb(64, 70, 93)"
                                  cx="17.2"
                                  cy="17.81"
                                  r="3.71"
                                ></circle>
                                <circle
                                  fill="rgb(64, 70, 93)"
                                  cx="38"
                                  cy="10.38"
                                  r="3.71"
                                ></circle>
                                <circle
                                  fill="rgb(64, 70, 93)"
                                  cx="33.54"
                                  cy="28.21"
                                  r="3.71"
                                ></circle>
                              </svg>
                              2 x 2 Grid
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="sgt-st-list">
                              <svg
                                viewBox="0 0 48 48"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                height="32px"
                                width="32px"
                                class="r-svg"
                              >
                                <title>Clipboard Filled Icon</title>
                                <path
                                  fill="rgb(64, 70, 93)"
                                  d="M42 12.98V47.3H6.5V.69h23.21L42 12.98z"
                                ></path>
                                <path
                                  fill="rgb(183, 186, 194)"
                                  d="M29.71 12.98V.69L42 12.98H29.71"
                                ></path>
                                <circle
                                  fill="#ffffff"
                                  cx="12.73"
                                  cy="20.79"
                                  r="1.32"
                                ></circle>
                                <circle
                                  fill="#ffffff"
                                  cx="12.73"
                                  cy="26.31"
                                  r="1.32"
                                ></circle>
                                <circle
                                  fill="#ffffff"
                                  cx="12.73"
                                  cy="31.82"
                                  r="1.32"
                                ></circle>
                                <rect
                                  fill="#ffffff"
                                  x="16.07"
                                  y="19.48"
                                  width="17.19"
                                  height="2.63"
                                  rx=".59"
                                ></rect>
                                <rect
                                  fill="#ffffff"
                                  x="16.07"
                                  y="24.99"
                                  width="17.19"
                                  height="2.63"
                                  rx=".59"
                                ></rect>
                                <rect
                                  fill="#ffffff"
                                  x="16.07"
                                  y="30.5"
                                  width="17.19"
                                  height="2.63"
                                  rx=".59"
                                ></rect>
                              </svg>
                              Quick Form
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="sgt-st-list">
                              <svg
                                viewBox="0 0 48 48"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                height="32px"
                                width="32px"
                                class="r-svg"
                              >
                                <title>Trophy Icon</title>
                                <path
                                  fill="rgb(64, 70, 93)"
                                  d="M21.21 21.82h5.26v16.4h-5.26z"
                                ></path>
                                <path
                                  fill="rgb(64, 70, 93)"
                                  d="M18.58 37.48H29.1v5.26H18.58z"
                                ></path>
                                <path
                                  fill="#000000"
                                  d="M13.32 42.74h21.03V48H13.32z"
                                ></path>
                                <path
                                  fill="rgb(64, 70, 93)"
                                  d="M35.61 11.48L39 13.37a6.61 6.61 0 015.83-3.5V6a10.53 10.53 0 00-9.22 5.48z"
                                ></path>
                                <path
                                  fill="rgb(64, 70, 93)"
                                  d="M34.39 16.45h3.91a6.59 6.59 0 01.77-3.1l-3.42-1.89a10.47 10.47 0 00-1.26 4.99zM12.06 11.48l-3.42 1.89a6.62 6.62 0 00-5.83-3.5V6a10.52 10.52 0 019.25 5.48z"
                                ></path>
                                <path
                                  fill="rgb(64, 70, 93)"
                                  d="M13.36 16.45H9.45a6.6 6.6 0 00-.78-3.1l3.43-1.89a10.47 10.47 0 011.26 4.99z"
                                ></path>
                                <path
                                  fill="rgb(64, 70, 93)"
                                  d="M13.32.68v15.87a10.52 10.52 0 0021 0V.68z"
                                ></path>
                              </svg>
                              Who will win?
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="sgt-st-list">
                              <svg
                                viewBox="0 0 48 48"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                height="32px"
                                width="32px"
                                class="r-svg"
                              >
                                <title>Pin on Image Icon</title>
                                <path
                                  d="M36.44 31a2.18 2.18 0 00-3.08 0l-5 5L19 26.61a2.2 2.2 0 00-3.08 0L.62 41.89a2.18 2.18 0 001.53 3.71H45.8a2.18 2.18 0 001.55-3.73z"
                                  fill="rgb(183, 186, 194)"
                                ></path>
                                <path
                                  d="M28.88 2.4a9.82 9.82 0 00-9.81 9.8c0 7.41 8.8 16.41 9.18 16.79a.89.89 0 00.63.26.93.93 0 00.63-.26c.37-.38 9.17-9.38 9.17-16.79a9.82 9.82 0 00-9.8-9.8zm0 12.45a3.79 3.79 0 113.78-3.79 3.78 3.78 0 01-3.78 3.79z"
                                  fill="rgb(64, 70, 93)"
                                ></path>
                              </svg>
                              Pin on Image
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="ex2-tabs-2"
                    role="tabpanel"
                    aria-labelledby="ex2-tab-2"
                  >
                    <div class="sgt-add-desc">
                      <a href="">Add meta description</a>
                    </div>
                    <div class="sgt-st-row mt-3">
                      <h5 class="sgt-st-title">Your question</h5>
                      <div class="sgt-input-limit">
                        <div class="form-outline mb-1">
                          <input
                            type="text"
                            id="form5"
                            class="form-control sgt-inpt-counter"
                            maxlength="150"
                            hint-class="show-sgt-counter"
                          />
                          <label class="form-label" for="form5">
                            Multiple Choice
                          </label>
                        </div>
                        <span
                          id="remaining"
                          class="sgt-st-input-counter show-sgt-counter"
                        >
                          150
                        </span>
                        <div class="sgt-add-desc">
                          <a href="">Add longer description</a>
                        </div>
                      </div>
                    </div>

                    <div class="sgt-st-row mt-3">
                      <h5 class="sgt-st-title">Options</h5>
                      <div id="sgtOptionBody" class="sgtOptionContainer">
                        <div class="drag-handler mb-3">
                          <div class="sgt-input-limit row">
                            <div class="col-11">
                              <div class="form-group sgt-option-cell mb-0">
                                <input
                                  type="text"
                                  id="form-option"
                                  class="form-control"
                                  maxlength="150"
                                  hint-class="show-sgt-counter"
                                  placeholder="Option"
                                />
                              </div>
                              {/* <!-- <div class="form-outline">
                                                            <input type="text" id="form-option" class="form-control" maxlength="150" hint-class="show-sgt-counter"/>
                                                            <label class="form-label" for="form-option"></label>
                                                        </div> -->
                                                        <!-- <span id="remaining" class="sgt-st-input-counter show-sgt-counter">150</span> --> */}
                            </div>
                            <div class="col-1 p-0 d-flex align-items-center">
                              <div class="sgt-option-cell">
                                <button class="sgt-option_del-row-btn btn-close bg-fixed">
                                  <i class="fas fa-trash-alt"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="drag-handler mb-3">
                          <div class="sgt-input-limit row">
                            <div class="col-11">
                              <div class="form-group sgt-option-cell mb-0">
                                <input
                                  type="text"
                                  id="form-option"
                                  class="form-control"
                                  maxlength="150"
                                  hint-class="show-sgt-counter"
                                  placeholder="Option"
                                />
                              </div>
                              {/* <!-- <div class="form-outline">
                                                            <input type="text" id="form-option" class="form-control" maxlength="150" hint-class="show-sgt-counter"/>
                                                            <label class="form-label" for="form-option"></label>
                                                        </div> -->
                                                        <!-- <span id="remaining" class="sgt-st-input-counter show-sgt-counter">150</span> --> */}
                            </div>
                            <div class="col-1 p-0 d-flex align-items-center">
                              <div class="sgt-option-cell">
                                <button class="sgt-option_del-row-btn btn-close bg-fixed">
                                  <i class="fas fa-trash-alt"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="drag-handler mb-3">
                          <div class="sgt-input-limit row">
                            <div class="col-11">
                              <div class="form-group sgt-option-cell mb-0">
                                <input
                                  type="text"
                                  id="form-option"
                                  class="form-control"
                                  maxlength="150"
                                  hint-class="show-sgt-counter"
                                  placeholder="Option"
                                />
                              </div>
                              {/* <!-- <div class="form-outline">
                                                            <input type="text" id="form-option" class="form-control" maxlength="150" hint-class="show-sgt-counter"/>
                                                            <label class="form-label" for="form-option"></label>
                                                        </div> --> */}
                              {/* <!-- <span id="remaining" class="sgt-st-input-counter show-sgt-counter">150</span> --> */}
                            </div>
                            <div class="col-1 p-0 d-flex align-items-center">
                              <div class="sgt-option-cell">
                                <button class="sgt-option_del-row-btn btn-close bg-fixed">
                                  <i class="fas fa-trash-alt"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="sgt-option_add-row mt-3">
                        <button class="btn btn-block btn-dark sgt-option_add-row-btn justify-content-center">
                          + Add another option
                        </button>
                      </div>
                      <script id="rowTemplate" type="text/template">
                        <div class="drag-handler mb-3">
                          <div class="sgt-input-limit row">
                            <div class="col-11">
                              <div class="form-group sgt-option-cell mb-0">
                                <input
                                  type="text"
                                  id="form-option"
                                  class="form-control"
                                  maxlength="150"
                                  hint-class="show-sgt-counter"
                                  placeholder="Option"
                                />
                              </div>
                              {/* <!-- <span id="remaining" class="sgt-st-input-counter show-sgt-counter">150</span> --> */}
                            </div>
                            <div class="col-1 p-0 d-flex align-items-center">
                              <div class="sgt-option-cell">
                                <button class="sgt-option_del-row-btn btn-close bg-fixed">
                                  <i class="fas fa-trash-alt"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </script>
                    </div>

                    <div class="sgt-st-row mt-3">
                      <h5 class="sgt-st-title">Image</h5>
                      <button
                        type="button"
                        class="btn btn-block sgt-st-upload"
                        onclick="document.getElementById('inputFile').click()"
                      >
                        <div class="container p-0">
                          <div class="row">
                            <div class="col-3">
                              <svg
                                width="50"
                                height="50"
                                viewBox="0 0 64 64"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-labelledby="title"
                                aria-describedby="desc"
                                role="img"
                              >
                                <title>Upload</title>
                                <path
                                  d="M31 48V3M16 20L31 3l15 16"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke="#909090"
                                  fill="none"
                                  data-name="layer2"
                                  stroke-linejoin="round"
                                ></path>
                                <path
                                  d="M8 46v16h46V46"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke="#909090"
                                  fill="none"
                                  data-name="layer1"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </div>
                            <div class="col-9 d-flex flex-column align-items-start justify-content-center p-0 position-relative">
                              <p class="sgt-upl-text">
                                Drag and drop or click to select an image
                              </p>
                              <p class="sgt-upl-sup-text">
                                Supported file types are{" "}
                                <span>.jpg, .png, .svg</span>
                              </p>
                              <div class="form-group inputDnD">
                                <label class="sr-only" for="inputFile">
                                  File Upload
                                </label>
                                <input
                                  type="file"
                                  class="form-control-file font-weight-bold"
                                  id="inputFile"
                                  accept="image/*"
                                  onchange="readUrl(this)"
                                  data-title=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>

                    <div class="sgt-st-row">
                      <div class="container-fluid p-0">
                        <h5 class="sgt-st-title">Advanced questions</h5>
                        <div class="row">
                          <div class="col-4">
                            <div class="sgt-st-list">
                              <svg
                                viewBox="0 0 48 48"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                height="32px"
                                width="32px"
                                class="r-svg"
                              >
                                <title>Bar Chart Icon</title>
                                <rect
                                  x="32.73"
                                  y="17.04"
                                  width="11.4"
                                  height="25.25"
                                  fill="rgb(231, 232, 235)"
                                ></rect>
                                <rect
                                  x="3.87"
                                  y="26.22"
                                  width="11.4"
                                  height="16.06"
                                  fill="rgb(64, 70, 93)"
                                ></rect>
                                <rect
                                  x="18.3"
                                  y="4.31"
                                  width="11.4"
                                  height="37.97"
                                  fill="rgb(183, 186, 194)"
                                ></rect>
                                <rect
                                  y="42.28"
                                  width="48"
                                  height=".99"
                                  fill="#000000"
                                ></rect>
                              </svg>
                              Bars
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="sgt-st-list">
                              <svg
                                viewBox="0 0 48 48"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                height="32px"
                                width="32px"
                                class="r-svg"
                              >
                                <title>Donut Chart Icon</title>
                                <path
                                  d="M23.5 0v10.009C16 10.272 10 16.435 10 24c0 4.477 2.101 8.463 5.371 11.026l-5.857 8.062C-.872 35.23-3.107 20.477 4.56 9.883A23.24 23.24 0 0123.129.004L23.5 0z"
                                  fill="rgb(183, 186, 194)"
                                ></path>
                                <path
                                  d="M24 38c2.789 0 5.387-.815 7.57-2.22l5.831 8.027a23.58 23.58 0 01-27.079-.13l5.858-8.063A13.935 13.935 0 0024 38z"
                                  fill="rgb(231, 232, 235)"
                                ></path>
                                <path
                                  d="M37.125 28.881l9.436 3.067a22.94 22.94 0 01-8.337 11.288l-5.834-8.028a14.037 14.037 0 004.735-6.327z"
                                  fill="rgb(183, 186, 194)"
                                ></path>
                                <path
                                  d="M46.75 16.55a22.91 22.91 0 01.12 14.447l-9.43-3.066c.365-1.247.56-2.566.56-3.931a14 14 0 00-.591-4.039l9.452-3.071-.111-.34z"
                                  fill="rgb(231, 232, 235)"
                                ></path>
                                <path
                                  d="M24.5.001A23.57 23.57 0 0146.55 15.94l-9.464 3.074c-1.953-5.123-6.827-8.803-12.587-9.005V0z"
                                  fill="rgb(64, 70, 93)"
                                ></path>
                              </svg>
                              Donut
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="sgt-st-list">
                              <svg
                                viewBox="0 0 48 48"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                height="32px"
                                width="32px"
                                class="r-svg"
                              >
                                <title>Pie Chart Icon</title>
                                <path
                                  d="M23.5.001v23.704L2.624 35.276A24.482 24.482 0 01.932 17.555C2.689 11.372 6.805 6.148 12.374 3.033A22.807 22.807 0 0123.5 0z"
                                  fill="rgb(183, 186, 194)"
                                ></path>
                                <path
                                  d="M24 47.997a23.33 23.33 0 01-20.755-11.92L24.128 24.5h23.867C47.729 37.521 37.088 47.996 24 47.996z"
                                  fill="rgb(231, 232, 235)"
                                ></path>
                                <path
                                  d="M47.995 23.5H24.5V.005C37.358.268 47.732 10.642 47.995 23.5z"
                                  fill="rgb(64, 70, 93)"
                                ></path>
                              </svg>
                              Pie
                            </div>
                          </div>
                          <div class="col-4">
                            <div class="sgt-st-list">
                              <svg
                                viewBox="0 0 48 48"
                                preserveAspectRatio="xMidYMid meet"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                height="32px"
                                width="32px"
                                class="r-svg"
                              >
                                <title>Dots Chart Icon</title>
                                <circle
                                  cx="8.28"
                                  cy="36.41"
                                  r="8.28"
                                  fill="rgb(64, 70, 93)"
                                ></circle>
                                <circle
                                  cx="39.72"
                                  cy="36.41"
                                  r="8.28"
                                  fill="rgb(64, 70, 93)"
                                ></circle>
                                <circle
                                  cx="8.28"
                                  cy="11.59"
                                  r="8.28"
                                  fill="rgb(64, 70, 93)"
                                ></circle>
                                <circle
                                  cx="39.72"
                                  cy="11.59"
                                  r="8.28"
                                  fill="rgb(64, 70, 93)"
                                ></circle>
                              </svg>
                              Dots
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="sgt-st-row mt-3">
                      <h5 class="sgt-st-title">Extras</h5>
                      <div class="form-check form-switch mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="sgtShowAnswer"
                        />
                        <label class="form-check-label" for="sgtShowAnswer">
                          Show correct answer(s)
                        </label>
                      </div>
                      <div class="form-check form-switch mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="sgtShowPercentage"
                        />
                        <label class="form-check-label" for="sgtShowPercentage">
                          Show results in percentage
                        </label>
                      </div>
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          onchange="alert('value');"
                          id="sgtChooseParticipants"
                        />
                        <label
                          class="form-check-label"
                          for="sgtChooseParticipants"
                        >
                          Let participants choose multiple options
                        </label>
                      </div>
                    </div>

                    <div class="sgt-st-row mt-3">
                      <h5 class="sgt-st-title">Segmentation</h5>
                      <p>
                        Present the results according to what the audience
                        answered on another question.
                      </p>
                      <select class="browser-default custom-select">
                        <option value="">No question selected</option>
                        <option value="" disabled="">
                          ===========
                        </option>
                        <option value="1">
                          1 n/a This is the Current Question
                        </option>
                      </select>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="ex2-tabs-3"
                    role="tabpanel"
                    aria-labelledby="ex2-tab-3"
                  >
                    <div class="sgt-st-row mt-3">
                      <h5 class="sgt-st-title">Slide settings</h5>
                      <div class="form-check form-switch mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="sgtShowImage"
                          disabled
                        />
                        <label class="form-check-label" for="sgtShowImage">
                          Show image
                        </label>
                      </div>
                      <div class="form-check form-switch mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="sgtCloseVoting"
                        />
                        <label class="form-check-label" for="sgtCloseVoting">
                          Close Voting
                        </label>
                      </div>
                      <div class="form-check form-switch mb-2">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="sgtHideInstruction"
                        />
                        <label
                          class="form-check-label"
                          for="sgtHideInstruction"
                        >
                          Hide instructions bar
                        </label>
                      </div>
                      <div class="row">
                        <div class="col-5">
                          <div class="form-check form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              id="sgtHideResults"
                            />
                            <label
                              class="form-check-label"
                              for="sgtHideResults"
                            >
                              Hide results
                            </label>
                          </div>
                        </div>
                        <div class="col-7">
                          <a class="sgt-show-all-results">
                            Show results on all slides
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="sgt-st-row mt-3">
                      <h5 class="sgt-st-title">Layouts</h5>
                      <form>
                        <div class="d-flex flex-row sgt-st-layouts">
                          <div class="col-2 pl-0 pr-2">
                            <input
                              class="checkbox-tools"
                              type="radio"
                              name="tools"
                              id="sgt-lay-1"
                            />
                            <label
                              class="for-checkbox-tools d-flex flex-column align-items-center justify-content-center p-4px"
                              for="sgt-lay-1"
                            >
                              <div class="sgt-layout-line-top"></div>
                              <div class="sgt-layout-line-bottom"></div>
                            </label>
                          </div>
                          <div class="col-2 pl-0 pr-2">
                            <input
                              class="checkbox-tools"
                              type="radio"
                              name="tools"
                              id="sgt-lay-2"
                            />
                            <label
                              class="for-checkbox-tools d-flex flex-column align-items-center justify-content-center p-4px"
                              for="sgt-lay-2"
                            >
                              <div class="sgt-st-layouts-box">
                                <div class="d-flex flex-row h-100">
                                  <div class="col-6 p-0">
                                    <div class="sgt-lay-curv-box"></div>
                                  </div>
                                  <div class="col-6 p-0 d-flex flex-column justify-content-center">
                                    <div class="sgt-layout-line-top"></div>
                                    <div class="sgt-layout-line-bottom"></div>
                                  </div>
                                </div>
                              </div>
                            </label>
                          </div>
                          <div class="col-2 pl-0 pr-2 pr-2">
                            <input
                              class="checkbox-tools"
                              type="radio"
                              name="tools"
                              id="sgt-lay-3"
                            />
                            <label
                              class="for-checkbox-tools d-flex flex-column align-items-center justify-content-center p-0"
                              for="sgt-lay-3"
                            >
                              <div class="sgt-st-layouts-box">
                                <div class="d-flex flex-row h-100">
                                  <div class="col-6 p-0">
                                    <div class="sgt-lay-half-box"></div>
                                  </div>
                                  <div class="col-6 p-4px d-flex flex-column justify-content-center">
                                    <div class="sgt-layout-line-top"></div>
                                    <div class="sgt-layout-line-bottom"></div>
                                  </div>
                                </div>
                              </div>
                            </label>
                          </div>
                          <div class="col-2 pl-0 pr-2">
                            <input
                              class="checkbox-tools"
                              type="radio"
                              name="tools"
                              id="sgt-lay-4"
                            />
                            <label
                              class="for-checkbox-tools d-flex flex-column align-items-center justify-content-center p-0"
                              for="sgt-lay-4"
                            >
                              <div class="sgt-st-layouts-box">
                                <div class="d-flex flex-row h-100">
                                  <div class="col-6 p-4px d-flex flex-column justify-content-center">
                                    <div class="sgt-layout-line-top"></div>
                                    <div class="sgt-layout-line-bottom"></div>
                                  </div>
                                  <div class="col-6 p-0">
                                    <div class="sgt-lay-half-box"></div>
                                  </div>
                                </div>
                              </div>
                            </label>
                          </div>
                          <div class="col-2 pl-0 pr-2">
                            <input
                              class="checkbox-tools"
                              type="radio"
                              name="tools"
                              id="sgt-lay-5"
                            />
                            <label
                              class="for-checkbox-tools d-flex flex-column align-items-center justify-content-center p-0"
                              for="sgt-lay-5"
                            />
                            <div class="sgt-st-layouts-box">
                              <div class="d-flex flex-row h-100">
                                <div class="col-4 p-0">
                                  <div class="sgt-lay-half-to-box"></div>
                                </div>
                                <div class="col-8 p-4px d-flex flex-column justify-content-center">
                                  <div class="sgt-layout-line-top"></div>
                                  <div class="sgt-layout-line-bottom"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-2 pl-0 pr-2">
                          <input
                            class="checkbox-tools"
                            type="radio"
                            name="tools"
                            id="sgt-lay-6"
                          />
                          <label
                            class="for-checkbox-tools d-flex flex-column align-items-center justify-content-center p-0"
                            for="sgt-lay-6"
                          >
                            <div class="sgt-st-layouts-box">
                              <div class="d-flex flex-row h-100">
                                <div class="col-8 p-4px d-flex flex-column justify-content-center">
                                  <div class="sgt-layout-line-top"></div>
                                  <div class="sgt-layout-line-bottom"></div>
                                </div>
                                <div class="col-4 p-0">
                                  <div class="sgt-lay-half-to-box"></div>
                                </div>
                              </div>
                            </div>
                          </label>
                        </div>
                      </form>
                    </div>

                    <div class="sgt-st-row mt-3">
                      <h5 class="sgt-st-title">Image</h5>
                      <button
                        type="button"
                        class="btn btn-block sgt-st-upload"
                        onclick="document.getElementById('cusInputFile').click()"
                      >
                        <div class="container p-0">
                          <div class="row">
                            <div class="col-3">
                              <svg
                                width="50"
                                height="50"
                                viewBox="0 0 64 64"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-labelledby="title"
                                aria-describedby="desc"
                                role="img"
                              >
                                <title>Upload</title>
                                <path
                                  d="M31 48V3M16 20L31 3l15 16"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke="#909090"
                                  fill="none"
                                  data-name="layer2"
                                  stroke-linejoin="round"
                                ></path>
                                <path
                                  d="M8 46v16h46V46"
                                  stroke-width="2"
                                  stroke-miterlimit="10"
                                  stroke-linecap="round"
                                  stroke="#909090"
                                  fill="none"
                                  data-name="layer1"
                                  stroke-linejoin="round"
                                ></path>
                              </svg>
                            </div>
                            <div class="col-9 d-flex flex-column align-items-start justify-content-center p-0 position-relative">
                              <p class="sgt-upl-text">
                                Drag and drop or click to select an image
                              </p>
                              <p class="sgt-upl-sup-text">
                                Supported file types are{" "}
                                <span>.jpg, .png, .svg</span>
                              </p>
                              <div class="form-group inputDnD">
                                <label class="sr-only" for="cusInputFile">
                                  File Upload
                                </label>
                                <input
                                  type="file"
                                  class="form-control-file font-weight-bold"
                                  id="cusInputFile"
                                  accept="image/*"
                                  onchange="readUrl(this)"
                                  data-title=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>

                    <div class="sgt-st-row mt-3">
                      <h5 class="sgt-st-title d-flex flex-row justify-content-between">
                        Advanced layouts
                        <a
                          class="text-primary"
                          type="button"
                          data-mdb-toggle="collapse"
                          data-mdb-target="#multiCollapseExample2"
                          aria-expanded="false"
                          aria-controls="multiCollapseExample2"
                        >
                          Expand
                        </a>
                      </h5>

                      <div class="sgt-st-adv-layout">
                        <div
                          class="collapse multi-collapse mt-3"
                          id="multiCollapseExample2"
                        >
                          <h5 class="sgt-st-title text-black-50">Alignment</h5>
                          <div class="container-fluid p-0">
                            <div class="d-flex flex-row">
                              <div class="col-4 p-0">
                                <div class="d-flex flex-row">
                                  <div class="col-4 p-0">
                                    <button class="btn">
                                      <svg
                                        viewBox="0 0 24 24"
                                        preserveAspectRatio="xMidYMid meet"
                                        xmlns="http://www.w3.org/2000/svg"
                                        role="img"
                                        height="24px"
                                        width="24px"
                                        class="r-svg"
                                      >
                                        <g color="#101834">
                                          <g
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          >
                                            <line
                                              x1="17"
                                              y1="10"
                                              x2="3"
                                              y2="10"
                                            ></line>
                                            <line
                                              x1="21"
                                              y1="6"
                                              x2="3"
                                              y2="6"
                                            ></line>
                                            <line
                                              x1="21"
                                              y1="14"
                                              x2="3"
                                              y2="14"
                                            ></line>
                                            <line
                                              x1="17"
                                              y1="18"
                                              x2="3"
                                              y2="18"
                                            ></line>
                                          </g>
                                        </g>
                                      </svg>
                                    </button>
                                  </div>
                                  <div class="col-4 p-0">
                                    <button class="btn">
                                      <svg
                                        viewBox="0 0 24 24"
                                        preserveAspectRatio="xMidYMid meet"
                                        xmlns="http://www.w3.org/2000/svg"
                                        role="img"
                                        height="24px"
                                        width="24px"
                                        class="r-svg"
                                      >
                                        <g color="#101834">
                                          <g
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          >
                                            <line
                                              x1="18"
                                              y1="10"
                                              x2="6"
                                              y2="10"
                                            ></line>
                                            <line
                                              x1="21"
                                              y1="6"
                                              x2="3"
                                              y2="6"
                                            ></line>
                                            <line
                                              x1="21"
                                              y1="14"
                                              x2="3"
                                              y2="14"
                                            ></line>
                                            <line
                                              x1="18"
                                              y1="18"
                                              x2="6"
                                              y2="18"
                                            ></line>
                                          </g>
                                        </g>
                                      </svg>
                                    </button>
                                  </div>
                                  <div class="col-4 p-0">
                                    <button class="btn">
                                      <svg
                                        viewBox="0 0 24 24"
                                        preserveAspectRatio="xMidYMid meet"
                                        xmlns="http://www.w3.org/2000/svg"
                                        role="img"
                                        height="24px"
                                        width="24px"
                                        class="r-svg"
                                      >
                                        <g color="#101834">
                                          <g
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          >
                                            <line
                                              x1="21"
                                              y1="10"
                                              x2="7"
                                              y2="10"
                                            ></line>
                                            <line
                                              x1="21"
                                              y1="6"
                                              x2="3"
                                              y2="6"
                                            ></line>
                                            <line
                                              x1="21"
                                              y1="14"
                                              x2="3"
                                              y2="14"
                                            ></line>
                                            <line
                                              x1="21"
                                              y1="18"
                                              x2="7"
                                              y2="18"
                                            ></line>
                                          </g>
                                        </g>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div class="col-4 p-0">
                                <div class="d-flex flex-row">
                                  <div class="col-4 p-0">
                                    <button class="btn">
                                      <svg
                                        viewBox="0 0 24 24"
                                        preserveAspectRatio="xMidYMid meet"
                                        xmlns="http://www.w3.org/2000/svg"
                                        role="img"
                                        height="24px"
                                        width="24px"
                                        class="r-svg"
                                      >
                                        <g color="#101834">
                                          <g
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          >
                                            <line
                                              x1="21"
                                              y1="4"
                                              x2="3"
                                              y2="4"
                                            ></line>
                                            <line
                                              x1="21"
                                              y1="8"
                                              x2="3"
                                              y2="8"
                                            ></line>
                                          </g>
                                        </g>
                                      </svg>
                                    </button>
                                  </div>
                                  <div class="col-4 p-0">
                                    <button class="btn">
                                      <svg
                                        viewBox="0 0 24 24"
                                        preserveAspectRatio="xMidYMid meet"
                                        xmlns="http://www.w3.org/2000/svg"
                                        role="img"
                                        height="24px"
                                        width="24px"
                                        class="r-svg"
                                      >
                                        <g color="#101834">
                                          <g
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          >
                                            <line
                                              x1="21"
                                              y1="10"
                                              x2="3"
                                              y2="10"
                                            ></line>
                                            <line
                                              x1="21"
                                              y1="14"
                                              x2="3"
                                              y2="14"
                                            ></line>
                                          </g>
                                        </g>
                                      </svg>
                                    </button>
                                  </div>
                                  <div class="col-4 p-0">
                                    <button class="btn">
                                      <svg
                                        viewBox="0 0 24 24"
                                        preserveAspectRatio="xMidYMid meet"
                                        xmlns="http://www.w3.org/2000/svg"
                                        role="img"
                                        height="24px"
                                        width="24px"
                                        class="r-svg"
                                      >
                                        <g color="#101834">
                                          <g
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          >
                                            <line
                                              x1="21"
                                              y1="16"
                                              x2="3"
                                              y2="16"
                                            ></line>
                                            <line
                                              x1="21"
                                              y1="20"
                                              x2="3"
                                              y2="20"
                                            ></line>
                                          </g>
                                        </g>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-4"></div>
                            </div>
                          </div>

                          <h5 class="sgt-st-title text-black-50 mt-3">
                            Layout
                          </h5>
                          <div class="container-fluid p-0">
                            <div class="d-flex flex-row">
                              <div class="col-4 p-0">
                                <div class="d-flex flex-row">
                                  <div class="col-4 p-0">
                                    <button class="btn">
                                      <svg
                                        viewBox="0 0 24 24"
                                        preserveAspectRatio="xMidYMid meet"
                                        xmlns="http://www.w3.org/2000/svg"
                                        role="img"
                                        height="20px"
                                        width="20px"
                                        class="r-svg"
                                      >
                                        <g color="#101834">
                                          <g
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          >
                                            <rect
                                              fill="currentColor"
                                              x="3"
                                              y="4"
                                              width="20"
                                              height="16"
                                              rx="2"
                                              ry="2"
                                            ></rect>
                                          </g>
                                        </g>
                                      </svg>
                                    </button>
                                  </div>
                                  <div class="col-4 p-0">
                                    <button class="btn">
                                      <svg
                                        viewBox="0 0 24 24"
                                        preserveAspectRatio="xMidYMid meet"
                                        xmlns="http://www.w3.org/2000/svg"
                                        role="img"
                                        height="20px"
                                        width="20px"
                                        class="r-svg"
                                      >
                                        <g color="#101834">
                                          <g
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          >
                                            <rect
                                              x="3"
                                              y="4"
                                              width="20"
                                              height="16"
                                              rx="2"
                                              ry="2"
                                            ></rect>
                                            <rect
                                              fill="currentColor"
                                              stroke-width="0"
                                              x="6"
                                              y="7"
                                              width="8"
                                              height="10"
                                              rx="2"
                                              ry="2"
                                            ></rect>
                                          </g>
                                        </g>
                                      </svg>
                                    </button>
                                  </div>
                                  <div class="col-4 p-0">
                                    <button class="btn">
                                      <svg
                                        viewBox="0 0 24 24"
                                        preserveAspectRatio="xMidYMid meet"
                                        xmlns="http://www.w3.org/2000/svg"
                                        role="img"
                                        height="20px"
                                        width="20px"
                                        class="r-svg"
                                      >
                                        <g color="#101834">
                                          <g
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          >
                                            <rect
                                              x="3"
                                              y="4"
                                              width="20"
                                              height="16"
                                              rx="2"
                                              ry="2"
                                            ></rect>
                                            <rect
                                              fill="currentColor"
                                              stroke-width="0"
                                              x="3"
                                              y="4"
                                              width="6"
                                              height="16"
                                              rx="2"
                                              ry="2"
                                            ></rect>
                                          </g>
                                        </g>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div class="col-4 p-0">
                                <div class="d-flex flex-row">
                                  <div class="col-4 p-0">
                                    <button class="btn">
                                      <svg
                                        viewBox="0 0 24 24"
                                        preserveAspectRatio="xMidYMid meet"
                                        xmlns="http://www.w3.org/2000/svg"
                                        role="img"
                                        height="20px"
                                        width="20px"
                                        class="r-svg"
                                      >
                                        <g color="#101834">
                                          <g
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          >
                                            <rect
                                              x="3"
                                              y="4"
                                              width="20"
                                              height="16"
                                              rx="2"
                                              ry="2"
                                            ></rect>
                                            <rect
                                              fill="currentColor"
                                              stroke-width="0"
                                              x="16"
                                              y="4"
                                              width="6"
                                              height="16"
                                              rx="2"
                                              ry="2"
                                            ></rect>
                                          </g>
                                        </g>
                                      </svg>
                                    </button>
                                  </div>
                                  <div class="col-4 p-0">
                                    <button class="btn">
                                      <svg
                                        viewBox="0 0 24 24"
                                        preserveAspectRatio="xMidYMid meet"
                                        xmlns="http://www.w3.org/2000/svg"
                                        role="img"
                                        height="20px"
                                        width="20px"
                                        class="r-svg"
                                      >
                                        <g color="#101834">
                                          <g
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          >
                                            <rect
                                              x="3"
                                              y="4"
                                              width="20"
                                              height="16"
                                              rx="2"
                                              ry="2"
                                            ></rect>
                                            <rect
                                              fill="currentColor"
                                              stroke-width="0"
                                              x="3"
                                              y="4"
                                              width="20"
                                              height="6"
                                              rx="2"
                                              ry="2"
                                            ></rect>
                                          </g>
                                        </g>
                                      </svg>
                                    </button>
                                  </div>
                                  <div class="col-4 p-0">
                                    <button class="btn">
                                      <svg
                                        viewBox="0 0 24 24"
                                        preserveAspectRatio="xMidYMid meet"
                                        xmlns="http://www.w3.org/2000/svg"
                                        role="img"
                                        height="20px"
                                        width="20px"
                                        class="r-svg"
                                      >
                                        <g color="#101834">
                                          <g
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          >
                                            <rect
                                              x="3"
                                              y="4"
                                              width="20"
                                              height="16"
                                              rx="2"
                                              ry="2"
                                            ></rect>
                                            <rect
                                              fill="currentColor"
                                              stroke-width="0"
                                              x="3"
                                              y="14"
                                              width="20"
                                              height="6"
                                              rx="2"
                                              ry="2"
                                            ></rect>
                                          </g>
                                        </g>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-4"></div>
                            </div>
                            <div class="sgt-add-desc mt-2">
                              <a href="">Reset Layout</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="sgt-st-row mt-3">
                      <h5 class="sgt-st-title d-flex flex-row justify-content-between">
                        Advanced Colours
                        <a
                          class="text-primary"
                          type="button"
                          data-mdb-toggle="collapse"
                          data-mdb-target="#multiCollapseExample1"
                          aria-expanded="false"
                          aria-controls="multiCollapseExample1"
                        >
                          Expand
                        </a>
                      </h5>
                      <div class="sgt-st-adv-layout">
                        <div
                          class="collapse multi-collapse mt-3"
                          id="multiCollapseExample1"
                        >
                          <p>Style up your slides with colours and images!</p>
                          <div class="color-section">
                            <h5 class="sgt-st-title text-black-50 mt-3">
                              Text colour
                            </h5>
                            <input class="btn p-0" type="color" />
                          </div>
                          <div class="color-section">
                            <h5 class="sgt-st-title text-black-50 mt-3">
                              Base colour
                            </h5>
                            <input class="btn p-0" type="color" />
                          </div>
                          <div>
                            <h5 class="sgt-st-title text-black-50 mt-3">
                              Background image
                            </h5>
                            <button
                              type="button"
                              class="btn btn-block sgt-st-upload ripple-surface"
                              onclick="document.getElementById('cusInputFile').click()"
                            >
                              <div class="container p-0">
                                <div class="row">
                                  <div class="col-3">
                                    <svg
                                      width="50"
                                      height="50"
                                      viewBox="0 0 64 64"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-labelledby="title"
                                      aria-describedby="desc"
                                      role="img"
                                    >
                                      <title>Upload</title>
                                      <path
                                        d="M31 48V3M16 20L31 3l15 16"
                                        stroke-width="2"
                                        stroke-miterlimit="10"
                                        stroke-linecap="round"
                                        stroke="#909090"
                                        fill="none"
                                        data-name="layer2"
                                        stroke-linejoin="round"
                                      ></path>
                                      <path
                                        d="M8 46v16h46V46"
                                        stroke-width="2"
                                        stroke-miterlimit="10"
                                        stroke-linecap="round"
                                        stroke="#909090"
                                        fill="none"
                                        data-name="layer1"
                                        stroke-linejoin="round"
                                      ></path>
                                    </svg>
                                  </div>
                                  <div class="col-9 d-flex flex-column align-items-start justify-content-center p-0 position-relative">
                                    <p class="sgt-upl-text">
                                      Drag and drop or click to select an image
                                    </p>
                                    <p class="sgt-upl-sup-text">
                                      Supported file types are{" "}
                                      <span>.jpg, .png, .svg</span>
                                    </p>
                                    <div class="form-group inputDnD">
                                      <label class="sr-only" for="cusInputFile">
                                        File Upload
                                      </label>
                                      <input
                                        type="file"
                                        class="form-control-file font-weight-bold"
                                        id="cusInputFile"
                                        accept="image/*"
                                        onchange="readUrl(this)"
                                        data-title=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Tabs content --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default EditNewFirst;
