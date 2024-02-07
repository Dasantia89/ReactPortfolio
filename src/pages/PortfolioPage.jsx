// This is a static page mocking an "About Us" section for our fake user data
export default function AboutPage() {
    return (
      <section id="Work" class="Container">
      <p class="Label">Work</p>
      <section id="apps">
          <a  class="imgholder" href="https://github.com/Dasantia89/project1"><img id="first-app"
                  src="./Assets/images/meal.png" alt="MealMaster"></img>
              <section class="title">
                  <h2>MealMaster</h2>
                  <p>Javascript/HTML/Jquery/Bootstrap</p>
              </section>
          </a>
          <a class="imgholder" href="https://github.com/Santda/Blipp"><img class="app"
                  src="./Assets/images/blipp.png" alt="Blipp social media app"></img>
              <section class="title">
                  <h2>BLIPP Social Media App</h2>
                  <p>Android Studio/Firebase</p>
              </section>
          </a>
          <a class="imgholder" href="https://github.com/espolhemus/GroupProject02"><img class="app"
                  src="./Assets/images/book.png" alt="Java GPA Calculator app"></img>
              <section class="title">
                  <h2>BookMaster</h2>
                  <p>Node.js/Express/Sequelize/Tailwind/Handlebars</p>
              </section>
          </a>
          <a class="imgholder" href="https://dasantia89.github.io/Mod-1-Horiseon-Social-Solution-Services/"><img
                  class="app" src="./Assets/images/horiseon.jpg" alt="Horiseon Social Solution Services Website"></img>
              <section class="title">
                  <h2>Horiseon Website</h2>
                  <p>Html/Css</p>
              </section>
          </a>
          <a id="title4" class="imgholder" href="https://dasantia89.github.io/prework-study-guide/"><img
                  class="app" src="./Assets/images/study.jpg" alt="Prework Study Guide"></img>
              <section class="title">
                  <h2>Prework Study Guide</h2>
                  <p>Html</p>
              </section>
          </a>
      </section>
  </section>
    );
  }
  