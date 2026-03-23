import type { NavLink, Skill, Project, Experience, SocialLink } from '../types'

export const navLinks: NavLink[] = [
  { label: 'Profile', href: '#about' },
  { label: 'Equipment', href: '#skills' },
  { label: 'Works', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks: SocialLink[] = [
  { label: 'Instagram', href: 'https://instagram.com', icon: 'IG' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'TW' },
  { label: 'Camera', href: 'https://kiyomishiomura.wixsite.com/camera', icon: 'WEB' },
]

export const experiences: Experience[] = [
  {
    period: '2023年〜現在',
    role: 'フォトグラファー（フリーランス）',
    company: '',
    description: 'ポートレート・風景・スナップを中心に撮影活動を展開。SNS や写真サイトで作品を発信。',
  },
  {
    period: '2022年',
    role: 'グループ写真展 参加',
    company: '東京都内ギャラリー',
    description: '「光と影」をテーマにした作品を展示。来場者から好評をいただく。',
  },
  {
    period: '2021年',
    role: '写真を本格的に始める',
    company: '',
    description: 'ミラーレス一眼カメラを購入し、写真の世界へ。ポートレートと風景写真を中心に学ぶ。',
  },
]

export const skills: Skill[] = [
  { name: 'Fujifilm X-T30 III', category: 'camera', level: 5 },
  { name: 'XF 56mm F1.2 R', category: 'lens', level: 5 },
  { name: 'XF 23mm F2 R WR', category: 'lens', level: 4 },
  { name: 'XF 70-300mm F4-5.6', category: 'lens', level: 3 },
  { name: 'ポートレート', category: 'genre', level: 5 },
  { name: '風景・自然', category: 'genre', level: 4 },
  { name: 'スナップ・街', category: 'genre', level: 4 },
  { name: 'Adobe Lightroom', category: 'software', level: 5 },
  { name: 'Adobe Photoshop', category: 'software', level: 3 },
  { name: 'Capture One', category: 'software', level: 2 },
]

export const projects: Project[] = [
  {
    id: 'portrait',
    title: 'Portrait',
    description: '自然光を活かしたポートレート作品集。人の表情と光の瞬間を切り取ることをテーマに撮影。',
    tags: ['ポートレート', '自然光', 'Fujifilm X-T30 III'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1666526150908-e6045fa6dd44?q=80&w=1329&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    demoUrl: 'https://kiyomishiomura.wixsite.com/camera',
    status: 'completed',
  },
  {
    id: 'landscape',
    title: 'Landscape',
    description: '日本各地の風景写真。朝霧・夕焼け・星空など、移ろう自然の光をフィルムライクなトーンで表現。',
    tags: ['風景', '自然', '長時間露光'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1617194355409-a19967f8ee23?q=80&w=1329&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    demoUrl: 'https://kiyomishiomura.wixsite.com/camera',
    status: 'completed',
  },
  {
    id: 'snapshot',
    title: 'Snapshot',
    description: '日常の街角で出会った光景。何気ない瞬間の美しさを、スナップのスタイルで記録した作品群。',
    tags: ['スナップ', '街', 'モノクロ'],
    thumbnailUrl: 'https://static.wixstatic.com/media/1fd70b_309714b7e7574a85b9172e09d2540db5~mv2.jpg/v1/fill/w_1038,h_582,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1fd70b_309714b7e7574a85b9172e09d2540db5~mv2.jpg',
    demoUrl: 'https://kiyomishiomura.wixsite.com/camera',
    status: 'completed',
  },
  {
    id: 'new-series',
    title: 'New Series',
    description: '現在制作中の新シリーズ。テーマは「余白」。静寂の中に宿る美しさを探しています。',
    tags: ['制作中', 'コンセプチュアル'],
    thumbnailUrl: 'https://images.unsplash.com/photo-1617194311278-5e2a78582342?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: 'wip',
  },
]
