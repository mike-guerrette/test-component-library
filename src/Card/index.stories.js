import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '.';

storiesOf('Card', module)
  .add('with text', () => <Card>Hello World!</Card>);
