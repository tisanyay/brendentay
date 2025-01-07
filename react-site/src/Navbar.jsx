import React from 'react';

export default function Navbar({ content, setContent }) {
  const setAboutMe = () => { setContent('About me') }
  const setPortfolio = () => { setContent('Portfolio') }
  const setContact = () => { setContent('Contact') }

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

      <div id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class={`nav-link ${content === 'About me' ? 'active' : ''}`} onClick={setAboutMe} >About me</a>
          </li>
          <li class="nav-item">
            <a class={`nav-link ${content === 'Portfolio' ? 'active' : ''}`} onClick={setPortfolio}>Portfolio</a>
          </li>
          <li class="nav-item">
            <a class={`nav-link ${content === 'Contact' ? 'active' : ''}`} onClick={setContact}>Contact</a>
          </li>
        </ul>
      </div>

    </nav>
  )
}
