import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../src/styles/theme';

export const renderTheme = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
