import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { listItemsState } from "../../recoil/items";
import currency from "../../utils/currency";
import Counter from "./Counter";

function Item(props){
    const [listItems, setListItems] = useRecoilState(listItemsState);
    const {item} = props;
    const {name, img, price, value} = item;
    const [itemValue, setItemValue] = useState(0);

    const onItemChange = (itemChange) => {
      const newArray = listItems.map(item => {
        if(item.id === itemChange.id){
          return itemChange;
        } else {
          return item;
        }
      })
      setListItems(newArray);
    }

    const onAddItem = () => {
      setItemValue(itemValue + 1);
      onValueChange(itemValue + 1);
    }

    const onRemoveItem = () => {
      setItemValue(0);
    }

    const onValueChange = (valueChange) => {
      const newItem = {...item};
      newItem.value = valueChange;
      onItemChange(newItem);
    }

    useEffect(() => {
      setItemValue(value);
    }, [value]);

    return(
      <div className='item'>
        <img src={img} alt='item-1' />
        <div className='item-info'>
          <p className='item-name'>{name}</p>
          <p className='item-price'>{currency(price)}</p>
          {itemValue > 0 ? <Counter defaultValue={itemValue} onRemoveItem={onRemoveItem} onValueChange={onValueChange} /> : <button className='btn-add' onClick={onAddItem}>Add</button>}
        </div>
      </div>
    )
}

export default Item;