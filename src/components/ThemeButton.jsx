import { useContext, createContext } from "react";

import "./ThemeButton.css";
import { THEME_MODE } from "../const";
import ThemeContext from "../ThemeContext";

function ThemeButton({ text, onClick }) {
    const theme = useContext(ThemeContext)
    return (<button className={theme}>{ text }</button>)
}

export default ThemeButton