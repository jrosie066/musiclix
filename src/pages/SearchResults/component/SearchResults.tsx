import React from 'react';

export interface Props {
  classes?: any;
  search: any;
};

const SearchResults = (props: Props): JSX.Element => {
  const { classes, search } = props;
  return (
    <div className={classes.root}>
      {search.artists.map((artist) => (
        <div>
          <div>{artist.name}</div>
        </div>
      ))}
    </div>
  );
};

export { SearchResults };
