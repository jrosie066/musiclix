import { createStyles } from '@material-ui/core';

// uncomment the theme parameter if this component will
// utilize your theme styles
export const styles = (theme) => createStyles({
  root: {
    // fontWeight: 700,
    fontFamily: 'Fjalla One',
    background: `-webkit-linear-gradient(
      45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main} 80%)`,
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  },
});
