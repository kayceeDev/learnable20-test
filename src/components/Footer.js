import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="card">
        <img src={require("../images/uparrow.png")} alt="" />

        <div className="bg-footer-primary">
          <div>
            <p className="m-heading p-1">
              Stay up to date on what we are doing and new learning
              opportunities
            </p>
          </div>
          <div className="footer-input">
            <div>
              <input type="email" name="" id="" placeholder="Enter Email" />
              <p>view Privacy Policy</p>
            </div>
            <a href="#" className="btn">
              SUBSCRIBE
            </a>
          </div>
        </div>
      </div>

      <div className="footer-content">
        <div>
          <a href="#">Build Software</a>
          <a href="#">Design Different</a>
          <a href="#">Apply Your Knowledge</a>
          <a href="#">FAQ</a>
        </div>
        <div>
          <p>
            Our Local Campus center: Kilometer 7, Enugu/Port Harcourt,
            Expressway, Centenary City, Enugu. Nigeria
          </p>
          <a href="#">Get in touch</a>
        </div>

        <div>
          <img src={require("../images/footer-img2.png")} alt="" />
        </div>
        <div>
          <p>
            Learnable is proud to be a collaborative effort of all the arms of
            our product team
          </p>
          <a href="">HEAD TO DEVSTUDIO</a>
        </div>
      </div>
      <div className="footer-icon py-1">
        <p> Copyright &copy; 2020, Genesys, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
