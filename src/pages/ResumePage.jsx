// This is a static page mocking an "About Us" section for our fake user data
export default function ResumePage() {
    return (
      <section className ="Container">
            <p id="idlabel" className ="Label">Resume</p>
            <p className ="info">Front-end Proficiencies:
            <ul className = "list-group">
              <li className = "list-group-item">HTML</li>
              <li className = "list-group-item">CSS</li>
              <li className = "list-group-item">Javascript</li>
              <li className = "list-group-item">JQuery</li>
              <li className = "list-group-item">Responsive Design</li>
              <li className = "list-group-item">React</li>
              <li className = "list-group-item">Bootstrap</li>
            </ul>
            Back-end Proficiencies:
            <ul className = "list-group">
              <li className = "list-group-item">API's</li>
              <li className = "list-group-item">Node</li>
              <li className = "list-group-item">Express</li>
              <li className = "list-group-item">MySQL, Sequelize</li>
              <li className = "list-group-item">MongoDB, Mongoose</li>
              <li className = "list-group-item">REST</li>
              <li className = "list-group-item">GraphQL</li>
            </ul>

            </p>
        </section>
    );
  }
  