import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      accent: string;
      muted: string;
    };
    spacing: Array<string | number>;
    fontSizes: {
      xl: string;
      l: string;
      m: string;
      s: string;
      xs: string;
    };
  }
}
