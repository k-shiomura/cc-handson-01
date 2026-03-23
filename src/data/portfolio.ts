import type { NavLink, Skill, Project, Experience, SocialLink } from '../types'

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com', icon: 'GH' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'TW' },
  { label: 'Zenn', href: 'https://zenn.dev', icon: 'ZN' },
]

export const experiences: Experience[] = [
  {
    period: '2023年4月 〜 現在',
    role: 'フロントエンドエンジニア',
    company: '株式会社サンプル',
    description: 'React / TypeScript を用いた SPA 開発。デザインシステムの構築・保守を担当。',
  },
  {
    period: '2021年4月 〜 2023年3月',
    role: 'Web エンジニア（フルスタック）',
    company: '合同会社サンプル',
    description: 'Python / FastAPI によるバックエンド API 開発と、Vue.js を用いたフロントエンド実装。',
  },
  {
    period: '2019年4月 〜 2021年3月',
    role: 'システムエンジニア',
    company: 'サンプルシステム株式会社',
    description: '業務システムの要件定義・設計・開発。Java / Spring Boot を使用。',
  },
]

export const skills: Skill[] = [
  { name: 'React', category: 'frontend', level: 4 },
  { name: 'TypeScript', category: 'frontend', level: 4 },
  { name: 'TailwindCSS', category: 'frontend', level: 4 },
  { name: 'Next.js', category: 'frontend', level: 3 },
  { name: 'Vite', category: 'frontend', level: 3 },
  { name: 'Python', category: 'backend', level: 4 },
  { name: 'FastAPI', category: 'backend', level: 3 },
  { name: 'PostgreSQL', category: 'backend', level: 3 },
  { name: 'Node.js', category: 'backend', level: 2 },
  { name: 'Docker', category: 'devops', level: 3 },
  { name: 'GitHub Actions', category: 'devops', level: 3 },
  { name: 'Vercel', category: 'devops', level: 3 },
  { name: 'Git', category: 'tools', level: 4 },
  { name: 'Figma', category: 'tools', level: 3 },
  { name: 'VS Code', category: 'tools', level: 4 },
]

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'ポートフォリオサイト',
    description: 'React + Vite + TailwindCSS で構築した個人ポートフォリオサイト。ダークモード・レスポンシブ対応。GitHub Pages にデプロイ。',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
    status: 'completed',
  },
  {
    id: 'task-app',
    title: 'タスク管理アプリ',
    description: 'ドラッグ&ドロップでタスクを管理できるアプリ。Kanban ボード形式で進捗を可視化。ローカルストレージにデータを保存。',
    tags: ['React', 'TypeScript', 'Zustand', 'TailwindCSS'],
    githubUrl: 'https://github.com',
    status: 'completed',
  },
  {
    id: 'weather-app',
    title: '天気予報ダッシュボード',
    description: 'OpenWeatherMap API を使用した天気予報アプリ。位置情報取得・週間予報表示・グラフ表示に対応。',
    tags: ['React', 'TypeScript', 'Recharts', 'REST API'],
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
    status: 'completed',
  },
  {
    id: 'blog-api',
    title: 'ブログ API',
    description: 'FastAPI + PostgreSQL で構築した REST API。JWT 認証・記事 CRUD・タグ管理・ページネーションを実装。',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com',
    status: 'wip',
  },
]
