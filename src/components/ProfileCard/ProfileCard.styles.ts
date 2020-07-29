import { createStyles } from '@material-ui/core';

// uncomment the theme parameter if this component will
// utilize your theme styles
export const styles = (/* theme */) => createStyles({
  root: {
    width: '100%',
    height: '100%',
    minHeight: '150px',
    '&:hover': {
      cursor: 'pointer',
      boxShadow: '0 2px 12px 2px rgba(244, 67, 54,0.75)',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: '8px',
    fontSize: '2.5rem',
  },
  artistName: {
    fontSize: '1.5rem',
  },
});
