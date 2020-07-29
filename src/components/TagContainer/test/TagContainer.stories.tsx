import React from 'react';
import TagContainer from '..';

export default {
  title: 'TagContainer',
  component: TagContainer,
};

const tags = [
  {
    name: 'pop',
    url: 'https://www.last.fm/tag/pop',
  },
  {
    name: 'female vocalists',
    url: 'https://www.last.fm/tag/female+vocalists',
  },
  {
    name: '80s',
    url: 'https://www.last.fm/tag/80s',
  }
];
export const TestTitle = () => <TagContainer tags={tags} />;
