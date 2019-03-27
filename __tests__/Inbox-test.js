/**
 * @format
 */

import 'react-native';
import React from 'react';
import Inbox from '../src/components/Inbox';
import renderer from 'react-test-renderer';

describe('Testing Inbox', () => {
  it('renders correctly', () => {
    renderer.create(<Inbox />);
  });
});