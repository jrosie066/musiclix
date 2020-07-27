import React from 'react';
import { Typography } from '@material-ui/core';

export interface Props {
  classes?: any;
  text: string;
};

const Title = (props: Props): JSX.Element => {
  const { classes, text } = props;
  return <Typography className={classes.root} variant="h1">{text}</Typography>;
};

export { Title };
