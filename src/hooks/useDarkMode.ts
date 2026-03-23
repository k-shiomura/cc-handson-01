import { useEffect, useState } from 'react'

/**
 * ダークモードの状態管理フック。
 * OS 設定を初期値として使用し、localStorage に選択状態を保存する。
 */
export function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const stored = localStorage.getItem('darkMode')
    if (stored !== null) return stored === 'true'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('darkMode', String(isDark))
  }, [isDark])

  return { isDark, toggle: () => setIsDark(prev => !prev) }
}
