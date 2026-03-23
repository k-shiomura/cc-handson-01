import { socialLinks } from '../../data/portfolio'

/** フッター */
export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
        {/* SNS リンク */}
        <div className="flex gap-4">
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xs font-bold text-slate-400 dark:text-slate-500 hover:border-blue-400 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <p className="text-sm text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} Kiyomi Shiomura. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
