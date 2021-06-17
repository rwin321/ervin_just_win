const About = () => {
  return (
    <main className="about">
      <div className="about__conainer">
        <section className="about__conainer-hard">
          <h2>hard skills</h2>
          <ul className="menu">
            <li className="menu__item">
              Main: <br />
              JS, HTML, CSS (SASS/SCSS), Node.js
            </li>
            <li className="menu__item">
              <h2>Libraries: </h2>
              React.js, react-redux, React-router-dom
              <br />
              <br />
              Redux, redux-toolkit, Redux-Thunk, redux-persist, reselect
            </li>
            <li className="menu__item">
              <h2>Material UIs:</h2>
              Material-UI, Matrialize, Bootstrap, react-bootstrap, animate
            </li>
          </ul>
        </section>
        <aside className="about__conainer-hard">
          <h2>What you need to know about me:</h2>
          <article>
            My name is Ervin. I am 22 years old.
            <br />
            I have got an experiance in different working areas.
            <br />
            Programming - is thing which I learn every day last 2 years.
            <br />
            Main aim - to be a fullstack web developer (also fulstack native
            developer)
          </article>
        </aside>
      </div>
      <div className="about__conainer">
        <section className="about__conainer-soft">
          <h2>soft skills</h2>
          <ul className="menu">
            <li className="menu__item">Software development</li>
            <li className="menu__item">Team work</li>
            <li className="menu__item">Ability to learn fastly</li>
            <li className="menu__item">Analytical thinking skills</li>
            <li className="menu__item">Problem solving</li>
          </ul>
        </section>
        <aside className="about__conainer-soft">
          <h2>languages:</h2>
          <ul className="menu language">
            <li className="menu__item">English</li>
            <li className="menu__item">upper-intermedia</li>
            <li className="menu__item">Russian</li>
            <li className="menu__item">native</li>
            <li className="menu__item">Ukrainian</li>
            <li className="menu__item">native</li>
          </ul>
        </aside>
      </div>
    </main>
  );
};

export default About;
