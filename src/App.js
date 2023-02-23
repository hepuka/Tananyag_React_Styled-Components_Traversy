import { Container } from "./Components/styles/Container.styled";
import { GlobalStyles } from "./Components/styles/Global";
import Header from "./Components/Header";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <h1> HELLOKA</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
