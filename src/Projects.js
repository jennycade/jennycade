import projectList from './projects.json';
import SCREENSHOTS from './assets/portfolioScreenshots';
import tools from './tools.json';
import ICONS from './assets/icons';

// react
import { useState } from 'react';

function Projects(props) {
  // props

  // projectsList JSON -> cards
  const mainProjects = projectList.filter(project => project.category === 'main');

  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul className="projects">

        {
          mainProjects.map(project => (
            <li key={project.id} className="project-card">
              <h3>{project.displayName}</h3>

              <img
                className='screenshot'
                src={SCREENSHOTS[project.id]}
                alt={`Screenshot of ${project.displayName} app`}
              />

              <p>{project.description}</p>

              <dl>
                <dt>Completed</dt>
                <dd>{project.completed}</dd>

                <dt>Built with</dt>
                <dd>
                  {
                    project.tools.map(tool => {
                      const toolInfo = tools.find(t => t.id === tool);
                      return (
                      <span
                        key={tool}
                        className={`pill ${tool}`}
                      >
                        <img className="icon" src={ICONS[tool]} alt="" />
                        {toolInfo.displayName}
                      </span>
                    )})
                  }
                </dd>

                <dt>Links</dt>
                {
                  project.links.map(link => (
                    <dd>
                      <a href={link.url}>
                        {link.linkText}
                      </a>
                    </dd>
                  ))
                }

              </dl>

            </li>
          ))
        }

        {/* <li className="project-card">
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
            <dd><time dateTime="2022-01">January 2022</time></dd>

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
            <dd><time dateTime="2022-02">February 2022</time></dd>

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
            <dd><time dateTime="2021-08">August 2021</time></dd>

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
            <dd><time dateTime="2021-08">August 2021</time></dd>

            <dt>Built with</dt>
            <dd><span className="pill react">React</span></dd>

            <dt>Links</dt>
            <dd><a href="https://github.com/jennycade/simplant">Repo</a></dd>
            <dd><a href="https://jennycade.itch.io/pixel-plant">Demo</a></dd>
          </dl>
        </li> */}

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
  );
}

export default Projects;