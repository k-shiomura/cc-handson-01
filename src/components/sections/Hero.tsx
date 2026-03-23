import { Button } from '../ui/Button'
import { socialLinks } from '../../data/portfolio'

/** SNS アイコン */
function SocialIcon({ label }: { label: string }) {
  if (label === 'Instagram') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    )
  }
  if (label === 'Twitter' || label === 'X') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  }
  if (label === 'Camera') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5" aria-hidden>
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    )
  }
  return null
}

/** Hero セクション */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden"
    >
      {/* 背景グラデーション：白→薄いグレーの静謐なグラデーション */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800" />
      {/* 右上にごく淡いアクセント */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-gray-100/80 to-transparent dark:from-gray-800/40"
      />

      <div className="relative text-center max-w-2xl">
        <p className="text-gray-400 dark:text-gray-500 font-light tracking-[0.3em] uppercase text-xs mb-6">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4 text-gray-900 dark:text-gray-100">
          Hanako Cosmo
        </h1>

        {/* アクセントライン */}
        <div className="w-12 h-px bg-gray-400 dark:bg-gray-500 mx-auto mb-4" />

        <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 font-light tracking-widest uppercase mb-8">
          Photographer
        </p>

        <p className="text-gray-500 dark:text-gray-400 leading-loose text-sm md:text-base mb-10 max-w-lg mx-auto font-light">
          光と瞬間を愛するフォトグラファー。ポートレート・風景・スナップを中心に、
          日常の中に宿る美しさを記録しています。
        </p>

        {/* SNS リンク */}
        <div className="flex justify-center gap-4 mb-12">
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex items-center justify-center w-9 h-9 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300"
            >
              <SocialIcon label={label} />
            </a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#projects">作品を見る</Button>
          <Button href="#contact" variant="outline">撮影のご依頼</Button>
        </div>
      </div>

      {/* スクロール誘導 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-400 to-transparent dark:from-slate-500" />
      </div>
    </section>
  )
}
