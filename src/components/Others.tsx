import "../css/Others.css";
import C from "../assets/C.png";
import Python from "../assets/Python.png";
import Java from "../assets/Java.png";
import Html from "../assets/html-css.png";
import SQL from "../assets/SQL.png";
import ExpAmili from "./ExpAmili.tsx";
import ExpDSTA from "./ExpDSTA.tsx";
import ProjFYP from "./ProjFYP.tsx";
import ProjRAG from "./ProjRAG.tsx";
const Others = () => {
  return (
    <div className="others-main">
      <div>
        <h1 className="others-header">Experience</h1>
        <div className="section-text experience">
          <ExpAmili></ExpAmili>
          <ExpDSTA></ExpDSTA>
        </div>
      </div>
      <div>
        <h1 className="others-header">Skills</h1>
        <div className="card skills section-text">
          <div className="center flexbox">
            <img className="image" src={Python} alt="Python" /> <h2>Python</h2>
          </div>
          <div className="center flexbox">
            <img className="image" src={C} alt="C" /> <h2>C</h2>
          </div>
          <div className="center flexbox">
            <img className="image" src={Java} alt="Java" /> <h2>Java</h2>
          </div>
          <div className="center flexbox">
            <img className="image" src={Html} alt="HTML/CSS" />{" "}
            <h2>Html/Css</h2>
          </div>
          <div className="center flexbox">
            <img className="image" src={SQL} alt="SQL" /> <h2>SQL</h2>
          </div>
        </div>
      </div>
      <div>
        <h1 className="others-header">Projects</h1>
        <div className="section-text experience">
          <ProjFYP></ProjFYP>
          <ProjRAG></ProjRAG>
        </div>
      </div>
    </div>
  );
};

export default Others;
