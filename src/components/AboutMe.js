import React from "react";

function AboutMe(){
    return(<div className="bg-light mb-3 w-100">
    <div className="container-fluid text-center py-3">
      <h1 className="font-weight-light">
        About <span className="text-info">Me</span>
      </h1>
      <div className="lead"> I can develop FrontEnd as of now</div>
      <div className="row text-justify ">
        <div className="col-12 col-md-6 py-3 ">
          <h5 className="text-center">What I can do?</h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus quam, bibendum eu bibendum in,
          condimentum ac justo. Suspendisse vehicula, nisi vitae ultrices malesuada, leo metus lobortis justo, nec
          mattis nunc neque vel nisl.
        </div>
        <div className="col-12 col-md-6 py-3">
          <h5 className="text-center">What am I doing currently?</h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus quam, bibendum eu bibendum in,
          condimentum ac justo. Suspendisse vehicula, nisi vitae ultrices malesuada, leo metus lobortis justo, nec
          mattis nunc neque vel nisl.
        </div>

      </div>
      <div className="row text-justify">
        <div className="col-12 col-md-6 py-3">
          <h5 className="text-center">What do I believe in?</h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus quam, bibendum eu bibendum in,
          condimentum ac justo. Suspendisse vehicula, nisi vitae ultrices malesuada, leo metus lobortis justo, nec
          mattis nunc neque vel nisl.
        </div>
        <div className="col-12 col-md-6 py-3">
          <h5 className="text-center">How can I help you?</h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus quam, bibendum eu bibendum in,
          condimentum ac justo. Suspendisse vehicula, nisi vitae ultrices malesuada, leo metus lobortis justo, nec
          mattis nunc neque vel nisl.
        </div>
      </div>
    </div>
  </div>
  );
}
export default AboutMe;