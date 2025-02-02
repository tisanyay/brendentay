import React from 'react';

export default function Portfolio() {
  return (
    <div className="container-fluid content-box bg-light" id="about-me">
      <section>
        <h2>Education</h2>

        <div className="item">
            <small>2021-2024</small><br />
            <b>Singapore Polytechnic &mdash; Diploma in Applied AI and Analytics</b>
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
          <b><a href="https://github.com/tisanyay/IntrinsicMotivationRL" target="_blank" rel="noopener noreferrer">Intrinsic motivation (reinforcement learning) with Contra-Nes</a></b>
        </div>
        <hr />

        <div className="item">
          <b><a href="https://github.com/tisanyay/expensetracker/tree/master" target="_blank" rel="noopener noreferrer">Expenditure tracker using personal bank statements</a></b>
        </div>
        <hr />

        <div className="item">
          <b><a href="https://github.com/tisanyay/GANs" target="_blank" rel="noopener noreferrer">Generative Adversarial Networks (GANs) on CIFAR-10 dataset</a></b>
        </div>
        <hr />

        <div class="item">
          <b><a href="https://gitlab.com/2914-st1505/ca2-daaa2b06-2112914-taybrendenlomibao" target="_blank" rel="noopener noreferrer">Mock Image Cloud Storage Web App using Deep Learning Classifiers</a></b>
        </div>
        <hr />

        <div className="item">
          <b><a href="https://github.com/tisanyay/unsupervised_learning" target="_blank" rel="noopener noreferrer">Unsupervised Learning on company dataset on employee satisfaction</a></b>
        </div>
        <hr />

      </section>


      <section>
        <h2>Hackathons / Competitions</h2>

        <div className="item">
          <small>Finalist</small><br />
          <b>NSCC HPC AI Innovation Challenge</b>
        </div>
        <hr />

        <div className="item">
          <small>Bronze medal</small><br />
          <b>Poly-ITE Olympiad for Informatics</b>
        </div>
        <hr />
      </section>


    </div>
  )
}