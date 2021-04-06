import { useState } from "react"

export const useCounter = (initialState = 10) => {
    const [counter, setCounter] = useState(initialState);
    const increment = _=>setCounter(counter+1);
    const decrement = _=>setCounter(counter-1);
    const reset     = _=>setCounter(initialState);

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
