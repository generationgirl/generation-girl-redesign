import React from 'react';

function Nav(props) {
  return (
    <nav className="navbar fixed-top navbar-light bg-light">
	  <a className="navbar-brand" href="#">
	    <img src={require("../assets/genglogo.png")} height = "40" className="d-inline-block align-top" alt="Generation Girl"/>
	  </a>

	  <button id = "navbutton" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="fas fa-bars" style={{ color: '#004b85'}}></span>
	  </button>

	  <div className="collapse navbar-collapse" id="navbarNav">
	  <div className="navbar-nav ml-auto">
	      <a className="nav-item nav-link" href="#aboutus">Tentang Kami</a>
	      <a className="nav-item nav-link" href="#ourclub">Club Kami</a>
	      <a className="nav-item nav-link" href="#foot">Hubungi Kami</a>
	      <a className="nav-item nav-link" href="http://medium.com/generation-girl">Press</a>
	      <div className="dropdown-divider"></div>
	      <a className="nav-item nav-link" href="en/index.html">Switch Language to English</a>
	    </div>
	  </div>
	</nav>
  )
}

export default Nav;