import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    // Check local storage or system preference
    const getInitialTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    };

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement;

        if (theme === 'light') {
            root.style.setProperty('--bg-primary', '#ffffff');
            root.style.setProperty('--bg-secondary', '#f5f5f5');
            root.style.setProperty('--bg-tertiary', '#e5e5e5');
            root.style.setProperty('--text-primary', '#0a0a0a');
            root.style.setProperty('--text-secondary', '#525252');
            root.style.setProperty('--text-muted', '#737373');
            root.style.setProperty('--border-subtle', 'rgba(0, 0, 0, 0.1)');
            root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.8)');
            root.style.setProperty('--glass-border', 'rgba(0, 0, 0, 0.05)');
        } else {
            root.style.setProperty('--bg-primary', '#0a0a0a');
            root.style.setProperty('--bg-secondary', '#141414');
            root.style.setProperty('--bg-tertiary', '#1f1f1f');
            root.style.setProperty('--text-primary', '#ffffff');
            root.style.setProperty('--text-secondary', '#cccccc');
            root.style.setProperty('--text-muted', '#8a8a8a');
            root.style.setProperty('--border-subtle', 'rgba(255, 255, 255, 0.15)');
            root.style.setProperty('--glass-bg', 'rgba(20, 20, 20, 0.7)');
            root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.05)');
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
