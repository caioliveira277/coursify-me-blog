import 'styled-components';

interface IColors {
  white: string;
  shadow: string;
  primary: string;
  secondary: string;
  gray_400: string;
  gray_500: string;
  gray_600: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors;
  }
}
