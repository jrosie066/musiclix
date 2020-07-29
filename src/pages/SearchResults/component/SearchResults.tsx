import React from 'react';
import { Typography, Container } from '@material-ui/core';
import ProfileCard from '../../../components/ProfileCard';
import InfoModal from '../../../components/InfoModal';

export interface Props {
  classes?: any;
  onClick: (mbid: string) => void;
  isModalOpen: boolean;
  search: any;
};

const SearchResults = (props: Props): JSX.Element => {
  const {
    classes, onClick, search, isModalOpen,
  } = props;
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Typography
          className={classes.pageTitle}
          variant="h4"
        >
          Select an artist to learn more about...
        </Typography>
        <div className={classes.cardContainer}>
          {search.artists.map((artist) => (
            <div
              className={classes.card}
              key={artist.mbid}
              onClick={() => onClick(artist.mbid)}
              role="button"
              tabIndex={0}
              onKeyPress={() => onClick(artist.mbid)}
            >
              <ProfileCard id={artist.mbid} name={artist.name} />
            </div>
          ))}
        </div>
      </Container>
      <InfoModal
        isOpen={isModalOpen}
        render={() => <div>ji</div>}
        onClose={() => { }}
      />
    </div>
  );
};

export { SearchResults };
