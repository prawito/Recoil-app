import { useRecoilValue } from "recoil";
import { totalPriceState } from "../../App";
import currency from "../../utils/currency";

function Footer(){
    const totalPrice = useRecoilValue(totalPriceState);
    return(
        <div className='footer'>
            <button className='btn-submit'>Cart <div>{currency(totalPrice)}</div></button>
        </div>
    )
}

export default Footer;