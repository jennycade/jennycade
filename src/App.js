// fonts
import '@fontsource/raleway/300-italic.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/500.css';

import './App.css';

import { useState } from 'react';

// images
import jennyPhoto from './assets/optimized/jzonka.jpg';

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

          <section className="card-container">
            <section className="card">
              <h4>Languages & Tools</h4>
              <ul>
                <li><img src="assets/icons/react.svg"
                  alt="React icon"
                  className="icon"
                  /> React</li>
                <li><img src="assets/icons/express.svg"
                  alt="Express icon"
                  className="icon"
                  /> Express.js</li>
                <li><img src="assets/icons/javascript.svg"
                  alt="Javascript icon"
                  className="icon"
                  /> Javascript</li>
                <li><img src="assets/icons/html5.svg"
                  alt="HTML5 icon"
                  className="icon"
                  /> Semantic HTML5</li>
                <li><img src="assets/icons/css3.svg"
                  alt="CSS3 icon"
                  className="icon"
                  /> CSS</li>
                <li><img src="assets/icons/mongodb.svg"
                  alt="MongoDB icon"
                  className="icon"
                  /> MongoDB</li>
                <li><img src="assets/icons/firebase.svg"
                  alt="Firebase icon"
                  className="icon"
                  /> Firebase</li>
                <li><img src="assets/icons/git.svg"
                  alt="Git icon"
                  className="icon"
                  /> Git</li>
              </ul>
            </section>
            <section className="card">
              <h4>Previously used</h4>
              <ul>
                <li><img src="assets/icons/python.svg"
                  alt="Python icon"
                  className="icon"
                  /> Python</li>
                <li><img src="assets/icons/r.svg"
                  alt="R icon"
                  className="icon"
                  /> R</li>
                <li><img src="assets/icons/php.svg"
                  alt="PHP icon"
                  className="icon"
                  /> PHP</li>
                <li><img src="assets/icons/mysql.svg"
                  alt="MySQL icon"
                  className="icon"
                  /> MySQL</li>
                <li><img src="assets/icons/java.svg"
                  alt="Java icon"
                  className="icon"
                  /> Java</li>
              </ul>
            </section>
          </section>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <ul className="projects">
            <li className="project-card">
              <h3>Blog API</h3>

              <img src="assets/portfolioScreenshots/blog-frontend.jpg" alt="Blog frontend screenshot" />

              <p>Blog site with a RESTful API, public front end, and admin site. This is a project for <a href="https://www.theodinproject.com/lessons/nodejs-blog-api">The Odin Project</a>.</p>

              <dl>
                <dt>Currently building</dt>

                <dt>Built with</dt>
                <dd><span className="pill mongodb">MongoDB</span> <span className="pill node">Node</span> <span className="pill express">Express</span> <span className="pill react">React</span> <span className="pill react-router">React Router</span></dd>

                <dt>Repos</dt>
                <dd><a href="https://github.com/jennycade/blog-api">API</a></dd>
                <dd><a href="https://github.com/jennycade/blog-frontend">Public frontend</a></dd>
                <dd><a href="https://github.com/jennycade/blog-admin">Admin frontend</a></dd>
              </dl>
            </li>

            <li className="project-card">
              <h3>Clotion</h3>

              <img src="assets/portfolioScreenshots/clotion.jpg" alt="Clotion app screenshot" />

              <p>Simple clone of <a href="https://www.notion.so/">Notion</a> with rich text editing and databases. This was the final project for the Javascript course in <a href="https://www.theodinproject.com/lessons/node-path-javascript-javascript-final-project">The Odin Project</a>.</p>

              <dl>
                <dt>Completed</dt>
                <dd><time datetime="2022-01">January 2022</time></dd>

                <dt>Built with</dt>
                <dd><span className="pill react">React</span> <span className="pill firebase">Firebase</span> <span className="pill"><a href="https://docs.slatejs.org/">Slate</a></span> <span className="pill react-router">React Router</span></dd>

                <dt>Links</dt>
                <dd><a href="https://github.com/jennycade/clotion">Repo</a></dd>
                <dd><a href="https://clotion-5e4b4.web.app/">Demo</a></dd>
              </dl>
            </li>

            <li className="project-card">
              <h3>Ye Olde Adventuring Shoppe</h3>

              <img src="assets/portfolioScreenshots/ye-olde-aventuring-shoppe.jpg" alt="Screenshot of Battleaxe database entry" />

              <p>Editable database of weapons, armor, and shops for Dungeons &amp; Dragons 5e. This was a project for <a href="https://www.theodinproject.com/lessons/nodejs-inventory-application">The Odin Project</a>.</p>

              <dl>
                <dt>Completed</dt>
                <dd><time datetime="2022-02">February 2022</time></dd>

                <dt>Built with</dt>
                <dd><span className="pill mongodb">MongoDB</span> <span className="pill nod">Node</span> <span className="pill express">Express</span> <span className="pill pug">PUG</span> <span className="pill bootstrap">Bootstrap</span></dd>

                <dt>Links</dt>
                <dd><a href="https://github.com/jennycade/ye-olde-adventuring-shoppe">Repo</a></dd>
                <dd><a href="https://fathomless-anchorage-69781.herokuapp.com/">Demo</a></dd>
              </dl>
            </li>

            <li className="project-card">
              <h3>Internet Scavenger Hunt</h3>

              <img src="assets/portfolioScreenshots/scavenger-hunt.jpg" alt="Scavenger hunt screenshot" />

              <p>An internet scavenger hunt for the <a href="https://www.theodinproject.com/lessons/node-path-javascript-where-s-waldo-a-photo-tagging-app">"Where's Waldo" project in The Odin Project</a>. Art by <a href="https://aaronzonka.com/">Aaron Zonka</a>.</p>

              <dl>
                <dt>Completed</dt>
                <dd><time datetime="2021-08">August 2021</time></dd>

                <dt>Built with</dt>
                <dd><span className="pill react">React</span> <span className="pill firebase">Firebase</span></dd>

                <dt>Links</dt>
                <dd><a href="https://github.com/jennycade/scavenger-hunt">Repo</a></dd>
                <dd><a href="https://internet-scavenger-hunt.web.app/">Demo</a></dd>
              </dl>
            </li>

            <li className="project-card">
              <h3>Pixel Plant</h3>

              <img src="assets/portfolioScreenshots/pixelplant.jpg" alt="Pixel Plant game screenshot" />

              <p>Educational game created for the <a href="https://itch.io/jam/top-jam-1/rate/1151984">TOP-Jam 1 Edutainment game jam</a>. Rated #7 for Creativity/Originality. </p>

              <dl>
                <dt>Completed</dt>
                <dd><time datetime="2021-08">August 2021</time></dd>

                <dt>Built with</dt>
                <dd><span className="pill react">React</span></dd>

                <dt>Links</dt>
                <dd><a href="https://github.com/jennycade/simplant">Repo</a></dd>
                <dd><a href="https://jennycade.itch.io/pixel-plant">Demo</a></dd>
              </dl>
            </li>

            <li>
              <h3>Coding projects in previous jobs</h3>

              <p>Though I am new to the tech sector, I am not new to using programming on the job. Below is a sample of coding projects I've undertaken in my previous positions.</p>

              <dl>
                <dt>👩🏻‍🏫 Teaching</dt>
                <dd>Wrote a python script to create new seating charts that takes into account student preference, teacher/special ed support staff preference, and students' special needs.</dd>
                <dd>R analysis and data visualization to evaluate patterns on exams.</dd>

                <dt>🔬 Biology research</dt>
                <dd>Used R, python, and ImageJ to analyze microscopy data and generate data visualizations (e.g. for <a href="https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.2005189">this paper</a>). Built and documented a pipeline for colleagues to use for the same types of analyses without needing to write code themselves.</dd>

                <dt>🥕 Sustainable agriculture</dt>
                <dd>Developed a crop database using PHP and MySQL for tracking vegetable plantings at multiple locations.</dd>
                <dd>Adapted the crop database to also support custom CSA box ordering based on what the farmer labeled available each week.</dd>

                <dt>🌎 Environmental education</dt>
                <dd>Working on a small team, I relaunched a nonprofit website and added an admin site (built with PHP and MySQL) to facilitate matching high schoolers to volunteer opportunities.</dd>

                <dt>🥳 Just for fun</dt>
                <dd>Wrote a script for running my family's secret santa for the last three years. The script blacklists certain matches (e.g. spouses) and generates emails with each participant's giftee.</dd>
              </dl>
            </li>

          </ul>
        </section>

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