import logo from './logo.svg';
import './App.css';
import './custom.scss';
import star from './Star.png'

function App() {
  return (
    <div className="App">
      <header className="App-header panel">
        <img  src={star} className="App-logo sizer" alt="logo" />
        <p data-testid="line-1">
          Welcome to the shop!
        </p>
        <a data-testid="line-2"
          className="App-link"
          href="https://thatvetdevrob.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Back to world map
        </a>
      </header>
    </div>
  );
}

export default App;
