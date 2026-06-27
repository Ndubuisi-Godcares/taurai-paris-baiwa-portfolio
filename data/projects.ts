export interface Project {
  id: string
  slug: string
  title: string
  description: string
  tech: string[]
  github: string
  outcome: string
  featured: boolean
  problem: string
  constraints: string
  architecture: string
  highlights: string[]
  results: string[]
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'oracle-ecommerce-oms',
    title: 'Oracle E-Commerce Order Management System',
    description:
      'An Oracle-based backend system to manage e-commerce orders, inventory, and secure transactions end-to-end.',
    tech: ['Oracle', 'SQL', 'PL/SQL', 'Data Modeling'],
    github: 'https://github.com/tauraiPbaiwa-bit',
    outcome:
      'Guaranteed data integrity and reliable order processing through robust PL/SQL stored procedures.',
    featured: true,
    problem:
      'E-commerce platforms need reliable backend systems to handle concurrent orders, real-time inventory updates, and secure financial transactions without data loss or inconsistency.',
    constraints:
      'Oracle-first design with a priority on data integrity over raw throughput. All business logic lives in the database layer via stored procedures and triggers.',
    architecture:
      'Three-table relational schema: Orders (order_id, customer_id, status, total), Inventory (product_id, quantity, reserved), Transactions (tx_id, order_id, amount, status). PL/SQL procedures handle the full order lifecycle atomically.',
    highlights: [
      'PL/SQL stored procedures for order validation and atomic inventory decrement',
      'Transaction rollback on payment failure — zero partial-state errors in testing',
      'Sequence-based order IDs ensuring uniqueness under concurrent inserts',
      'Trigger-based audit log tracking every order state transition',
    ],
    results: [
      'Zero data inconsistency errors across all test scenarios',
      'Reliable order processing enforced at the database layer',
      'Automated rollback eliminates the need for manual error recovery',
    ],
  },
  {
    id: '2',
    slug: 'student-management-system',
    title: 'Student Management System',
    description:
      'An OOP-based application that centralizes student records, enrollments, and grade management in a single database-backed system.',
    tech: ['Java', 'OOP', 'MySQL', 'JDBC'],
    github: 'https://github.com/tauraiPbaiwa-bit',
    outcome:
      'Enhanced query speed and record accuracy through optimized CRUD database operations.',
    featured: true,
    problem:
      'Academic institutions often manage student data across disconnected spreadsheets, making enrollment tracking, grade updates, and record retrieval slow and error-prone.',
    constraints:
      'OOP design chosen for maintainability and extensibility. MySQL selected for portability and ease of setup in academic environments.',
    architecture:
      'Four-entity model: Student (id, name, email, enrolled_date), Course (id, name, credits, instructor), Enrollment (student_id, course_id, date), Grade (enrollment_id, score, letter_grade). A JDBC layer handles all database communication with prepared statements.',
    highlights: [
      'Encapsulated Student, Course, Enrollment, and Grade entities with clean OOP boundaries',
      'Optimized SELECT queries with indexed student_id and course_id columns',
      'Prepared statements throughout — eliminates SQL injection surface',
      'Batch insert support for bulk enrollment imports',
    ],
    results: [
      'Improved query response time for multi-table lookups',
      'Accurate, consistent grade and enrollment records across all operations',
      'Reduced manual data-entry errors through a validation layer',
    ],
  },
]
