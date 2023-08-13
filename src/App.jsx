import Avatar from "./components/Avatar";
import Intro from "./components/Intro";
import SkillsList from "./components/SkillsList";

const App = () => {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillsList />
      </div>
    </div>
  );
};

export default App;
