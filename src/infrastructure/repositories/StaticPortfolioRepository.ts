import type { Certification } from '@domain/entities/Certification';
import type { ContactInfo } from '@domain/entities/Contact';
import type { Experience } from '@domain/entities/Experience';
import type { Profile } from '@domain/entities/Profile';
import type { Project } from '@domain/entities/Project';
import type { PortfolioRepository } from '@domain/repositories/PortfolioRepository';
import type { SectionContent } from '@domain/entities/SectionContent';
import type { SkillCategory } from '@domain/entities/Skill';
import { mapStaticPortfolioToDto } from '@infrastructure/mappers/portfolio.mapper';

export class StaticPortfolioRepository implements PortfolioRepository {
  private readonly data = mapStaticPortfolioToDto();

  async getProfile(): Promise<Profile> {
    return this.data.profile;
  }

  async getSkillCategories(): Promise<SkillCategory[]> {
    return this.data.skills;
  }

  async getExperienceTimeline(): Promise<Experience[]> {
    return this.data.experiences;
  }

  async getCertifications(): Promise<Certification[]> {
    return this.data.certifications;
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return this.data.projects;
  }

  async getContactInfo(): Promise<ContactInfo> {
    return this.data.contact;
  }

  async getSectionContent(): Promise<SectionContent> {
    return this.data.sectionContent;
  }
}
