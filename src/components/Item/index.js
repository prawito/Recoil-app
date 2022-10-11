import { useEffect, useState } from "react";
import currency from "../../utils/currency";
import Counter from "./Counter";

function Item(props){
    const {item: {name, img, price, value}} = props;
    const [itemValue, setItemValue] = useState(0);

    const onAddItem = () => {
      setItemValue(itemValue + 1);
    }

    const onRemoveItem = () => {
      setItemValue(0);
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
          {itemValue > 0 ? <Counter defaultValue={itemValue} onRemoveItem={onRemoveItem} /> : <button className='btn-add' onClick={onAddItem}>Add</button>}
        </div>
      </div>
    )
}

export default Item;