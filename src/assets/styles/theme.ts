import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',

    primary: {
      main: '#29b6f6',
      light: '#73e8ff',
      dark: '#0086c3',
    },
    secondary: {
      main: '#f44336',
      light: '#ff7961',
      dark: '#ba000d',
    },
    background: {
    },
  },
  typography: {
    fontFamily: [
      // 'Fjalla One',
      // 'Lato',
      'Source Sans Pro',
      'Arial',
      'sans-serif'
    ].join(','),
  },
});
