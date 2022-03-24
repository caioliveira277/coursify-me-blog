import 'styled-components';

interface IColors {
  white: string;
  shadow: string;
  primary: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColors;
  }
}
