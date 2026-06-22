import ThemeButton from "./ThemeButton";
import ThemeInput from "./ThemeInput";

function ThemeForm({ theme }) {
    return (<form>
        <ThemeInput theme={theme} value="Username" />
        <ThemeButton theme={theme} text="Ok" />
    </form>)
}

export default ThemeForm