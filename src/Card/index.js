import styled from 'react-emotion';
import {Spacing, Colors} from '@robinpowered/ui-core';

console.log(Colors.UI.Background.Blue);

const Card = styled.div({
  border: '1px solid gray',
  padding: Spacing.Small,
  color: 'blue',
  backgroundColor: Colors.UI.Background.White
});

export default Card;
