import Categories from './cats'
import acc from '../acc.png'

export default function Acc() {
    return (
<div className="App">
      <header className="App-header">
        <img src={acc} className="App-logo sizer" alt="logo" />
      </header>
      < Categories category={'Accesories'} />
    </div>
    );
  }