import React from 'react';

export interface Props {
  classes: any;
};

const SearchResults = (props: Props): JSX.Element => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      add stuff here
    </div>
  );
};

export { SearchResults };
