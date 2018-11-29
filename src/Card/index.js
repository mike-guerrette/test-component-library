import React from 'react';

const styles = {
  border: '1px solid gray',
  padding: 20
};

export default function Card ({children}) {
  return <div style={styles}>{children}</div>;
}
