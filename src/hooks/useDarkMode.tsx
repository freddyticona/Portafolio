/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'system';

/**
 * Hook para manejar el tema oscuro/claro del sitio
 */
export function useDarkMode() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Get from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) return savedTheme;

    // Default to system preference
    return 'system';
  });

  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove existing classes
    root.classList.remove('light', 'dark');

    // Determine actual theme
    let actualTheme: 'dark' | 'light';

    if (theme === 'system') {
      actualTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
      actualTheme = theme;
    }

    // Apply theme
    root.classList.add(actualTheme);
    setIsDark(actualTheme === 'dark');

    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(e.matches ? 'dark' : 'light');
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  return { theme, setTheme, isDark };
}

/**
 * Componente Toggle de Tema
 */
export function ThemeToggle({ lang = 'es' }: { lang?: 'es' | 'en' }) {
  const { theme, setTheme, isDark } = useDarkMode();

  const cycleTheme = () => {
    setTheme((prev: Theme) => {
      if (prev === 'dark') return 'light';
      if (prev === 'light') return 'system';
      return 'dark';
    });
  };

  const icons = {
    dark: '🌙',
    light: '☀️',
    system: '💻'
  };

  return (
    <button
      onClick={cycleTheme}
      className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm transition-all text-sm font-mono"
      title={lang === 'es' ? 'Cambiar tema' : 'Toggle theme'}
    >
      <span className="text-lg">{icons[theme]}</span>
      <span className="hidden sm:inline text-stone-400">
        {lang === 'es' ? 'Tema' : 'Theme'}: {theme}
      </span>
    </button>
  );
}

/**
 * Hook para aplicar estilos de tema específicos
 */
export function useThemeStyles() {
  const { isDark } = useDarkMode();

  const themeStyles = {
    background: isDark ? '#050505' : '#ffffff',
    text: isDark ? '#d6d3d1' : '#1c1917',
    primary: isDark ? '#D4AF37' : '#b8941f',
    secondary: isDark ? '#1a1a2e' : '#e7e5e4',
    border: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
    card: isDark ? '#0a0a0a' : '#f5f5f5',
    muted: isDark ? '#78716c' : '#57534e'
  };

  return { isDark, themeStyles };
}

/**
 * Custom hook para preferencia de color del sistema
 */
export function useSystemTheme() {
  const [isDark, setIsDark] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isDark;
}
