import React, { useState, useEffect } from 'react'

function Counter() {

    const [counter, setCounter] = useState(0);
    const [eth, setETH] = useState(0);


    useEffect(() => {
        const timeout = setTimeout(() => {
            setCounter(Math.round((counter + 0.00014) * 10000) / 10000);
            setETH(Math.round((eth + 0.000000069) * 100000000) / 100000000)
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [counter]);

    return <h1>Depuis le 16/05/2022, notre rig a miné {eth} ETH soit {counter}€</h1>;
}

export default Counter