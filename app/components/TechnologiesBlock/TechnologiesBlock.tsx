import React from 'react';
import CartItem from '../CartItem/CartItem';

export default function TechnologiesBlock() {
  return (
    <div className="technologies-block">
      <div className="technologies-header">
        <h2 className="technologies-title">Programming technologies</h2>
        <p className="technologies-subtitle">
          By the end, you’ll have the portfolio and interview skills you need to
          start your new career.
        </p>
      </div>

      <div className="technologies-main">
        <CartItem
          src={require('../../../public/icons/angular.svg').default.src}
          title="Angular"
        />
        <CartItem
          src={require('../../../public/icons/react.svg').default.src}
          title="React"
        />
        <CartItem
          src={require('../../../public/icons/vue.svg').default.src}
          title="Vue.js"
        />
        <CartItem
          src={require('../../../public/icons/js.svg').default.src}
          title="JavaScript"
        />
      </div>
    </div>
  );
}
