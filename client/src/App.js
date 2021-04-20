import TodoMain from 'Components/TodoMain';
import { ThemeProvider } from 'styled-components';
import theme from 'Theme/config';
import GlobalStyle from 'Theme/global-style';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <TodoMain />
      </ThemeProvider>
    </>
  );
};

export default App;
