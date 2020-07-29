import React from 'react';
import { Typography, Container } from '@material-ui/core';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
import ProfileCard from '../../../components/ProfileCard';
import InfoModal from '../../../components/InfoModal';
import { Artist } from '../../../redux/types';

export interface Props {
  classes?: any;
  onClick: (mbid: string) => void;
  isModalOpen: boolean;
  search: any;
  selectedArtist: Artist;
};

const SearchResults = (props: Props): JSX.Element => {
  const {
    classes, onClick, search, isModalOpen, selectedArtist,
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
      {/* not sure if this is a great use case of it
        but here is a component example using render props */}
      {selectedArtist && (
        <InfoModal
          isOpen={isModalOpen}
          render={() => (
            <div className={classes.modalContainer}>
              <div className={classes.header}>
                <SettingsVoiceIcon
                  color="secondary"
                  classes={{
                    root: classes.icon,
                  }}
                />
                <div className={classes.name}>{selectedArtist.name}</div>
              </div>
              <div className={classes.summary}>{selectedArtist.bio?.summary}</div>
            </div>
          )}
          onClose={() => { }}
        />
      )}

    </div>
  );
};

export { SearchResults };
