import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import SearchField from '..';

export default {
  title: 'SearchField',
  component: SearchField,
};

export const EmptySearchField = () => <SearchField onSearchClick={action('clicked to search')} />;
