import currency from "../utils/currency";
import Counter from "./Counter";

function Item(props){
    const {item: {name, img, price, value}} = props;
    return(
      <div className='item'>
        <img src={img} alt='item-1' />
        <div className='item-info'>
          <p className='item-name'>{name}</p>
          <p className='item-price'>{currency(price)}</p>
          {value > 0 ? <Counter /> : <button className='btn-add'>Add</button>}
        </div>
      </div>
    )
}

export default Item;