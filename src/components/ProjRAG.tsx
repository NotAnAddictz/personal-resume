import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const ProjRAG = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front Side */}
      <div
        onClick={() => setIsFlipped(true)}
        className="card"
        style={{ backgroundColor: "#cf58ed", cursor: "pointer" }}
      >
        <h2>Retrieval Augmented Generation Projects</h2>
        <ul>
          <li>
            Vector Database to store relevant files from user
            queries
          </li>
          <li>
            Designed Web Scraper to extract property information from
            PropertyGuru
          </li>
        </ul>
      </div>

      {/* Back Side */}
      <div
        onClick={() => setIsFlipped(false)}
        className="card"
        style={{ backgroundColor: "#cf58ed", cursor: "pointer" }}
      >
        <h2>Technologies Used</h2>
        <ul>
          <li>Scraper:Selenium,bs4</li>
          <li>Prototyping: Streamlit</li>
          <li>Database: MongoDB, PostgreSQL</li>
          <li>Data Cleaning: Pandas</li>
        </ul>
      </div>
    </ReactCardFlip>
  );
};

export default ProjRAG;
