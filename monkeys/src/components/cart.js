import logo from '../logo.svg';
import Checkout from './checkout'
function Cart() {
  return (
    <div className="App">
      <header className="App-header panel">
        <img  src={logo} className="App-logo sizer" alt="logo" />
        <Checkout />
      </header>
    </div>
  );
}

export default Cart;