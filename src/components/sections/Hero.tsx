import { Button } from '../ui/Button'

/** Hero セクション */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden"
    >
      {/* 背景グラデーション装飾 */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-pink-100 dark:bg-pink-900/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-rose-100 dark:bg-rose-900/20 blur-3xl"
      />

      <div className="relative text-center max-w-2xl">
        <p className="text-blue-500 dark:text-blue-400 font-medium tracking-widest uppercase text-sm mb-4">
          Hello, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
          Kiyomi Shiomura
        </h1>

        <p className="text-xl md:text-2xl text-blue-500 dark:text-blue-400 font-medium mb-6">
          Frontend Developer
        </p>

        <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-10 max-w-lg mx-auto">
          React / TypeScript を中心に、使いやすく美しい UI を作ることが得意です。
          パフォーマンスとアクセシビリティを大切にしたプロダクト開発を目指しています。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#projects">プロジェクトを見る</Button>
          <Button href="#contact" variant="outline">お問い合わせ</Button>
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
