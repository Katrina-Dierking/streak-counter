
import './App.css';
import { useStreak } from 'use-streak';

function App() {

  const today = new Date();
  const {currentCount} = useStreak(localStorage, today)
  return (
    <div className="App">
      <h2>Streak Counter</h2>
      <div>
        <span style={{ fontSize: "3rem" }} role="img" aria-label="fire emoji">
          🔥
        </span>
      </div>
      <p style={{ fontSize: "1.5rem" }}>
        {currentCount} day{currentCount > 1 ? "s" : ""}
      </p>
    </div>
  );
}

export default App;
