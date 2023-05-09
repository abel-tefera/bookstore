import React from 'react';

const Button = ({ onClick, title, type }) => (
  <button onClick={onClick} type={type === 'button' ? 'button' : 'submit'}>
    {title}
  </button>
);

export default Button;
