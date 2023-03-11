import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    gray: Palette['primary'];
    boxShadow: Palette['primary'];
  }
  interface PaletteOptions {
    gray: PaletteOptions['primary'];
    boxShadow: PaletteOptions['primary'];
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fcb5b5',
      //   dark: '#d1564c',
      //   light: '#ea7065',
      contrastText: '#fffcf5',
    },
    secondary: {
      main: '#4e392d',
      //   contrastText: '#fff',
    },
    error: {
      main: '#dd7244',
      dark: '#c23c3c',
    },
    info: {
      main: '#f7f7f7',
      contrastText: '#353531',
    },
    gray: {
      main: '#353531',
    },
    boxShadow: {
      main: '#868686',
    },
  },
});
