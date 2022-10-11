import cartIcon from './cart-icon.png';

function Header({totalItem}){
    return(
        <div className='header'>
            <p className='app-name'>Fuud App</p>
            <div className='cart'>
            <img src={cartIcon} alt='cart-icon' />
            {totalItem > 0 && <p className='total-cart-item'>{totalItem}</p>}
            </div>
        </div>
    )
}

export default Header;