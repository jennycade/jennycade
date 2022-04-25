import './Languages.css';

import Tools from './tools.json';
import ICONS from './assets/icons';

function Languages(props) {

  // tools -> Languages cards
  const mainLanguages = Tools.filter(tool => tool.category === 'main');
  const previousLanguages = Tools.filter(tool => tool.category === 'previous');
  
  return (
    <section className="card-container">

      <section className="card">
        <h4>Languages &amp; Tools</h4>
        <ul>
          {mainLanguages.map((tool) => (
            <li key={tool.id} className="language">
              <img src={ICONS[tool.id]}
                alt=""
                className="icon"
              />
              {tool.displayName}
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h4>Previously Used</h4>
        <ul>
          {previousLanguages.map((tool) => (
            <li key={tool.id} className="language">
              <img src={ICONS[tool.id]}
                alt=""
                className="icon"
              />
              {tool.displayName}
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default Languages;