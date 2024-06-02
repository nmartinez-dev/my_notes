import { createTheme, ThemeProvider } from '@mui/material/styles';

export const AppTheme = (props: any) => {
  const { children } = props;

  const theme = createTheme({
    palette: {
      primary: {
        main: '#00bdab',
        dark: '#000000',
        light: '#ffffff',
      },
      secondary: {
        main: '#ff42ff',
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const SearchButtonTheme = (props: any) => {
  const { children } = props;

  const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
