import React from 'react';

export function AboutMe() {
  return (
    <div className="container-fluid content-box bg-light">
      <section>
        <h2>something</h2>
      </section>
    </div>
  )
}

export function Portfolio() {
  return (
    <div className="container-fluid content-box bg-light" id="about-me">
      <section>
        <h2>Education</h2>

        <div className="item">
            <small>2021-2024</small><br />
            <b>Singapore Polytechnic &mdash; DAAA</b>
        </div>
        <hr />
      
        <div className="item">
            <small>2016-2021</small><br />
            <b>North Vista Secondary School</b>
        </div>
        <hr />

      </section>


      <section>
        <h2>Project Experience</h2>

        <div className="item">
          <b><a href="https://github.com/tisanyay/IntrinsicMotivationRL">Intrinsic motivation (reinforcement learning) with Contra-Nes</a></b>
        </div>
        <hr />

        <div className="item">
          <b><a href="https://github.com/tisanyay/GANs">Generative Adversarial Networks (GANs) on CIFAR-10 dataset</a></b>
        </div>
        <hr />

        <div class="item">
          <b><a href="https://gitlab.com/2914-st1505/ca2-daaa2b06-2112914-taybrendenlomibao">Mock Image Cloud Storage Web App using Deep Learning Classifiers</a></b>
        </div>
        <hr />

        <div className="item">
          <b><a href="https://github.com/tisanyay/unsupervised_learning">Unsupervised Learning on company dataset on employee satisfaction</a></b>
        </div>
        <hr />

      </section>


      <section>
        <h2>Hackathons/Competitions</h2>

        <div className="item">
          <b>NSCC HPC AI Innovation Challenge</b>
        </div>
        <hr />

        <div className="item">
          <b>Poly-ITE Olympiad for Informatics</b>
        </div>
        <hr />
      </section>


      <section>
        <h2>Certificates</h2>
      </section>
    </div>
  )
}

export function Contact() {
  return (
    <div class="container-fluid content-box bg-light">
      <section>
        <h2>Contact</h2>
        <div className="item">
          <small>Phone</small><br />
          <a href="tel:+6592311728">92311728</a>
        </div>
        <hr />
        <div className="item">
          <small>Email</small><br />
          <a href="mailto:brendentay@gmail.com">brendentay@gmail.com</a>
        </div>
        <hr />
        <div className="item">
          <small>LinkedIn</small><br />
          <a href="https://tinyurl.com/brendentay" target="_blank" rel="noopener noreferrer">Connect</a>
        </div>
        <hr />
      </section>
    </div>
  )
}
