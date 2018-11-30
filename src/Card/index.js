import styled from 'react-emotion';
import {Spacing, Colors} from '@robinpowered/ui-core';

const Card = styled.div({
  border: `1px solid ${Colors.UI.Border.Default}`,
  padding: Spacing.Small,
  color: 'blue',
  backgroundColor: 'white'
});

export default Card;
