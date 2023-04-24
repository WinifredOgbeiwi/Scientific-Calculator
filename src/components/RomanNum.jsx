import React from 'react'
import { useContext } from 'react'
import CalContext from './Context'
function RomanNum() {
    const { clear, backspace, handlesValue, Calculate } = useContext(CalContext)
  return (
    <div>
        <div className="digits">
              <button onClick={clear}>AC</button>
              <button onClick={backspace}>C</button>

              <button name="%" onClick={handlesValue}>
                &#37;
              </button>
              <button className="equations" name="+" onClick={handlesValue}>
                &#43;
              </button>
              <button className="numbers" name="1" onClick={handlesValue}>
                1
              </button>
              <button className="numbers" name="2" onClick={handlesValue}>
                2
              </button>
              <button className="numbers" name="3" onClick={handlesValue}>
                3
              </button>
              <button className="equations" name="-" onClick={handlesValue}>
                &#45;
              </button>
              <button className="numbers" name="4" onClick={handlesValue}>
                4
              </button>
              <button className="numbers" name="5" onClick={handlesValue}>
                5
              </button>
              <button className="numbers" name="6" onClick={handlesValue}>
                6
              </button>
              <button className="equations" name="*" onClick={handlesValue}>
                x
              </button>
              <button className="numbers" name="7" onClick={handlesValue}>
                7
              </button>
              <button className="numbers" name="8" onClick={handlesValue}>
                8
              </button>
              <button className="numbers" name="9" onClick={handlesValue}>
                9
              </button>
              <button className="equations" name="/" onClick={handlesValue}>
                &divide;
              </button>
              <button className="numbers" name="0" onClick={handlesValue}>
                0
              </button>
              <button className="numbers" name="." onClick={handlesValue}>
                &#46;
              </button>
              <button
                className="equations"
                name="="
                onClick={Calculate}
                id="equalto"
              >
                &#61;
              </button>
            </div>
    </div>
  )
}

export default RomanNum
