import { createContext, useContext, useState } from "react";

interface ThemeContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

// ၁။ Context သီးသန့် ဆောက်တယ်
export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => { }
});

// ၂။ Custom Provider ဆောက်တယ် (State ပါ တစ်ပါတည်း စီမံဖို့)
export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        setTheme((prev) => {
            console.log("Toggling theme from", prev);
            return  prev === 'light' ? 'dark' : 'light';
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// ၃။ Custom Hook ဆောက်တယ်
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context)
        throw new Error("useTheme must be used within a ThemeProvider");
    return context;
}

