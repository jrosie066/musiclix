import { createStyles } from '@material-ui/core';

// uncomment the theme parameter if this component will
// utilize your theme styles
export const styles = (theme) => createStyles({
  root: {
  },
  header: {
    color: theme.palette.primary.main,
    fontFamily: 'Lato',
    fontWeight: 700,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
});
