import type { PortfolioDataDto } from '@application/dto/PortfolioDataDto';

export const toPortfolioViewModel = (data: PortfolioDataDto): PortfolioDataDto => ({
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
