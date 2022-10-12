import currency from "../../utils/currency";

function Footer({totalPrice}){
    return(
        <div className='footer'>
            <button className='btn-submit'>Cart <div>{currency(totalPrice)}</div></button>
        </div>
    )
}

export default Footer;