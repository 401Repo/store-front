import Categories from './cats'
import armor from '../armor.png'

export default function Clothes() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={armor} className="App-logo sizer" alt="logo" />
      </header>
      < Categories category={'Armor'} />
    </div>
  );
}
