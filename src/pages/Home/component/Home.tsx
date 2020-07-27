import React from 'react';
import { Container, Grid } from '@material-ui/core';
import SearchField from '../../../components/SearchField';
import Title from '../../../components/Title';

export interface Props {
  classes?: any;
};

const Home = (props: Props): JSX.Element => {
  const { classes } = props;
  const handleSearchClick = (event) => {
    console.log(event);
  };
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Grid container justify="center">
          <Grid container item>
            <Title text="musiclix" />
          </Grid>
          <Grid item className={classes.searchFieldContainer}>
            <SearchField onSearchClick={handleSearchClick} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export { Home };
