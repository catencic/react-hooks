
import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWhitHooks = () => {


     const {state , decrement , increment,reset} = useCounter(100)

    return (
        <>
            <h1>Counter CounterWhitHooks</h1>
            <hr/>
            <h1>Counter {state}</h1>
            <button className="btn btn-primary" onClick={increment}>Increment+ 1</button>
            <button className="btn btn-primary" onClick={reset}>Resreset</button>
            <button className="btn btn-primary" onClick={decrement}>Decrement- 1</button>

        </>
    )
}
