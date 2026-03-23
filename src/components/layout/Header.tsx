import { useState } from 'react'
import { navLinks } from '../../data/portfolio'
import { useDarkMode } from '../../hooks/useDarkMode'

/** ヘッダー・ナビゲーション */
export function Header() {
  const { isDark, toggle } = useDarkMode()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* ロゴ */}
        <a href="#hero" className="font-bold text-lg text-slate-800 dark:text-slate-100">
          Portfolio
        </a>

        {/* PC ナビ */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* ダークモードトグル */}
          <button
            onClick={toggle}
            aria-label="ダークモード切り替え"
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          {/* ハンバーガーボタン（モバイル） */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="メニューを開く"
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current mb-1" />
            <span className="block w-5 h-0.5 bg-current" />
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {menuOpen && (
        <nav className="md:hidden px-4 pb-4 flex flex-col gap-3 border-t border-slate-200 dark:border-slate-700">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-2 text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
