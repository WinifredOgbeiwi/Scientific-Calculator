import { createContext, useState } from "react";
const CalContext = createContext()
export const CalContextProvider = ({ children }) => {
    const [input, setInput] = useState("");
    const [symbols, setSymbols] = useState(false);
    const handlesSymbol = () => {
        setSymbols((prev) => !prev);
    };
    const Calculate = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput("Error");
        }
    };
    const handlesValue = (e) => {
        setInput(input.concat(e.target.name));
    };
    const backspace = () => {
        setInput(input.slice(0, -1));
    };
    const clear = () => {
        setInput("");
    };

    return (
        <CalContext.Provider value={{ input, setInput, symbols, setSymbols, handlesSymbol, Calculate, handlesValue, backspace, clear }}>
            {children}
        </CalContext.Provider>
    )
}
export default CalContext