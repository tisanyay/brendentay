import React, { useState } from 'react';
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Contact from './Contact'
import './App.css'
import Navbar from './Navbar'


function Title() {
  return (
    <section>
      <h1>Brenden Tay</h1>
    </section>
  )
}

function Description() {
  return (
    <section>
      <h3>Hi, I'm an SP Applied AI and Analytics (DAAA) graduate pursuing a career in data science</h3>

      <div class="summary">
          <p>Aiming to enroll into SIT Applied AI, I aspire to develop my expertise in machine learning and AI to drive meaningful change in industries like finance, education, and healthcare.</p>
          <p>I have experience in data analytics, data engineering, machine learning, and AI. In addition, I have web development experience in creating machine learning web applications.</p>
          <p>I consider myself to be a quick-learner with a passion for learning.</p>
          <p>I love to work with a team to build amazing applications that tackle real world problems.</p>
      </div>
    </section>
  )
}

function Content({ content }) {
  let Component;
  if (content === 'About me') {
    Component = AboutMe
  } else if (content === 'Portfolio') {
    Component = Portfolio;
  } else if (content === 'Contact') {
    Component = Contact;
  }

  return <Component />
}

function App() {
  const [content, setContent] = useState('About me')

  return (
    <div>
      <section>
        <h1>Brenden Tay</h1>
      </section>

      <section>
        <h3>Hi, I'm an SP Applied AI and Analytics (DAAA) graduate pursuing a career in data science</h3>

        <div className="summary">
            <p>Aiming to enroll into SIT Applied AI, I aspire to develop my expertise in machine learning and AI to drive meaningful change in industries like finance, education, and healthcare.</p>
            <p>I have experience in data analytics, data engineering, machine learning, and AI. In addition, I have web development experience in creating machine learning web applications.</p>
            <p>I consider myself to be a quick-learner with a passion for learning.</p>
            <p>I love to work with a team to build amazing applications that tackle real world problems.</p>
        </div>
      </section>

      <Navbar content={content} setContent={setContent}/>
      <Content content={content} />
    </div>
  )
}

export default App