import React from 'react';

export default function Contact() {
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