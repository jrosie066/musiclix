import React, { useState, ChangeEvent } from 'react';
import { TextField, Button } from '@material-ui/core';

export interface Props {
  classes?: any;
  onSearchClick: (searchItem: string) => void;
};

const SearchField = (props: Props): JSX.Element => {
  const [searchItem, setSearchItem] = useState('');
  const { classes, onSearchClick } = props;

  // set state based on user input
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { currentTarget: { value } } = event;
    setSearchItem(value);
  };
  const handleSearchClick = (): void => {
    onSearchClick(searchItem);
  };
  return (
    <div className={classes.root}>
      <TextField
        id="outlined-search"
        label="Find an Artist"
        type="search"
        variant="outlined"
        fullWidth
        onChange={handleOnChange}
      />
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={handleSearchClick}
      >
        Search
      </Button>
    </div>
  );
};

export { SearchField };
