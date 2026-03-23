import type { ComponentPropsWithoutRef } from 'react'

type Variant = 'primary' | 'outline'

interface ButtonProps extends ComponentPropsWithoutRef<'a'> {
  variant?: Variant
}

const variantClass: Record<Variant, string> = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500',
  outline: 'border border-blue-500 text-blue-500 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-slate-800',
}

/** 汎用ボタンコンポーネント（<a> タグベース） */
export function Button({ variant = 'primary', className = '', children, ...props }: ButtonProps) {
  return (
    <a
      className={`inline-block px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-none ${variantClass[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
