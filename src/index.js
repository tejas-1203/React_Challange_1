import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
      </div>
      <SkillList />
    </div>
  );
}

function Avatar() {
  return <img src="IMG_0074.JPG" alt="Tejashree Jagtap" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Tejashree Jagtap</h1>
      <p>
        Software Engineer at DVI Technologies. Main forte is back-end coding.
        Trying to learn react by going through Udemy courses. I like to watch
        anime, play games, read comics/mangas. Favorite genre is Horror, Action
        and Mysteries. This is just timepass intro. Thank you!
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="C#" emoji="👍" color="yellow" />
      <Skill skill="ASP.NET Core" emoji="👍" color="green" />
      <Skill skill="SQL" emoji="👍" color="red" />
      <Skill skill="MVC" emoji="👍" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
