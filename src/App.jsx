import Container from "./components/Container";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Main from "./components/Main";

function App() {

  return (
    <Container >
      <Layout>
        <Header/>
        <Main />
      </Layout>
    </Container>
  );
}

export default App;
