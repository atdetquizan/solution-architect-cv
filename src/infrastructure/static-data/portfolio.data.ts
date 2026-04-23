import type { Certification } from '@domain/entities/Certification';
import type { ContactInfo } from '@domain/entities/Contact';
import type { Experience } from '@domain/entities/Experience';
import type { Profile } from '@domain/entities/Profile';
import type { Project } from '@domain/entities/Project';
import type { SkillCategory } from '@domain/entities/Skill';

export const profileData: Profile = {
  name: 'Alex Rivera',
  role: 'Software & Solutions Architect',
  tagline:
    'Designing resilient enterprise platforms with cloud-native architecture and distributed systems excellence.',
  summary:
    'Solution Architect with 12+ years delivering enterprise digital transformation across fintech, retail, and logistics.',
  architectureMindset:
    'Balances domain-driven design, performance, and operability to align architecture decisions with business outcomes.',
  enterpriseExperience:
    'Led modernization programs across multi-region cloud landscapes, API ecosystems, and microfrontend platforms.',
  leadershipExperience:
    'Mentored architecture guilds, drove technical governance, and coached delivery teams through scalable platform adoption.',
  profileImage: '/images/profile.png',
};

export const skillData: SkillCategory[] = [
  { category: 'Architecture', skills: ['DDD', 'Event-Driven Design', 'Hexagonal Architecture'] },
  { category: 'Cloud & DevOps', skills: ['AWS', 'Azure', 'Terraform', 'Kubernetes'] },
  { category: 'Frontend', skills: ['Astro', 'React', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', skills: ['Node.js', 'Java', '.NET', 'GraphQL'] },
  { category: 'Databases', skills: ['PostgreSQL', 'DynamoDB', 'Redis', 'MongoDB'] },
  { category: 'CI/CD', skills: ['GitHub Actions', 'Argo CD', 'Jenkins'] },
  { category: 'Observability', skills: ['OpenTelemetry', 'Datadog', 'Grafana', 'Prometheus'] },
  { category: 'Microfrontends', skills: ['Module Federation', 'Design Systems', 'BFF Pattern'] },
  { category: 'Distributed systems', skills: ['Kafka', 'SQS/SNS', 'CQRS', 'Saga Patterns'] },
];

export const experienceData: Experience[] = [
  {
    id: 'exp-1',
    company: 'Aether Financial Group',
    role: 'Principal Solution Architect',
    period: '2022 — Present',
    highlights: [
      'Defined target cloud architecture for multi-tenant lending platform serving 10M+ users.',
      'Directed cloud migration strategy reducing infrastructure cost by 28%.',
      'Established architecture review board and decision records for technical governance.',
    ],
  },
  {
    id: 'exp-2',
    company: 'Orbit Commerce Systems',
    role: 'Enterprise Architect',
    period: '2018 — 2022',
    highlights: [
      'Designed event-driven order orchestration enabling 99.98% service availability.',
      'Introduced microfrontend architecture for 20+ product teams with shared design system.',
      'Mentored engineering leads on scalability, resilience, and observability standards.',
    ],
  },
  {
    id: 'exp-3',
    company: 'Skyline Logistics Tech',
    role: 'Senior Software Architect',
    period: '2014 — 2018',
    highlights: [
      'Architected distributed tracking platform processing 2B telemetry events monthly.',
      'Led modernization from monolith to domain-aligned services with phased rollout.',
      'Improved deployment frequency via CI/CD governance and platform enablement.',
    ],
  },
];

export const certificationData: Certification[] = [
  { id: 'cert-1', title: 'AWS Certified Solutions Architect – Professional', issuer: 'Amazon Web Services', year: '2025' },
  { id: 'cert-2', title: 'Microsoft Certified: Azure Solutions Architect Expert', issuer: 'Microsoft', year: '2024' },
  { id: 'cert-3', title: 'Certified Kubernetes Administrator (CKA)', issuer: 'Cloud Native Computing Foundation', year: '2024' },
  { id: 'cert-4', title: 'Google Professional Cloud Architect', issuer: 'Google Cloud', year: '2023' },
];

export const projectData: Project[] = [
  {
    id: 'prj-1',
    name: 'Cloud-Native Core Banking Platform',
    description: 'Enterprise banking platform with event sourcing, domain boundaries, and zero-downtime deployment strategy.',
    stack: ['AWS', 'Kubernetes', 'Kafka', 'TypeScript'],
    focus: 'Scalability & Cloud Migration',
  },
  {
    id: 'prj-2',
    name: 'Distributed Commerce Operations Hub',
    description: 'Unified orchestration layer for omnichannel commerce, inventory, and partner integrations.',
    stack: ['Azure', 'Microfrontends', 'GraphQL', 'PostgreSQL'],
    focus: 'Distributed Systems',
  },
  {
    id: 'prj-3',
    name: 'Enterprise Observability Control Plane',
    description: 'Cross-domain observability platform for tracing, SLO management, and incident diagnostics.',
    stack: ['OpenTelemetry', 'Prometheus', 'Grafana', 'Argo CD'],
    focus: 'Technical Governance',
  },
];

export const contactData: ContactInfo = {
  email: 'alex.rivera.architect@email.com',
  github: 'https://github.com/alex-rivera-architect',
  linkedin: 'https://www.linkedin.com/in/alex-rivera-architect/',
  cvUrl: '/Alex-Rivera-CV.pdf',
};
