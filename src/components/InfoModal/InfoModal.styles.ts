import { createStyles } from '@material-ui/core';

export const styles = (theme) => createStyles({
  paper: {
    position: 'absolute',
    width: 600,
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
