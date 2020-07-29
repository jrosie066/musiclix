import { createStyles } from '@material-ui/core';

export const styles = (theme) => createStyles({
  root: {
    background: theme.palette.background.default,
    color: 'white',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pageTitle: {
    paddingTop: '5%',
  },
  card: {
    display: 'flex',
    flexGrow: 1,
    flexBasis: '20%',
    width: '20%',
    margin: '10px',
  },
});
