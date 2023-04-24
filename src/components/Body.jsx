import React from 'react'
import { useContext } from 'react'
import CalContext from './Context'
import { MdCropRotate } from 'react-icons/md'
import RomanNum from './RomanNum'
import ScientificNum from './ScientificNum'
function Body() {
    const { input, setInput, handlesSymbol, symbols } = useContext(CalContext)
    return (
        <main>
            <div className={symbols ? "big-container" : "container"}>
                <MdCropRotate onClick={handlesSymbol} className="rotate" />
                <div className="input-field">
                    <input value={input} 
                    // className='input'
                     onChange={() => setInput(input)}/>
                 
                </div>

                <div className="buttons-wapper">
                    <RomanNum />
                    <ScientificNum />
                </div>
            </div>
        </main>
    )
}

export default Body
