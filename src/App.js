import './App.css';
import Footer from './Footer';
import Header from './Header';
import Body from './Layout/Body';
import Container from './Layout/Container';
import ListItem from './ListItem';

function App() {
  return (
    <Container>
      <Header />
      <Body>
        <ListItem />
      </Body>
      <Footer />
    </Container>
  );
}

export default App;