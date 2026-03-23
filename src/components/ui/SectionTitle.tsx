interface SectionTitleProps {
  title: string
  subtitle?: string
}

/** セクション見出しコンポーネント */
export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-500 dark:text-slate-400">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto w-12 h-1 bg-blue-500 dark:bg-blue-400 rounded-full" />
    </div>
  )
}
