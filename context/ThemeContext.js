import React, { createContext, useEffect, useState } from "react";
import { Appearance } from "react-native";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const deviceTheme = Appearance.getColorScheme(); // 'light' | 'dark'

    const [theme, setTheme] = useState("system"); // user preference
    const [currentTheme, setCurrentTheme] = useState(deviceTheme);

    useEffect(() => {
        if (theme !== "system") return;

        const listener = Appearance.addChangeListener(({ colorScheme }) => {
            setCurrentTheme(colorScheme);
        });

        return () => listener.remove();
        }, [theme]);


    useEffect(() => {
        if (theme !== "system") {
            setCurrentTheme(theme);
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, currentTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
