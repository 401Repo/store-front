import logo from '../logo.svg';

function Cart() {
  return (
    <div className="App">
      <header className="App-header panel">
        <img  src={logo} className="App-logo sizer" alt="logo" />
        <p data-testid="line-1">
          Welcome to cart
        </p>
        
      </header>
    </div>
  );
}

export default Cart;