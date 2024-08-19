import TallyList from "./components/Tally/TallyList";
import "./App.css";

function App() {
  return (
    <div>
      <h3 className="header">Automated Tally System</h3>
      <main>
        <TallyList />
      </main>
      <p className="footer">Copyright © Benedict Avenido 2024</p>
    </div>
  );
}

export default App;
