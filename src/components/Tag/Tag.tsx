import React from 'react';
import { Chip } from '@material-ui/core';

export interface Props {
  classes?: any;
  url: string;
  tag: string;
};

const Tag = (props: Props): JSX.Element => {
  const { classes, url, tag } = props;
  const handleClick = () => {
    window.location.href = url;
  };
  return (
    <Chip
      color="primary"
      className={classes.root}
      label={tag}
      onClick={handleClick}
    />
  );
};

export { Tag };
