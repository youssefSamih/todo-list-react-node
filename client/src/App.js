import { ThemeProvider } from 'styled-components';
import theme from 'theme/config';
import GlobalStyle from 'theme/global-style';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div>Learn more</div>
      </ThemeProvider>
    </>
  );
};

export default App;
