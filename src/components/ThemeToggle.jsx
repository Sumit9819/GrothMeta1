import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            style={{
                background: 'var(--bg-tertiary)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
            }}
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{
                    y: theme === 'dark' ? 0 : -30,
                    opacity: theme === 'dark' ? 1 : 0
                }}
                transition={{ duration: 0.2 }}
                style={{ position: 'absolute' }}
            >
                🌙
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    y: theme === 'light' ? 0 : 30,
                    opacity: theme === 'light' ? 1 : 0
                }}
                transition={{ duration: 0.2 }}
                style={{ position: 'absolute' }}
            >
                ☀️
            </motion.div>
        </button>
    );
};

export default ThemeToggle;
