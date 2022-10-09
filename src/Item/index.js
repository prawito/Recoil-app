import currency from "../utils/currency";
import Counter from "./Counter";

function Item(props){
    const {item: {name, img, price}} = props;
    return(
      <div className='item'>
        <img src={img} alt='item-1' />
        <div className='item-info'>
          <p className='item-name'>{name}</p>
          <p className='item-price'>{currency(price)}</p>
          <button className='btn-add'>Add</button>
          <Counter />
        </div>
      </div>
    )
}

export default Item;