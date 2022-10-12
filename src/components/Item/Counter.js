import { useEffect, useState } from "react";

function Counter({defaultValue, onRemoveItem, onValueChange}){
    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);

    const onMinItem = () => {
        if(value > 0){
            if(value === 1) {
                onRemoveItem();
            }
            setValue(value - 1);
            onValueChange(value - 1);
        } else {
            setValue(value);
            onValueChange(value);
        }
    }

    const onPlusItem = () => {
        setValue(value + 1);
        onValueChange(value + 1);
    }

    return(
        <div className='counter'>
            <button onClick={onMinItem}>-</button>
            <input type="number" value={value} />
            <button onClick={onPlusItem}>+</button>
        </div>
    )
}

export default Counter;