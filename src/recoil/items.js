import { atom, selector } from 'recoil';

export const listItemsState = atom({
    key: 'listItemsState',
    default: [],
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