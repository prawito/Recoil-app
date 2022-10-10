import { useState } from "react";

function Counter(){
    const [value, setValue] = useState(0);

    return(
        <div className='counter'>
            <button onClick={() => setValue(value > 0 ? value - 1 : value)}>-</button>
            <input type="number" value={value} />
            <button onClick={() => setValue(value + 1)}>+</button>
        </div>
    )
}

export default Counter;