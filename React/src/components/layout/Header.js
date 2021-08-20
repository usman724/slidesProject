import React, { Fragment } from 'react'

const Header = () => {
  return (
    <header className='sgt-inner-header'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-2 d-flex align-items-center'>
            <h5 className='inner-logo'>Logo</h5>
          </div>
          <div className='col-md-10 d-flex align-items-center justify-content-end'>
            <div className='col-md-3 d-flex align-items-center justify-content-between'>
              <button type='button' className='btn btn-success'>
                <span className=''>
                  <svg
                    viewBox='0 0 24 24'
                    preserveAspectRatio='xMidYMid meet'
                    xmlns='http://www.w3.org/2000/svg'
                    role='img'
                    height='16px'
                    width='16px'
                    className='r-svg'
                  >
                    <g color='currentColor'>
                      <g
                        fill='currentColor'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      >
                        <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
                      </g>
                    </g>
                  </svg>
                  <span font-family='body' font-size='2' className=''>
                    Upgrade
                  </span>
                </span>
              </button>
              <div id='help-icon'>
                <button id='help-thumbnail' className='btn btn-link d-flex'>
                  <svg
                    viewBox='0 0 24 24'
                    preserveAspectRatio='xMidYMid meet'
                    xmlns='http://www.w3.org/2000/svg'
                    role='img'
                    height='24px'
                    width='24px'
                    className='r-svg'
                  >
                    <g color='rgba(16, 24, 52, 0.75)'>
                      <g
                        fill='none'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      >
                        <circle cx='12' cy='12' r='10'></circle>
                        <path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'></path>
                        <line x1='12' y1='17' x2='12' y2='17'></line>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
              <nav className='navbar-expand-sm'>
                {/* <!-- <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button> --> */}
                <div className='collapse navbar-collapse' id='navbar-list-4'>
                  <ul className='navbar-nav'>
                    <li className='nav-item dropdown'>
                      <a
                        className='nav-link profile-link'
                        href='#'
                        id='navbarDropdownMenuLink'
                        role='button'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        SGT
                      </a>
                      <div
                        className='dropdown-menu'
                        aria-labelledby='navbarDropdownMenuLink'
                      >
                        {/* // <a className="dropdown-item" href="#">Dashboard</a>
                                        <a className="dropdown-item" href="#">Edit Profile</a> */}
                        <a className='dropdown-item' href='#'>
                          <i className='fas fa-sign-out-alt'></i> Log Out
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
