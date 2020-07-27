import React, { SyntheticEvent } from 'react';
import { TextField, Button } from '@material-ui/core';

export interface Props {
  classes?: any;
  onSearchClick: (event: SyntheticEvent) => void;
};

const SearchField = (props: Props): JSX.Element => {
  const { classes, onSearchClick } = props;
  return (
    <div className={classes.root}>
      <TextField
        id="outlined-search"
        label="Find an Artist"
        type="search"
        variant="outlined"
        fullWidth
      />
      <Button variant="contained" color="primary" onClick={onSearchClick}>Seach</Button>
    </div>
  );
};

export { SearchField };
