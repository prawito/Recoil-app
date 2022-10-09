import Item from "../Item";

const items = [
    {
        id: 1,
        name: 'Makanan Sehat',
        img: 'https://source.unsplash.com/1600x900/?healty-food',
        price: 50000,
        value: 0
    },
    {
        id: 2,
        name: 'Makanan Unik',
        img: 'https://source.unsplash.com/1600x900/?food',
        price: 65000,
        value: 0
    },
    {
        id: 3,
        name: 'Makanan Pedas',
        img: 'https://source.unsplash.com/1600x900/?spicy-food',
        price: 50000,
        value: 0
    },
    {
        id: 4,
        name: 'Minuman Segar',
        img: 'https://source.unsplash.com/1600x900/?drinks',
        price: 40000,
        value: 2
    },
]

function ListItem(){
    return(
        <div className='list-item'>
            {items.map(item => <Item item={item} />)}
        </div>
    )
}

export default ListItem;