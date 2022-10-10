import cartIcon from './cart-icon.png';

function Header(){
    return(
        <div className='header'>
            <p className='app-name'>Fuud App</p>
            <div className='cart'>
            <img src={cartIcon} alt='cart-icon' />
            <p className='total-cart-item'>10</p>
            </div>
        </div>
    )
}

export default Header;