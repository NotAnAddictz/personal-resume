import "./App.css";
import "./index.css";
import Intro from "./components/Intro.tsx";
import Header from "./components/Header.tsx";
import Others from "./components/Others.tsx";
function App() {
  return (
    <div className="background">
      <div className="main main-grid">
        <Header></Header>
        <Intro></Intro>
        <Others></Others>
      </div>
    </div>
  );
}

export default App;
