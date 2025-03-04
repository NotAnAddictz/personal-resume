import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const ExpDSTA = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front Side */}
      <div
        onClick={() => setIsFlipped(true)}
        className="card"
        style={{ backgroundColor: "#e62249", cursor: "pointer" }}
      >
        <h2>Machine Learning & Data Analytics Intern</h2>
        <ul>
          <li>Cleaning, Filtering large datasets using Pandas</li>
          <li>Automated Image Analysis to identify similar images</li>
          <li>Hosted Workshop to teach Python to Students</li>
        </ul>
      </div>

      {/* Back Side */}
      <div
        onClick={() => setIsFlipped(false)}
        className="card"
        style={{ backgroundColor: "#e62249", cursor: "pointer" }}
      >
        <h2>Technologies Used</h2>
        <ul>
          <li>Automation:Selenium</li>
          <li>Computer Vision: RoboFlow</li>
          <li>Machine Learning: Python (Scikit-learn)</li>
          <li>Data Cleaning: Pandas</li>
        </ul>
      </div>
    </ReactCardFlip>
  );
};

export default ExpDSTA;
