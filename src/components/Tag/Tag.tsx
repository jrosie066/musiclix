import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Chip } from '@material-ui/core';
import { styles } from './Tag.styles';

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

export default withStyles(styles)(Tag);
