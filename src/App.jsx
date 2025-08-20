import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>Welcome to React</h1>
          <p>A modern React application built with Vite</p>
        </header>
        
        <main className="main">
          <div className="card">
            <h2>Interactive Counter</h2>
            <button 
              className="counter-btn"
              onClick={() => setCount((count) => count + 1)}
            >
              Count is {count}
            </button>
            <p className="counter-text">
              Click the button to increment the counter
            </p>
          </div>
          
          <div className="features">
            <div className="feature">
              <h3>⚡ Fast</h3>
              <p>Built with Vite for lightning-fast development</p>
            </div>
            <div className="feature">
              <h3>⚛️ React</h3>
              <p>Modern React with hooks and functional components</p>
            </div>
            <div className="feature">
              <h3>📦 JavaScript</h3>
              <p>Pure JavaScript for simplicity and flexibility</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App