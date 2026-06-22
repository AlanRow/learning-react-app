import "./ThemeInput.css";

function ThemeInput({ value, theme }) {
    return (<input className={theme} value={value} />)
}

export default ThemeInput