import React from 'react';
import ProfileCard from '..';

export default {
  title: 'ProfileCard',
  component: ProfileCard,
};

export const TestTitle = () => (
  <ProfileCard
    name="Cher"
    id="23423432"
  />
);
