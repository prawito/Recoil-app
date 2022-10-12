import { useEffect, useState } from 'react';
import { atom, selector, useRecoilState, useSetRecoilState } from 'recoil';
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

export const sumItemState = selector({
  key: 'sumItemState',
  get: ({get}) => {
    const items = get(listItemsState);
    const totalItem = items.reduce((sebelum, sekarang) => sebelum + sekarang.value, 0);
    const totalPrice = items.reduce((sebelum, itemSekarang) => sebelum + (itemSekarang.value * itemSekarang.price), 0);

    return {
      totalItem,
      totalPrice,
    }
  }
})

function App() {
  const [listItems, setListItems] = useRecoilState(listItemsState);

  useEffect(() => {
    setListItems(items);
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