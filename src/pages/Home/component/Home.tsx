import React from 'react';

import { Container, Grid } from '@material-ui/core';
import SearchField from '../../../components/SearchField';
import Title from '../../../components/Title';

export interface Props {
  classes?: any;
  onSearchClick: (searchItem: string) => void;
};

const Home = (props: Props): JSX.Element => {
  const { classes, onSearchClick } = props;
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container justify="center" className={classes.body}>
          <Grid container item className={classes.title}>
            <Title text="musiclix" />
          </Grid>
          <Grid container item className={classes.tagline}>
            <div>Find all of the info on your favorite artists..</div>
          </Grid>
          <Grid item className={classes.searchFieldContainer}>
            <SearchField onSearchClick={onSearchClick} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export { Home };
