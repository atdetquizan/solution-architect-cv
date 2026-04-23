import type { Certification } from '@domain/entities/Certification';
import type { ContactInfo } from '@domain/entities/Contact';
import type { Experience } from '@domain/entities/Experience';
import type { Profile } from '@domain/entities/Profile';
import type { Project } from '@domain/entities/Project';
import type { SkillCategory } from '@domain/entities/Skill';
import type { PortfolioDataDto } from '@application/dto/PortfolioDataDto';

export interface PortfolioViewModel {
  profile: Profile;
  skills: SkillCategory[];
  experiences: Experience[];
  certifications: Certification[];
  projects: Project[];
  contact: ContactInfo;
}

export const toPortfolioViewModel = (data: PortfolioDataDto): PortfolioViewModel => ({
  profile: { ...data.profile },
  skills: data.skills.map((skillCategory) => ({
    category: skillCategory.category,
    skills: [...skillCategory.skills],
  })),
  experiences: data.experiences.map((experience) => ({
    ...experience,
    highlights: [...experience.highlights],
  })),
  certifications: data.certifications.map((certification) => ({ ...certification })),
  projects: data.projects.map((project) => ({
    ...project,
    stack: [...project.stack],
  })),
  contact: { ...data.contact },
});
