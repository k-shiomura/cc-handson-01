import { type FormEvent, useState } from 'react'
import { socialLinks } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'

type Status = 'idle' | 'sending' | 'success' | 'error'

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

function validate(form: HTMLFormElement): FormErrors {
  const data = new FormData(form)
  const errors: FormErrors = {}
  if (!String(data.get('name')).trim()) errors.name = 'お名前を入力してください'
  const email = String(data.get('email')).trim()
  if (!email) errors.email = 'メールアドレスを入力してください'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = '正しい形式で入力してください'
  if (!String(data.get('message')).trim()) errors.message = 'メッセージを入力してください'
  return errors
}

/** Contact セクション */
export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<FormErrors>({})

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setErrors({})
    setStatus('sending')

    // TODO: Formspree / EmailJS などに差し替える
    await new Promise(resolve => setTimeout(resolve, 1200))
    setStatus('success')
  }

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-2.5 rounded-lg border bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 transition-colors ${
      hasError
        ? 'border-red-400 dark:border-red-500 focus:ring-red-400'
        : 'border-slate-300 dark:border-slate-600 focus:ring-blue-500 dark:focus:ring-blue-400'
    }`

  return (
    <section id="contact" className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Contact" subtitle="お問い合わせ" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 左: 説明と SNS リンク */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-light tracking-widest text-gray-700 dark:text-gray-200 mb-2">
                撮影のご依頼・お問い合わせ
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                ポートレート撮影・イベント撮影・作品についてのご感想など、お気軽にメッセージをお送りください。
                通常 2〜3 日以内にご返信いたします。
              </p>
            </div>

            <div>
              <p className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">
                SNS
              </p>
              <div className="flex flex-col gap-3">
                {socialLinks.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors group"
                  >
                    <span className="w-8 h-8 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xs font-bold group-hover:border-blue-400 dark:group-hover:border-blue-400 transition-colors">
                      {link.icon}
                    </span>
                    {link.label}
                    <span className="ml-auto text-slate-400 dark:text-slate-500 text-xs">↗</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">
                Email
              </p>
              <a
                href="mailto:hello@example.com"
                className="text-sm text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                hello@example.com
              </a>
            </div>
          </div>

          {/* 右: フォーム */}
          <div>
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-4">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-500 dark:text-green-400 text-2xl">
                  ✓
                </div>
                <p className="font-medium text-slate-700 dark:text-slate-200">
                  送信完了しました
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  メッセージありがとうございます。折り返しご連絡いたします。
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-sm text-blue-500 dark:text-blue-400 hover:underline mt-2"
                >
                  もう一度送る
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className={inputClass(!!errors.name)}
                    onChange={() => errors.name && setErrors(prev => ({ ...prev, name: undefined }))}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={inputClass(!!errors.email)}
                    onChange={() => errors.email && setErrors(prev => ({ ...prev, email: undefined }))}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                    メッセージ <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={`${inputClass(!!errors.message)} resize-none`}
                    onChange={() => errors.message && setErrors(prev => ({ ...prev, message: undefined }))}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 rounded-lg bg-blue-500 dark:bg-blue-400 text-white font-medium hover:bg-blue-600 dark:hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {status === 'sending' ? '送信中...' : '送信する'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
