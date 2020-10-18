import React from "react";

const HomeComponent = () => {
  return (
    <section id="home-articles" className="m-1">
      <div className="articles-container">
        <article className="card bg-footer-secondary">
          <div className="shift">
            <h2 className="m-heading py-1">Coming soon: Learnable ‘20</h2>
            <p>
              We've started taking in applications for the next batch of
              learnable interns. Applications are on till the 21st of Febuary
            </p>
          </div>
          <div>
            <a href="#" className="py-1">
              Click link to download...
            </a>
            <p className="m-heading">Learnable ‘20 Brochure</p>
          </div>
        </article>
        <article >
          <div className='p-2'>
            <h1 className="l-heading ">Everything <br/> is Learnable</h1>
          </div>
       
       <div className='card'> 
         <div >
           <p>Learnable is the perfect product development internship program brought to you by Genesys.</p>
         </div>
       <div className='circle-div'>
         <div className='circle bg-footer-primary'>
           <div>
             <a href="#">Development</a>
             <p>What to expect</p>
           </div>
         </div>
         <div className='circle bg-primary'>
           <div>
           <a href="#">Product Design</a>
             <p>What to expect</p>
           </div>
         </div>
       </div>
       </div>
       
<div className='bg-secondary'>
       <div className='card'>
         <div>
           <img src={require('../../images/arrowdown.png')} alt=""/>
         </div>
       <div>
         <img src={require('../../images/learnable.png')}alt=""/>
       </div>
       </div>
      
       <div className='numerical-div '>
         <div><h1>305</h1>
         <p>Young Software
Developers Trained</p>
</div>
         <div>
           <h1>2100</h1>
           <p>Tech Enthusiasts</p>
         </div>
         <div>
           <h1>8</h1>
           <p>StartUps Incubated</p>
         </div>
         <div>
           <h1>250</h1>
           <p>Small Businesses 
supported</p>
         </div>
                </div>
                </div>
        </article>
        <section className="hero py-1 container">
          <div className="shift">
            <h1 className="m-heading">We Make People Great</h1>
            <p>
              As part of our calculated efforts to contribute to the emerging
              knowledge and skills driven economy of Nigeria, Learnable is a
              6-month product development training program with an emphasis on
              software programming and product design. It is for outstanding
              young individuals who are passionate about building a career in
              the software industry.
              <br />
              <br />
              We primarily educate and groom software developers and designers,
              preparing them for the industry.
            </p>
          </div>
          <div className="man ">
            <img
              src={require("../../images/Man.png")}
              alt=""
              className="man-image man-color-primary"
            />
          </div>
        </section>
        <article className="card bg-secondary">
          <div>
            <img
              src={require("../../images/vr-img.png")}
              alt="photo of a man"
            />
          </div>
          <div>
            <h3 className="m-heading">An Unusual Learning Experience </h3>
            <p className="py-1">
              At Genesys, we believe in the learning processes as much as we
              believe in the results. By applying a combination of active and
              social learning methodologies, we create an environment that
              involves the learner in the learning process while providing
              avenues for collaboration and peer-to-peer mentorship. Our methods
              over the years have helped us discover ways to take education out
              of the classroom. We introduce our interns to learning by
              experimentation and problem-solving. To us, every task is an
              opportunity to learn.
            </p>
          </div>
        </article>
        <article className="card ">
          <div>
            <p className="py-1">For Developers</p>
            <h1 className="m-heading ">
              Learn to Build Software the Right Way
            </h1>
            <p className="py-1">
              We love to build stuff. Really awesome stuff. That’s why we have
              developed a learning program that will empower you to create
              amazing software the right way. We believe in learning through
              experimentation. Our aim is to nurture and grow bright young minds
              from the get-go because that’s how our industry will thrive.
            </p>
            <a href="#" className="btn">
              Learn More
            </a>
          </div>
          <div className="six-square">
            <div className="bg-primary box ">
              <h2>Program with JavaScript</h2>
            </div>

            <div className="bg-footer-primary box p-1">
              <h2>Version Control with Git</h2>
            </div>
            <div className="box p-1 man-color-secondary">
              <h2>Web Development with React</h2>
            </div>

            <div className="box bg-purple p-1">
              <h2>Building APIs with NodeJS</h2>
            </div>
            <div className="box bg-abstract p-1">
              <h2>Managing Data with MongoDB</h2>
            </div>
            <div className="box bg-footer-secondary p-1">
              <h2>Deploying with Heroku</h2>
            </div>
          </div>
        </article>
        <article className="card ">
          <div className="six-square">
            <div className="bg-primary box  p-1">
              <h2>Design User Interfaces</h2>
            </div>

            <div className="bg-footer-primary box p-1">
              <h2>Craft User Experiences</h2>
            </div>
            <div className="box p-1 man-color-secondary">
              <h2>Apply Design Thinking</h2>
            </div>

            <div className="box bg-abstract p-1">
              <h2>Build Information Architecture</h2>
            </div>
            <div className="box bg-abstract p-1">
              <h2>Copy write for Projects</h2>
            </div>
            <div className="box bg-footer-secondary p-1">
              <h2>Brand Products</h2>
            </div>
          </div>
          <div>
            <p className="py-1">For Desinger</p>
            <h1 className="m-heading ">Design Different</h1>
            <p className="py-1">
              We love to make things work perfectly. That’s why our design
              learning path exposes you to the science of user-oriented design.
              <br />
              <br />
              Design is at the heart of everything we do at Genesys. Right from
              the start of the program, you’ll get your hands dirty as you get
              practically involved in the world’s most modern design concepts.
              At Genesys, we’re building designers who put the users first.
            </p>
            <a href="#" className="btn">
              Learn More
            </a>
          </div>
        </article>

        <article className="card ">
          <div>
            <h3 className="m-heading">Who is Eligible? </h3>
            <p className="py-1">
              To be a participant of lernable, you need to be a young and
              passionate person interested in launching a super tech career. You
              will need to have foundational knowledge in whatever learning path
              you are applying for and be available for the six month duration
              of the program.
              <br />
              <br />
              To become a part of the Genesys family, you must express some of
              the qualities we consider important. You are someone that takes
              responsibilities and initiatives. You will also express the
              ability to produce quality stuff in good time with high
              consistency.
            </p>
          </div>
          <div>
            <img
              src={require("../../images/Eligible.png")}
              alt="photo of a man"
            />
          </div>
        </article>
        <article className="card man-color-secondary ">
          <div>
            <img
              src={require("../../images/our-culture.png")}
              alt="photo of a man"
            />
          </div>
          <div>
            <h2 className="m-heading">Our Culture </h2>
            <p className="py-1">
              Our culture are the unspoken things that make us who we are at
              Genesys. To become one of us, you need to be like the rest of us.
              We believe that excellence is a culture, and we are committed to a
              philosophy of consistent improvement in everything we do. We are
              passionate, candid and we trust in the power of collaboration.
            </p>
          </div>
        </article>
        <article className="card ">
          <div>
            <h3 className="m-heading">Learning can be fun… </h3>
            <p className="py-1">
              We believe learning should be a fun experience. For this reason,
              we don’t do all the learning in the classroom.
              <br />
              <br />
              The Learnable experience can not be complete without the bag of
              fun times which you’ll have. To us, every task is an opportunity
              to have some fun. But we do well to throw in a good number of
              activities to add to this. You will find yourself partaking in a
              lot of healthy activities such as cooking, sports, music,
              hangouts, and even random dates.
              <br />
              <br />
              Trust us when we say we know how to have fun.
            </p>
          </div>
          <div>
            <img
              src={require("../../images/divide-rooms.png")}
              alt="photo of a man"
            />
          </div>
        </article>
        <article className="card bg-secondary">
          <div className="six-square py-1">
            <div>
              <img src={require("../../images/nnamdi.png")} alt="" />
              <p>Nnamdi</p>
              <p>Managing Director</p>
            </div>
            <div>
              <img src={require("../../images/osita.png")} alt="" />
              <p>Ositadinma</p>
              <p>Learnable Cordinator</p>
            </div>
            <div>
              <img src={require("../../images/idowu.png")} alt="" />
              <p>Idowu</p>
              <p>Scrum Professional</p>
            </div>
            <div>
              <img src={require("../../images/ezra.png")} alt="" />
              <p>Ezra</p>
              <p>Ass. Learnable Cordinator</p>
            </div>
            <div>
              <img src={require("../../images/david.png")} alt="" />
              <p>David</p>
              <p>Design Lead</p>
            </div>
            <div>
              <img src={require("../../images/emmanuel.png")} alt="" />
              <p>Emmanuel</p>
              <p>Software Lead</p>
            </div>
          </div>
          <div>
            <h2 className="m-heading">Learn from the Experts</h2>
            <p>
              As a learnable intern, you will be learning from the best software
              developers and product designers our industry has to offer. You
              will spend the first 3 months in the classroom with industry
              experts who have a wealth of experience from developing amazing
              products for various customers in our industry.
            </p>
          </div>
        </article>
        <article className="card">
          <div>
            <h3 className="m-heading">Learning doesn’t always have to be in the classroom </h3>
            <p className="py-1">
              As a learnable intern, you will be learning from the best software
              developers and product designers our industry has to offer. You
              will spend the first 3 months in the classroom with industry
              experts who have a wealth of experience from developing amazing
              products for various customers in our industry.
            </p>
          </div>
          <div>
            <img
              src={require("../../images/grid-pics.png")}
              alt="photo of a man"
            />
          </div>
        </article>
        <article className="card bg-primary ">
          <div>
            <img
              src={require("../../images/our-culture.png")}
              alt="our culture"
            />
          </div>
          <div>
            <h3 className="l-heading ">Apply Your Knowledge</h3>
            <p className="py-1">
              Before you’re done with Learnable, you will apply everything
              you’ve learned. You’ll be part of a team made up of 2 designers
              and 4 developers. You’ll get to work alongside the Genesys team on
              projects and we’ll teach you how “the sauce” is made. By combining
              technology, design, and great ideas, your team will have the
              unique opportunity to collaborate with the Genesys team to bring
              your own concept to life, from the first pen sketches to the final
              functioning product. You’ll then get to show off your special
              project to everyone.
            </p>

            <a href="#" class="btn btn-primary">
              Get Started
            </a>
          </div>
        </article>
        <article className='faq'>
         <div> <h2 className="l-heading p-2">FAQ</h2></div>
          <div className='faq-links'>
          
              
          <p><a href="#">How many people can attend a course?</a></p>
           
         <p> <a href="#">What’s the learning experience like?</a></p>

            
          <p><a href="#">Who are the coaches?</a></p>

          

         <p> <a href="#"> How far in advance should we book?</a></p>
           
          <p><a href="#">Can you customize your courses?</a></p>

<a href="#">SEE ALL</a>
        
          {/* <img src={require("../../images/Vector.png")} alt=""/> */}
          </div>
        </article>
      </div>
    </section>
  );
};

export default HomeComponent;
