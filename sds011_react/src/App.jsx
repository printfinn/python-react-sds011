import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import chipseeLogo from '/chipsee.png'
import './App.css'

function App() {
  const [pm25, setPm25] = useState("N/A")

  // Poll the Python server every 3 seconds.
  useEffect(() => {
    const queryInterval = setInterval(() => {
      fetch("http://127.0.0.1:5000", {mode: "cors"})
      .then((response) => response.json())
      .then((result) => setPm25(result["pm25"]))
      .catch((error) => setPm25("N/A"))
    }, 3000);

    return () => clearInterval(queryInterval);
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.chipsee.com" target="_blank">
          <img src={chipseeLogo} className="logo" alt="Chipsee logo" />
        </a>
      </div>
      <h1>Vite + React + Chipsee</h1>
      <div className="card">
        <button>
          PM2.5 is {pm25}
        </button>
      </div>
    </>
  )
}

export default App
