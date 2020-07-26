import React from 'react';
import { Container } from '@material-ui/core';
import { useStyles } from './Home.styles';
import SearchField from '../../../components/SearchField';

export interface Props {
};

const Home = (props: Props): JSX.Element => {
  console.log(props);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <SearchField />
      </Container>
    </div>
  );
};

export { Home };
