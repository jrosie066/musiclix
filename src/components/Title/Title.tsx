import React from 'react';
import { Typography, withStyles } from '@material-ui/core';
import { styles } from './Title.styles';

export interface Props {
  classes?: any;
  text: string;
};

const Title = (props: Props): JSX.Element => {
  const { classes, text } = props;
  return <Typography className={classes.root} variant="h1">{text}</Typography>;
};

export default withStyles(styles)(Title);
