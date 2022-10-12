import Item from "../Item";

function ListItem({items, onItemChange}){
    return(
        <div className='list-item'>
            {items.map(item => <Item item={item} onItemChange={onItemChange} />)}
        </div>
    )
}

export default ListItem;