import { useEffect, useState } from 'react';
import { atom, useRecoilState, useSetRecoilState } from 'recoil';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Body from './components/Layout/Body';
import Container from './components/Layout/Container';
import ListItem from './components/ListItem';
import items from './dummy/items.json';

export const listItemsState = atom({
  key: 'listItemsState',
  default: [],
});

export const totalItemState = atom({
  key: 'totalItemState',
  default: 0,
});

export const totalPriceState = atom({
  key: 'totalPriceState',
  default: 0,
});

function App() {
  const [listItems, setListItems] = useRecoilState(listItemsState);
  const setTotalItem = useSetRecoilState(totalItemState);
  const setTotalPrice = useSetRecoilState(totalPriceState);

  const sumItem = (itemsArray) => {
    const total = itemsArray.reduce((sebelum, sekarang) => sebelum + sekarang.value, 0);
    const totalPrice = itemsArray.reduce((sebelum, itemSekarang) => sebelum + (itemSekarang.value * itemSekarang.price), 0);
    setTotalItem(total);
    setTotalPrice(totalPrice);
  }

  useEffect(() => {
    setListItems(items);
    sumItem(items);
  }, []);

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