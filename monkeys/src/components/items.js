import Categories from './cats'
import logo from '../logo.svg';

export default function Items() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      < Categories category={'Items'} />
    </div>
  );
}
