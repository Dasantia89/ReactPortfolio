// This is a static page mocking an "About Us" section for our fake user data
export default function AboutPage() {
    return (
      <section id="Work" className="Container">
      <p className="Label">Work</p>
      <section id="apps">
          <a  className="imgholder" href="https://github.com/Dasantia89/project1"><img id="first-app"
                  src="./assets/images/meal.png" alt="MealMaster"></img>
              <section className="title">
                  <h2>MealMaster</h2>
                  <p>Javascript/HTML/Jquery/Bootstrap</p>
              </section>
          </a>
          <a className="imgholder" href="https://github.com/espolhemus/GroupProject02"><img className="app"
                  src="./assets/images/bookmaster.png" alt="Bookmaster"></img>
              <section className="title">
                  <h2>Book profile app</h2>
                  <p>Node/Express/Handlebars/Sequelize/Heroku</p>
              </section>
          </a>
          <a className="imgholder" href="https://github.com/austinoler/budget_planner"><img className="app"
                  src="./assets/images/moneymaster.png" alt="MoneyMaster"></img>
              <section className="title">
                  <h2>Budget Planner</h2>
                  <p>MongoDB/Express/React/Node/GrahpQL</p>
              </section>
          </a>
          <a className="imgholder" href="https://dasantia89.github.io/Mod-1-Horiseon-Social-Solution-Services/"><img
                  className="app" src="./assets/images/horiseon.jpg" alt="Horiseon Social Solution Services Website"></img>
              <section className="title">
                  <h2>Horiseon Website</h2>
                  <p>Html/Css</p>
              </section>
          </a>
          <a id="title4" className="imgholder" href="https://dasantia89.github.io/prework-study-guide/"><img
                  className="app" src="./assets/images/study.jpg" alt="Prework Study Guide"></img>
              <section className="title">
                  <h2>Prework Study Guide</h2>
                  <p>Html</p>
              </section>
          </a>
      </section>
  </section>
    );
  }
  