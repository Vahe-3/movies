import React from 'react'

const Footer = () => {
  return (
    <footer className="page-footer grey darken-4">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()}
          
        </div>
      </div>
    </footer>
  )
}

export default Footer