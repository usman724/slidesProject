import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div class='container-fluid h-100'>
        <div class='row'>
          <div class='col-md-6'></div>
          <div class='col-md-6 d-flex align-items-center justify-content-end'>
            <p>
              Designed and Developed by{' '}
              <Link to='https://softgates.ae/'>Soft Gates Technologies</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
