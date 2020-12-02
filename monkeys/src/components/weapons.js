import weapon from '../weapon.gif';
import Categories from './cats'
export default function Weapons(props) {
  return (
    <div className="App">
      <header className="App-header panel">
        <img src={weapon} className="App-logo sizer" alt="logo" />
      </header>
  <p>{props.category}</p>
      < Categories category={'Weapons'} />
    </div>
  );
}