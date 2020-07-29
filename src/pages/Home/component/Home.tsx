import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import SearchField from '../../../components/SearchField';
import Title from '../../../components/Title';
import { searchArtistAction } from '../../../redux/search/search-reducer';
import { SEARCH_RESULTS_PATH } from '../../../constants/route-paths';

export interface Props {
  classes?: any;
};

const Home = (props: Props): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { classes } = props;
  const handleSearchClick = async (searchItem: string): Promise<void> => {
    try {
      await dispatch(searchArtistAction(searchItem));
      history.push(SEARCH_RESULTS_PATH);
    } catch (e) {
      // navigate to error page and handle error
    }
  };
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
            <SearchField onSearchClick={handleSearchClick} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export { Home };
