import 'styled-components';
import { EasyThemeProvider } from '@ccom-easy-design-system/theme.theme-provider';

declare module 'styled-components' {
  export interface DefaultTheme extends EasyThemeProvider {}
}
