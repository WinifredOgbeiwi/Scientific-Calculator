import React from 'react'
import { useContext } from 'react'
import CalContext from './Context'
function ScientificNum() {
    const { symbols, setInput, input, result, handlesValue } = useContext(CalContext)
    return (
        <div className="">
            <div className={symbols ? "symbols" : "nullsymbols"}>
                <button
                    className="symbol-buttons"
                    onClick={() => setInput(Math.pow(input, 2))}
                >
                    x<sup>2</sup>
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setInput(Math.pow(input, 3))}
                >
                    x<sup>3</sup>
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setInput(Math.pow(input, 1 / 3))}
                >
                    &#8731;x
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setInput(Math.sqrt(input))}
                >
                    &#8730;x
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setInput(Math.sin(input))}
                >
                    sin
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setInput(Math.cos(input))}
                >
                    cos
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setInput(Math.exp(input))}
                >
                    e
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setInput(Math.log(input))}
                >
                    In{" "}
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setInput(Math.log2(input))}
                >
                    log<sub>2</sub>
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setInput(Math.log10(input))}
                >
                    Log<sub>10</sub>
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setInput(Math.tanh(input))}
                >
                    tanh
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setInput(Math.cosh(input))}
                >
                    cosh
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setInput(Math.trunc(input))}
                >
                    trunc
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setInput(Math.abs(input))}
                >
                    abs
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setInput(Math.sinh(input))}
                >
                    sinh
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setInput(Math.PI)}
                >
                    &#960;
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setInput(Math.sign(input))}
                >
                    sign
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setInput(Math.random(input))}
                >
                    rand
                </button>
                <button
                    className="symbol-buttons"
                    name="("
                    onClick={handlesValue}
                >
                    &#40;
                </button>
                <button
                    className="symbol-buttons"
                    name=")"
                    onClick={handlesValue}
                >
                    &#41;
                </button>
            </div>
        </div>

    )
}

export default ScientificNum
