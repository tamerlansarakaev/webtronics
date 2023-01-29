import React from 'react';
import Image from 'next/image';
import { ReactSVG } from 'react-svg';

interface ICartItem {
  src: string;
  title: string;
}

export default function CartItem({ src, title }: ICartItem) {
  return (
    <div className="cart-elements">
      <Image
        src={require('../../../public/icons/Subtract.svg').default}
        alt="icon"
        className="cart-bg"
      />
      <ReactSVG src={src} width={162} />
      <span className="cart-elements-title">{title}</span>
    </div>
  );
}
