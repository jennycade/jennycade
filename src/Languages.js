import Tools from './tools.json';

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
              <img src={`%PUBLIC_URL%/assets/icons/${tool.id}.svg`}
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
          <li><img src="%PUBLIC_URL%/assets/icons/python.svg"
            alt="Python icon"
            className="icon"
            /> Python</li>
          <li><img src="%PUBLIC_URL%/assets/icons/r.svg"
            alt="R icon"
            className="icon"
            /> R</li>
          <li><img src="%PUBLIC_URL%/assets/icons/php.svg"
            alt="PHP icon"
            className="icon"
            /> PHP</li>
          <li><img src="%PUBLIC_URL%/assets/icons/mysql.svg"
            alt="MySQL icon"
            className="icon"
            /> MySQL</li>
          <li><img src="%PUBLIC_URL%/assets/icons/java.svg"
            alt="Java icon"
            className="icon"
            /> Java</li>
        </ul>
      </section>
    </section>
  );
}

export default Languages;