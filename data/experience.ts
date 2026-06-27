export interface Experience {
  id: string
  role: string
  company: string
  location: string
  start: string
  end: string
  bullets: string[]
  tech: string[]
}

export const experiences: Experience[] = [
  {
    id: '1',
    role: 'Industry Project Intern',
    company: 'Tata Consultancy Services',
    location: 'Maharashtra, India',
    start: 'Feb 2026',
    end: 'May 2026',
    bullets: [
      'Leveraged SQL/PL-SQL to analyze retail sales data, uncovering key trends to guide business strategy.',
      'Optimized database queries to streamline data extraction, enhancing accuracy and minimizing manual effort.',
      'Developed executive dashboards that translated complex datasets into actionable stakeholder recommendations.',
      'Standardized reporting procedures and documented workflows to improve operational efficiency.',
    ],
    tech: ['SQL', 'PL-SQL', 'Oracle', 'Data Visualization', 'Agile'],
  },
]
