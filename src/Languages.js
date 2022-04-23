import Tools from './tools.json';

// all the images
import Icon_css3 from './assets/icons/css3.svg';

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
            <li key={tool.id}>
              <img src={Icon_css3}
                alt=""
                className="icon"
              />
              {tool.displayName}
            </li>
          ))}
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
  );
}

export default Languages;