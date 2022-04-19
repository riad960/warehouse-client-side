import React from "react";

function About() {
  return (
    <section
      style={{ marginTop: "120px" }}
      className=" about-section d-flex align-items-center py-5"
    >
      <div className="container">
        <h1 className="text-danger text-center display-3 pb-3">About me</h1>
        <div className="row">
          <div className="col-md-5 mt-md-0 mt-5"></div>
          <div className="col-md-7 mt-md-5">
            <div className="">
              <h1 className="display-1 md:display-4">
                <span className="text-danger">Riad</span> Admed Roni
              </h1>
              <p className="fs-5">
                I'm a Front-end web developer. I have some knowledge of modern
                website development. I learned some technologies like HTML, CSS,
                BOOTSTRAP, TAILWIND, MODERN JS or ES6, REACT JS, ROUTER,
                FIREBASE, etc...
                <br />
                My dream is to be a software developer. I want to build large
                and modern websites and work with my project or services.
                <br />
                I'm developing myself day by day to gather more knowledge about
                the website. I want to be a MERN stack developer and am also
                interested in learning Python and Django for the back-end...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
