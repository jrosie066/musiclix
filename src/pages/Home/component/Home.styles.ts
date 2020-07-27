import { createStyles } from '@material-ui/core';

export const styles = (theme) => createStyles({
  root: {
    background: theme.palette.background.default,
    height: '100vh',
  },
  body: {
    paddingTop: '30%',
  },
  searchFieldContainer: {
    width: '100%',
    marginTop: '20px',
  },
  title: {
    marginLeft: '-6px',
  },
  tagline: {
    color: theme.palette.text.primary,
  },
});
