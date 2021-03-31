import React from "react";
import PP from "../assets/PP.jpg"
function Title(){
    const name = "Rayees Ahamd Bhat";
    return(
    <div className="container py-5">
    <div className="row text-center align-items-center py-5">
      <div className="col-12 col-md-6">
        <img className="img-fluid rounded-circle w-75" 
        src={PP} 
        alt="Rayees" />
      </div>
      <div className="col-12 col-md-6 pt-5">
        <div className="font-weight-light" style={{fontSize: "50px"}}>
          Hi, I am <span className="text-info">{name}</span>
        </div>
        <h4 className="font-weight-light">I am freelancer from Kashmir</h4>
      </div>
    </div>
  </div>
    );
}

export default Title;