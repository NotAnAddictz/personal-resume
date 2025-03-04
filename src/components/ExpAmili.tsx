import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const FlipCardExp1 = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front Side */}
      <div
        onClick={() => setIsFlipped(true)}
        className="card"
        style={{ backgroundColor: "#32a844",cursor:"pointer" }}
      >
        <h2>Software Engineer Intern</h2>
        <ul>
          <li>AI Chatbot to convert NL to SQL || Semantic Queries</li>
          <li>Prompt Engineering for LLMs to output desired results</li>
          <li>Web Scraper to retrieve research papers daily</li>
          <li>Embedding & Vector DB to retrieve results semantically</li>
        </ul>
      </div>

      {/* Back Side */}
      <div
        onClick={() => setIsFlipped(false)}
        className="card"
        style={{ backgroundColor: "#32a844",cursor:"pointer" }}
      >
       <h2>Technologies Used</h2>
        <ul>
          <li>LLMs: GPT, Gemini, Llama (OpenRouter)</li>
          <li>Database: MongoDB Atlas, MySQL</li>
          <li>Python (bs4,requests,Selenium)</li>
          <li>Embedding: Ada-002</li>
        </ul>

      </div>
    </ReactCardFlip>
  );
};

export default FlipCardExp1;
