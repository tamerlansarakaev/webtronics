import React from 'react';

interface IButton {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  style?: object;
  className?: string;
}

function Button({
  children,
  onClick,
  style,
  className = 'standart-button',
}: IButton) {
  return (
    <button onClick={onClick} style={style} className={className}>
      {children}
    </button>
  );
}

export default Button;
