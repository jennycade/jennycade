import projectList from './projects.json';
import SCREENSHOTS from './assets/portfolioScreenshots';
import tools from './tools.json';
import ICONS from './assets/icons';

// react
// import { useState } from 'react';

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
                      
                      // bgColor?
                      const style = {
                        backgroundColor: toolInfo.color
                      }
                      // TODO: figure it out here then move it into its own function elsewhere
                      return (
                      <span
                        key={tool}
                        className={`pill`}
                        style={style}
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
                    <dd key={link.linkText}>
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