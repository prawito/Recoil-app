import { useRecoilValue } from "recoil";
import { sumItemState } from "../../App";
import currency from "../../utils/currency";

function Footer(){
    const {totalPrice} = useRecoilValue(sumItemState);
    return(
        <div className='footer'>
            <button className='btn-submit'>Cart <div>{currency(totalPrice)}</div></button>
        </div>
    )
}

export default Footer;