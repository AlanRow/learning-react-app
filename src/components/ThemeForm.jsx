import ThemeButton from "./ThemeButton";
import ThemeInput from "./ThemeInput";

function ThemeForm({ }) {
    return (<form>
        <ThemeInput value="Username" />
        <ThemeButton text="Ok" />
    </form>)
}

export default ThemeForm