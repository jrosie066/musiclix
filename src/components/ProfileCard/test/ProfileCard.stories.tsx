import React from 'react';
import ProfileCard from '..';

export default {
  title: 'ProfileCard',
  component: ProfileCard,
};

export const TestTitle = () => (
  <ProfileCard
    image="https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png"
    name="Cher"
  />
);
