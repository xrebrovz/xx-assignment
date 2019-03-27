/**
 * @format
 */

import 'react-native';
import React from 'react';
import InboxItem from '../src/components/Inbox/InboxItem';
import renderer from 'react-test-renderer';
  describe('Testing InboxItem', () => {
    it('test data undefined', () => {
      renderer.create(<InboxItem 
        item={undefined}
      />);
    });
    it('test data string', () => {
      renderer.create(<InboxItem 
        item={'xxx'}
      />);
    });
    it('test data null', () => {
      renderer.create(<InboxItem 
        item={null}
      />);
    });
  });
