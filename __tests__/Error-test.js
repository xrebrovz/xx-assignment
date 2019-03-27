/**
 * @format
 */

import 'react-native';
import React from 'react';
import Error from '../src/components/Error';
import renderer from 'react-test-renderer';

describe('Testing Error', () => {
  it('renders correctly', () => {
    renderer.create(<Error />);
  });

  it('test data undefined', () => {
    renderer.create(<Error 
      status={undefined}
      description={undefined}
    />);
  });

  it('test data null', () => {
    renderer.create(<Error 
      status={null}
      description={null}
    />);
  });
});