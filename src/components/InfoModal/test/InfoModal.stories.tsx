import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import InfoModal from '..';

export default {
  title: 'InfoModal',
  component: InfoModal,
};

export const TestTitle = () => (
  <InfoModal
    isOpen
    onClose={action('close')}
    render={() => (
      <>
        <span>Lizzo</span>
        <span>blah</span>
      </>
    )}
  />
);
