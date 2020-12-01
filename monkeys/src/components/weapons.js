import logo from '../logo.svg';
import Categories from './cats'
export default function Weapons(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
  <p>{props.category}</p>
      < Categories category={'Weapons'} />
    </div>
  );
}