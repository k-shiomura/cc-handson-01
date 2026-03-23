import { projects } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'

const statusConfig = {
  completed: { label: '完成', className: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400' },
  wip: { label: '開発中', className: 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400' },
}

/** Projects セクション */
export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Projects" subtitle="制作物" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(project => {
            const status = statusConfig[project.status]
            return (
              <article
                key={project.id}
                className="group flex flex-col rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* サムネイル */}
                <div className="h-44 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center overflow-hidden">
                  {project.thumbnailUrl
                    ? (
                      <img
                        src={project.thumbnailUrl}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )
                    : (
                      <span className="text-4xl font-bold text-slate-300 dark:text-slate-500 select-none">
                        {project.title.charAt(0)}
                      </span>
                    )
                  }
                </div>

                <div className="flex flex-col flex-1 p-6">
                  {/* タイトルとステータス */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-bold text-slate-800 dark:text-slate-100 leading-tight">
                      {project.title}
                    </h3>
                    <span className={`flex-shrink-0 text-xs font-medium px-2.5 py-0.5 rounded-full ${status.className}`}>
                      {status.label}
                    </span>
                  </div>

                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>

                  {/* タグ */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* リンク */}
                  <div className="flex gap-4 text-sm border-t border-slate-100 dark:border-slate-700 pt-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                      >
                        <span className="text-xs font-bold border border-current rounded px-1">GH</span>
                        GitHub
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                      >
                        <span className="text-xs">↗</span>
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
