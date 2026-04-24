import type { PortfolioDataDto } from '@application/dto/PortfolioDataDto';
import type { PortfolioDataPort } from '@application/ports/PortfolioDataPort';

export class GetPortfolioDataUseCase {
  constructor(private readonly portfolioRepository: PortfolioDataPort) {}

  async execute(): Promise<PortfolioDataDto> {
    const [profile, skills, experiences, certifications, projects, contact, sectionContent] =
      await Promise.all([
        this.portfolioRepository.getProfile(),
        this.portfolioRepository.getSkillCategories(),
        this.portfolioRepository.getExperienceTimeline(),
        this.portfolioRepository.getCertifications(),
        this.portfolioRepository.getFeaturedProjects(),
        this.portfolioRepository.getContactInfo(),
        this.portfolioRepository.getSectionContent(),
      ]);

    return {
      profile,
      skills,
      experiences,
      certifications,
      projects,
      contact,
      sectionContent,
    };
  }
}
