import React from 'react';
import Spacing from '../../styles/spacing';

const buttonStyles = {
  backgroundColor: 'lightblue',
  padding: Spacing.Tiny
};

function Button ({children, ...props}) {
  return (
    <button {...props} style={buttonStyles}>{children}</button>
  );
}

export default Button;
