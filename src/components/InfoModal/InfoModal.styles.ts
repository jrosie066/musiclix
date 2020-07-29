import { createStyles } from '@material-ui/core';

// uncomment the theme parameter if this component will
// utilize your theme styles
export const styles = (theme) => createStyles({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.common.white,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  close: {
    float: 'right',
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.secondary.main,
    },
  },
});
