import Categories from './cats'
import acc from '../acc.png'

export default function Clothes() {
  return (
    <div className="App ">
      <header className="App-header  panel">
        <img src={acc} className="App-logo sizer" alt="logo" />
      </header>
      < Categories category={'Armor'} />
    </div>
  );
}
