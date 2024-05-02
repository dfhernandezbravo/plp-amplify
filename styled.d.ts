import 'styled-components';
import { ThemeEasy } from '@ccom-easy-design-system/theme.theme-provider';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeEasy {}
}
