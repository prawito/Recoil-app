import Item from "../Item";

function ListItem({items}){
    return(
        <div className='list-item'>
            {items.map(item => <Item item={item} />)}
        </div>
    )
}

export default ListItem;