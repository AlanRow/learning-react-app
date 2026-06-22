import { useContext } from "react";
import "./ThemeInput.css";
import ThemeContext from "../ThemeContext";

function ThemeInput({ value }) {
    const theme = useContext(ThemeContext)
    return (<input className={theme} value={value} />)
}

export default ThemeInput