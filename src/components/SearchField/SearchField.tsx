import React from 'react';
import { TextField } from '@material-ui/core';
import { useStyles } from './SearchField.styles';

export interface Props {
};

const SearchField = (props: Props): JSX.Element => {
  console.log(props);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
    </div>
  );
};

export { SearchField };
