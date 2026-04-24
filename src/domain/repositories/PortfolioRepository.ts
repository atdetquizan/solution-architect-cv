import type { Certification } from '@domain/entities/Certification';
import type { ContactInfo } from '@domain/entities/Contact';
import type { Experience } from '@domain/entities/Experience';
import type { Profile } from '@domain/entities/Profile';
import type { Project } from '@domain/entities/Project';
import type { SectionContent } from '@domain/entities/SectionContent';
import type { SkillCategory } from '@domain/entities/Skill';

export interface PortfolioRepository {
  getProfile(): Promise<Profile>;
  getSkillCategories(): Promise<SkillCategory[]>;
  getExperienceTimeline(): Promise<Experience[]>;
  getCertifications(): Promise<Certification[]>;
  getFeaturedProjects(): Promise<Project[]>;
  getContactInfo(): Promise<ContactInfo>;
  getSectionContent(): Promise<SectionContent>;
}
