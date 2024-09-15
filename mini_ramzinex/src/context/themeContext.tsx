import { createContext, useState, useContext } from 'react';
import { themeProps, themeContextType } from '../types';


const ThemeContext = createContext<themeContextType | null>(null);
export const useTheme = (): themeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
export default function ThemeProvider({ children }: themeProps) {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
