import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { themePalette } from "../constants/theme";

export default function useTheme() {
    const { currentTheme } = useContext(ThemeContext);

    const palette =
        currentTheme === "dark" ? themePalette.dark : themePalette.light;

    return { palette, currentTheme };
}
