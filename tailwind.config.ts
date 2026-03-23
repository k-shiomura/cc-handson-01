import type { Config } from 'tailwindcss'

const config: Config = {
  // ダークモード: class 戦略（手動切り替え + localStorage 保持）
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // アクセントカラー
        accent: {
          light: '#3b82f6', // blue-500
          dark: '#60a5fa',  // blue-400
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
