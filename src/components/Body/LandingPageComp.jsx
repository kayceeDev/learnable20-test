import React from "react";

const LandingPageComp = () => {
  return (
    <section id="home-articles" className="m-1">
      <div className="container">
        <div className="articles-container">
          <article className="card">
            <div>
              <h3 className="l-heading">
                Genesys provides opportunities for young Nigerian techies and
                opportunities to grow and innovate.
              </h3>

              <p className='py-1'>
                We understand that opportunities are scarce in these parts. We
                are either creating or exposing our people to these
                opportunities.
              </p>
            </div>
            <div></div>
          </article>


          <article className="card">
            <img
              src={require("../../images/arrowdown.png")}
              alt="arrow down"
              className="arrow"
            />
            <img src={require("../../images/box1.png")} alt="" />
          </article>


          <article className="card">
            <div>
            <img src={require("../../images/Photo.png")} alt="photo of a man" />
            </div>
            <div className ='content'>
            <h3 className='l-heading'>Learnable</h3>
            <p className='py-1'>
              Every year, young Nigerians are launching new careers in the
              technology industry. Find out how Genesys is helping them do it.
            </p>
            <div>
            <a href="#" class="btn btn-primary">
              Learn More
            </a>
            </div>
            </div>
          </article>
          
          <article className="card bg-secondary">
            <div>
            <h3 className='l-heading'>Agora</h3>
            <p className='py-1'>
              We are reimagining the workplace and how people work. Find out how
              our co-working spaces can help you enjoy the work that you do.
            </p>
            <a href="#" class="btn btn-primary">
              Learn More
            </a>
            </div>
            
            <div>
            <img
              src={require("../../images/office.png")}
              alt="photo of a man"
            />
            </div>
          </article>
          <article className="card">
            <div>
            <img
              src={require("../../images/office2.png")}
              alt="photo of a man"
            />
            </div>
            <div>
            <h3>StartZone</h3>
            <p className='py-1'>
              The business environment is harsh for early-stage businesses. We
              can help you rise above it all.
            </p>
            <div>
            <a href="#" class="btn btn-primary">
              HERE'S HOW
            </a>
            </div>
            </div>
          </article>
          <article className="card bg-secondary">
            <div>
              <div className="square">
                <div>
              <img src={require("../../images/Rectangle1.png")} alt="" />
              </div>
              <div>
              <a href="#" className="l-heading">
                Genesys Ignite </a>
                </div>
                <div>
              <img src={require("../../images/Rectangle2.png")} alt="" /> </div>
             
              <div>
              <img src={require("../../images/Rectangle3.png")} alt="" />
              </div>
              <div>
              <a href="#"> CodeVille</a>
              </div>
              <div>
              <a href="#"> CodeVille</a>
              </div>
              </div>
            </div>
            <h1 className="l-heading">Other things we do</h1>
          </article>
          <article className="card bg-primary ">
          <div>
            <img
              src={require("../../images/teamspirit.png")}
              alt="photo of hands holding"
            />
            </div>
            <div>
            <h3 className="l-heading ">The Best Team In The World</h3>
            <p className='py-1'>
              We work with the most amazing people our industry has to offer.
              They are really passionate about making a difference
            </p>
           
            <a href="#" class="btn btn-primary">
              SEE TEAM
            </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default LandingPageComp;
