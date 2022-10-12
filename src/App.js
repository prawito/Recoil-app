import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Body from './components/Layout/Body';
import Container from './components/Layout/Container';
import ListItem from './components/ListItem';
import items from './dummy/items.json';

function App() {
  const [listItems, setListItems] = useState([]);
  const [totalItem, setTotalItem] = useState(0);

  const sumItem = (itemsArray) => {
    const total = itemsArray.reduce((sebelum, sekarang) => sebelum + sekarang.value, 0);
    setTotalItem(total);
  }

  const onItemChange = (itemChange) => {
    const newArray = listItems.map(item => {
      if(item.id === itemChange.id){
        return itemChange;
      } else {
        return item;
      }
    })
    setListItems(newArray);
    sumItem(newArray);
  }

  useEffect(() => {
    setListItems(items);
    sumItem(items);
  }, []);

  return (
    <Container>
      <Header totalItem={totalItem} />
      <Body>
        <ListItem items={listItems} onItemChange={onItemChange} />
      </Body>
      <Footer />
    </Container>
  );
}

export default App;