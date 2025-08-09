import logo from './logo.svg';
import git1 from './git1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* React spinning logo */}
        <img src={logo} className="App-logo" alt="logo" />

        <p>Dhakshayani !!!</p>

        <a
          className="App-link"
          href="https://learn.github.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn GITHUB through "GITHUB Learn" !!
        </a>

        {/* Cute picture in the corner */}
        <img
  src={git1}
  alt="git logo"
  style={{
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    width: '180px',        // bigger size
    height: 'auto',        // keep proportions
    borderRadius: '15px',  // rounded corners
    boxShadow: '0px 4px 8px rgba(0,0,0,0.3)' // subtle shadow
  }}
/>
      </header>
    </div>
  );
}

export default App;
