import React from 'react';
import ProfileCard from '../../../components/ProfileCard';

export interface Props {
  classes?: any;
  search: any;
};

const SearchResults = (props: Props): JSX.Element => {
  const { classes, search } = props;
  const handleOnClick = (event) => {
    console.log(event);
  };
  return (
    <div className={classes.root}>
      {search.artists.map((artist) => (
        <div
          className={classes.card}
          key={artist.mbid}
          onClick={() => handleOnClick(artist.mbid)}
          role="button"
          tabIndex={0}
          onKeyPress={() => handleOnClick(artist.mbid)}
        >
          <ProfileCard id={artist.mbid} name={artist.name} onClick={handleOnClick} />
        </div>
      ))}
    </div>
  );
};

export { SearchResults };
