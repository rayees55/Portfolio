import React from "react";
import {Link} from "react-router-dom";
function Footer() {
    return(
      <footer>
      <div className="container-fluid text-center" style={{backgroundColor: "black"}}>
        <div className="pt-5">

          <h2 className="text-light">Interestind in working with me?</h2>
         <Link to="/contact"><button className="btn btn-outline-light btn-lg">Let's talk</button>
         </Link> 

        </div>
        <div className="row">
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-info">More Links</h5>
            <a href="/" className="text-light d-block">Blogs</a>
            <Link to="/" className="text-light d-block">Home</Link>
            <a href="/" className="text-light d-block">Projects</a>
            <Link to="/contact" className="text-light d-block">Contact me </Link>
            <a href="/" className="text-light d-block">Write a recommendation</a>
          </div>
          <div className="col-12 col-md-4 text-light py-3 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            tellus quam, bibendum eu bibendum in, condimentum ac justo.
            Suspendisse vehicula, nisi vitae ultrices malesuada, leo metus
          
          </div>
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-info pb-5">Social</h5>
            <a href="/">
              <i className="fab fa-linkedin text-light h1 d-block"></i>
            </a>
            <a href="/">
              <i className="fab fa-github text-light h1 d-block"></i>
            </a>
            <a href="/">
              <i className="fab fa-envelope text-light h1 d-block"></i>
            </a>
          </div>
        </div>

        <div className="text-muted py-3"></div>
        Copyright Rayees Bhat 2021
      </div>
</footer>
    );
}

export default Footer;