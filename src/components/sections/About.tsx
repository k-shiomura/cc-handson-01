import { experiences, socialLinks } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'

/** About セクション */
export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Profile" subtitle="プロフィール" />

        {/* プロフィール */}
        <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
          {/* アバター */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-5xl font-bold shadow-lg">
              Y
            </div>
            {/* SNS リンク */}
            <div className="flex gap-3 mt-4 justify-center md:justify-start">
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xs font-bold text-slate-500 dark:text-slate-400 hover:border-blue-400 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 本文 */}
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
            <p>
              はじめまして、Hanako です。光と瞬間に魅せられたフォトグラファーです。
              ポートレート・風景・スナップを中心に、日常の中の美しさを写真で記録しています。
            </p>
            <p>
              「余白のある写真」を大切にしており、シンプルで静謐な世界観を追求しています。
              Fujifilm X-T30 III をメイン機に、Adobe Lightroom でフィルムライクなレタッチを施しています。
              作品は{' '}
              <a
                href="https://kiyomishiomura.wixsite.com/camera"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-slate-300 dark:decoration-slate-600 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
              >
                カメラサイト
              </a>
              でも公開しています。
            </p>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mt-6 text-sm">
              {[
                { label: '拠点', value: '東京都' },
                { label: 'ジャンル', value: 'ポートレート・風景・スナップ' },
                { label: 'メイン機材', value: 'Fujifilm X-T30 III' },
                { label: 'メール', value: 'hello@example.com' },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-3">
                  <dt className="font-medium text-slate-700 dark:text-slate-200 w-20 flex-shrink-0">{label}</dt>
                  <dd className="text-slate-500 dark:text-slate-400">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* 経歴タイムライン */}
        <div>
          <h3 className="text-xs font-light tracking-[0.25em] uppercase text-gray-400 dark:text-gray-500 mb-8">
            Activity
          </h3>
          <ol className="relative border-l border-slate-200 dark:border-slate-700 space-y-8 ml-3">
            {experiences.map((exp, i) => (
              <li key={i} className="pl-8">
                {/* ドット */}
                <span className="absolute -left-[5px] w-2.5 h-2.5 rounded-full bg-blue-500 dark:bg-blue-400 ring-4 ring-white dark:ring-slate-900" />

                <time className="text-xs font-medium text-blue-500 dark:text-blue-400 uppercase tracking-wide">
                  {exp.period}
                </time>
                <h4 className="mt-1 font-semibold text-slate-800 dark:text-slate-100">
                  {exp.role}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                  {exp.company}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {exp.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
