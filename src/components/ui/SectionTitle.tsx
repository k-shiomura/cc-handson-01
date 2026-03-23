interface SectionTitleProps {
  title: string
  subtitle?: string
}

/** セクション見出しコンポーネント */
export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-light tracking-widest uppercase text-gray-900 dark:text-gray-100 mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xs text-gray-400 dark:text-gray-500 tracking-[0.25em] uppercase">
          {subtitle}
        </p>
      )}
      <div className="mt-5 mx-auto w-8 h-px bg-gray-300 dark:bg-gray-600" />
    </div>
  )
}
