// fonts
import '@fontsource/raleway/300-italic.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/500.css';

import './App.css';

import { useState } from 'react';

// images
import jennyPhoto from './assets/optimized/jzonka.jpg';

// components
import Languages from './Languages';
import Projects from './Projects';

function App() {
  // state
  const [projectKeyword, setProjectKeyword] = useState('');

  return (
    <div className="App">
      <menu className="nav">
        <li className="nonactivateable">
          <a href="#headline">
            <h1>Jenny Zonka</h1>
            <h2>Full Stack Developer</h2>
          </a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </menu>

      <main>
        <section id="headline">
          <h1>Jenny Zonka, Full Stack Developer</h1>

          <img
            src={jennyPhoto}
            alt="Jenny Zonka"
            className="large-circle"
          />
          <p>I'm a full-stack developer who loves to make useful and interesting web apps. I have previous experience in education, biology research, and sustainable agriculture.</p>

          <Languages />

        </section>

        <Projects />

        <section id="about">
          <h2>About</h2>
          
          <section>
            <h3>Bio</h3>
            <p>I love to learn and I love to make things. I have been a teacher, a scientist, and a farmer. The throughline in all my careers is building things and solving problems with code.</p>

            <p>These days I am a stay-at-home mom, and during my toddler's naps I work my way through the open-source curriculum <a href="https://www.theodinproject.com/">The Odin Project</a>. As I near the end of the curriculum, I am excited to look for an opportunity to pursue web development full-time and work as part of a team.</p>
          </section>

          <section>
            <h3>Resume</h3>
            <p><a href="assets/JennyZonka_resume.pdf">PDF</a></p>
          </section>
          
          <section>
            <h3>
              Interests and Hobbies
            </h3>
            <ul>
              <li>Cooking</li>
              <li><a href="https://humblewood.com/">DMing a weekly D&D game</a></li>
              <li><a href="https://upchieve.org/">Volunteer tutoring</a></li>
              <li>Baking bread</li>
            </ul>
          </section>
        </section>

        <section id="contact">
          <h2>Contact</h2>

          <p>I'm currently available for full-stack, front-end, or back-end positions.</p>

          <ul>
            <li>
              <img src="assets/icons/gmail.svg" alt="Mail icon" className="icon" />
              <a href="mailto:jennyczonka@gmail.com">jennyczonka@gmail.com</a>
            </li>
            <li>
              <img src="assets/icons/github.svg" alt="Github icon" className="icon" />
              <a href="https://github.com/jennycade/">jennycade</a>
            </li>
            <li>
              <img src="assets/icons/linkedin.svg" alt="LinkedIn icon" className="icon" />
              <a href="https://www.linkedin.com/in/jenny-zonka-6739343/">Jenny Zonka</a>
            </li>
          </ul>
        </section>
      </main>
  </div>
  );
}

export default App;