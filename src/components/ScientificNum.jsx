import React from 'react'
import { useContext } from 'react'
import CalContext from './Context'
function ScientificNum() {
    const { symbols, setResult, input, result, handlesValue } = useContext(CalContext)
    return (
        <div className="">
            <div className={symbols ? "symbols" : "nullsymbols"}>
                <button
                    className="symbol-buttons"
                    onClick={() => setResult(Math.pow(input, 2))}
                >
                    x<sup>2</sup>
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setResult(Math.pow(input, 3))}
                >
                    x<sup>3</sup>
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setResult(Math.pow(input, 1 / 3))}
                >
                    &#8731;x
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setResult(Math.sqrt(input))}
                >
                    &#8730;x
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setResult(Math.sin(input))}
                >
                    sin
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setResult(Math.cos(input))}
                >
                    cos
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setResult(Math.exp(input))}
                >
                    e
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setResult(Math.log(input))}
                >
                    In{" "}
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setResult(Math.log2(input))}
                >
                    log<sub>2</sub>
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setResult(Math.log10(input))}
                >
                    Log<sub>10</sub>
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setResult(Math.tanh(input))}
                >
                    tanh
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setResult(Math.cosh(input))}
                >
                    cosh
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setResult(Math.trunc(result))}
                >
                    trunc
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setResult(Math.abs(result))}
                >
                    abs
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setResult(Math.sinh(result))}
                >
                    sinh
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setResult(Math.PI)}
                >
                    &#960;
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setResult(Math.sign(result))}
                >
                    sign
                </button>
                <button
                    className="symbol-buttons"
                    onClick={() => setResult(Math.random(result))}
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
