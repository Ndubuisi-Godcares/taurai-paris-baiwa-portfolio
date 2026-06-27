export interface Certification {
  id: string
  name: string
  issuer: string
  year: string
  icon: string
}

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'Sales Order Management in Supply Chain Management',
    issuer: 'Tata Consultancy Services',
    year: '2026',
    icon: '📦',
  },
  {
    id: '2',
    name: 'Oracle Database Explorer',
    issuer: 'Oracle',
    year: '2025',
    icon: '🗄️',
  },
]
