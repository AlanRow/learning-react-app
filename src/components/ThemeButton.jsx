import "./ThemeButton.css";

function ThemeButton({ text, onClick, theme }) {
    return (<button className={theme}>{ text }</button>)
}

export default ThemeButton