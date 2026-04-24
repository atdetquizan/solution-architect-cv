import type { PortfolioDataDto } from '@application/dto/PortfolioDataDto';
import portfolioData from '@infrastructure/static-data/portfolio.data.json';

export const mapStaticPortfolioToDto = (): PortfolioDataDto => ({
  profile: portfolioData.profile,
  skills: portfolioData.skills,
  experiences: portfolioData.experiences,
  certifications: portfolioData.certifications,
  projects: portfolioData.projects,
  contact: portfolioData.contact,
  sectionContent: portfolioData.sectionContent,
});
