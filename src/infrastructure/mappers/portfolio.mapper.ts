import type { PortfolioDataDto } from '@application/dto/PortfolioDataDto';
import {
  certificationData,
  contactData,
  experienceData,
  profileData,
  projectData,
  skillData,
} from '@infrastructure/static-data/portfolio.data';

export const mapStaticPortfolioToDto = (): PortfolioDataDto => ({
  profile: profileData,
  skills: skillData,
  experiences: experienceData,
  certifications: certificationData,
  projects: projectData,
  contact: contactData,
});
