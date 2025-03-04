import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const ProjFYP = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front Side */}
      <div
        onClick={() => setIsFlipped(true)}
        className="card"
        style={{ backgroundColor: "#9056e8", cursor: "pointer" }}
      >
        <h2>Enhancing Serverless Benchmarking Tool</h2>
        <ul>
          <li>
            Enhanced single function invocation to workflow invocation using
            Directed Acyclic Graphs
          </li>
          <li>Researched on relation between DAG invocations and Latency</li>
        </ul>
      </div>

      {/* Back Side */}
      <div
        onClick={() => setIsFlipped(false)}
        className="card"
        style={{ backgroundColor: "#9056e8", cursor: "pointer" }}
      >
        <h2>Technologies Used</h2>
        <ul>
          <li>Codebase: Golang</li>
          <li>DAG Generation: Apache Airflow</li>
          <li>Research: Serverless, Cloud Computing, Kubernetes</li>
        </ul>
      </div>
    </ReactCardFlip>
  );
};

export default ProjFYP;
