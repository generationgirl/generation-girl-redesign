import React from 'react';


function About(props) {
  return(
  <div id = "aboutus">
    <div className = "container">
      <div className = "row">
        <div className = "col-lg-8">
          <h2 className ="blue"><b>About Us</b></h2>
          <br></br>
          <p id = "aboutustext">Generation Girl is a non-profit organization aimed at introducing young girls to the STEM (Science, Technology, Engineering, and Math) fields through fun, educational Holiday Clubs. Our goal is to shape future female leaders & empower these girls to make their mark in male-dominated fields! We are based in Jakarta, Indonesia, but stay tuned for future locations!</p>
          <h3 className = "text-right"><span><img src={require("../assets/genglogoalt.png")} alt=""></img></span><i>  #gengup</i></h3>
        </div>
        <div className = "col-lg-4 text-center">
          <img width="300px" src = {require("../assets/clover.png")}></img>
        </div>
      </div>
    </div>
  </div>
)

}

export default About