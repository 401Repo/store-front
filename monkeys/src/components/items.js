import Categories from './cats'
import item from '../item.gif';

export default function Items() {
  return (
    <div className="App">
      <header className="App-header  panel">
        <img src={item} className="App-logo sizer" alt="logo" />
      </header>
      < Categories category={'Items'} />
    </div>
  );
}
