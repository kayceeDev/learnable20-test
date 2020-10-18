import React from 'react';

const ProductBodyComp = () => {
  return (
    <section id="home-articles" className="m-1">
      <div className="containers">
        <div className="articles-container">
          <section className="hero py-1">
            <div className="shift">
              <h1 className="l-heading">The Learnable Product Designer</h1>
              <p>
                At Genesys, you'll be exposed to every discipline in our
                creative process – UX, UI, interaction design, and copywriting.
                You’ll be part of a dynamic team that's made up of like-minded,
                talented people. You'll work hard with them to create things
                that will amaze everyone everywhere. In addition to your team
                projects, you’ll be lending a hand to the creative team.
                Participating in brainstorm sessions, building winning pitches,
                <br/>
                <br/>
                preparing assets, and design scriptures for productions, you'll
                be in the thick of it all. Oh, and you’ll make amazing friends
                while you're at it!
              </p>
            </div>
            <div className="man ">
              <img
                src={require("../../images/Man.png")}
                alt=""
                className="man-image man-color-secondary"
              />
            </div>
          </section>

          <section>
            <div className="l-heading color-secondary">
              <h1>
                “The greats weren’t great because at birth they could paint. The
                greats were great because they painted a lot.” Macklemore
              </h1>
            </div>
          </section>
          <section className='card1'>
            <div className='card1-img py-1'>
              <img src={require("../../images/design2.png")} alt="" />
            </div>
            <div className='card1-content'>
            <h1 className="l-heading ">We expect you to…</h1>
            <p>
              Play nice with other people.
              <br />
              <br />
              Be an actively engaged person. That means you are present,
              motivated, and social.
              <br />
              <br />
              Understand how to use the Figma design software
              <br />
              <br />
              Be able to create initial design layouts with confidence and
              know-how to effectively communicate concepts to everyone on your
              team.
              <br />
              <br />
              Have a basic understanding of design principles and theories To
              have creative courage. This is a tough industry, only the brave
              and sturdy remain.
              <br />
              <br />
              Be prepared to defend your decisions and take constructive
              criticism.
              <br />
              <br />
              To us, beauty without substance has no value. At Genesys, design
              thinking and execution are equally important, so we’re constantly
              on the lookout for not only the how but also the why.
            </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ProductBodyComp;