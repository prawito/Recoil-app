import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Body from './components/Layout/Body';
import Container from './components/Layout/Container';
import ListItem from './components/ListItem';
import items from './dummy/items.json';
import { listItemsState } from './recoil/items';

function App() {
  const [listItems, setListItems] = useRecoilState(listItemsState);

  useEffect(() => {
    setListItems(items);
  }, [setListItems]);

  return (
    <Container>
      <Header />
      <Body>
        <ListItem items={listItems} />
      </Body>
      <Footer />
    </Container>
  );
}

export default App;