export interface Skill {
  name: string
  color: 'cyan' | 'purple' | 'green'
}

export interface SkillCategory {
  category: string
  icon: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Data & Databases',
    icon: '🗄️',
    skills: [
      { name: 'SQL / PL-SQL', color: 'cyan' },
      { name: 'Oracle Database', color: 'cyan' },
      { name: 'MySQL', color: 'cyan' },
      { name: 'Data Modeling', color: 'cyan' },
      { name: 'Data Visualization', color: 'cyan' },
    ],
  },
  {
    category: 'Programming Languages',
    icon: '💻',
    skills: [
      { name: 'Python', color: 'purple' },
      { name: 'Java', color: 'purple' },
      { name: 'C++', color: 'purple' },
      { name: 'OOP', color: 'purple' },
    ],
  },
  {
    category: 'Tools & Workflows',
    icon: '🔧',
    skills: [
      { name: 'Git', color: 'green' },
      { name: 'Oracle DB Explorer', color: 'green' },
      { name: 'Sales Order Mgmt', color: 'green' },
      { name: 'Agile', color: 'green' },
    ],
  },
]
