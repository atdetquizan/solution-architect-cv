import type { Certification } from '@domain/entities/Certification';
import type { ContactInfo } from '@domain/entities/Contact';
import type { Experience } from '@domain/entities/Experience';
import type { Profile } from '@domain/entities/Profile';
import type { Project } from '@domain/entities/Project';
import type { SkillCategory } from '@domain/entities/Skill';

export interface PortfolioDataDto {
  profile: Profile;
  skills: SkillCategory[];
  experiences: Experience[];
  certifications: Certification[];
  projects: Project[];
  contact: ContactInfo;
}
