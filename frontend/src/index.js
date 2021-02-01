import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product';
import ShoppingCart from './ShoppingCart';
import store from './redux/store';
import { Provider } from 'react-redux';

console.log(store.getState());

ReactDOM.render(

  <Provider store={store}>

    <div style={{display: 'flex'}}>
      <Product />
      <ShoppingCart />
    </div>

  </Provider>





,

  document.getElementById('root')
);

