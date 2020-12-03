// Redux Magic!! Trust that it's doing what it says it's doing, based on the names of vars
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// REDUCERS, just a function, (which will be used to set initial state)
import categories from './category_reducer';
import products from './inventory_reducer';
import cart from './cart_reducer';


let reducers = combineReducers({ categories, products, cart });

let store = () => {
  // tons of magic here, our logic hits some redux, this makes our store consumable by something
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();