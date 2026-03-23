/** スキル */
export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'devops' | 'tools'
  level: number // 1〜5
  icon?: string
}

/** 職務経歴 */
export interface Experience {
  period: string
  role: string
  company: string
  description: string
}

/** プロジェクト */
export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  demoUrl?: string
  thumbnailUrl?: string
  status: 'completed' | 'wip'
}

/** SNS リンク */
export interface SocialLink {
  label: string
  href: string
  icon: string
}

/** ナビゲーションリンク */
export interface NavLink {
  label: string
  href: string
}
