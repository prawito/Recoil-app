import currency from "../../utils/currency";

function Footer(){
    return(
        <div className='footer'>
            <button className='btn-submit'>Cart <div>{currency(124000)}</div></button>
        </div>
    )
}

export default Footer;