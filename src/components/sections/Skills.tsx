import { useState } from 'react'
import { skills } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'
import type { Skill } from '../../types'

const categoryLabel: Record<Skill['category'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  devops: 'DevOps',
  tools: 'Tools',
}

const levelLabel: Record<number, string> = {
  1: '入門',
  2: '基礎',
  3: '実務',
  4: '上級',
  5: 'エキスパート',
}

const categories = ['frontend', 'backend', 'devops', 'tools'] as const

type Category = (typeof categories)[number] | 'all'

/** Skills セクション */
export function Skills() {
  const [active, setActive] = useState<Category>('all')

  const filtered = active === 'all'
    ? skills
    : skills.filter(s => s.category === active)

  return (
    <section id="skills" className="py-20 px-4 bg-slate-50 dark:bg-slate-800/30">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Skills" subtitle="保有スキル" />

        {/* カテゴリフィルター */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(['all', ...categories] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                active === cat
                  ? 'bg-blue-500 dark:bg-blue-400 text-white'
                  : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-400'
              }`}
            >
              {cat === 'all' ? 'All' : categoryLabel[cat]}
            </button>
          ))}
        </div>

        {/* スキル一覧 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(skill => (
            <div
              key={skill.name}
              className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-slate-700 dark:text-slate-200">
                  {skill.name}
                </span>
                <span className="text-xs text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full">
                  {categoryLabel[skill.category]}
                </span>
              </div>

              {/* プログレスバー */}
              <div className="h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden mb-2">
                <div
                  className="h-full bg-blue-500 dark:bg-blue-400 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level * 20}%` }}
                />
              </div>

              <div className="flex justify-between text-xs text-slate-400 dark:text-slate-500">
                <span>{'●'.repeat(skill.level)}{'○'.repeat(5 - skill.level)}</span>
                <span>{levelLabel[skill.level]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
