import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Body from './components/Layout/Body';
import Container from './components/Layout/Container';
import ListItem from './components/ListItem';
import items from './dummy/items.json';

function App() {
  return (
    <Container>
      <Header />
      <Body>
        <ListItem items={items} />
      </Body>
      <Footer />
    </Container>
  );
}

export default App;