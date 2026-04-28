export interface SectionHeaderContent {
  eyebrow: string;
  title: string;
  description: string;
}

export interface HeroSectionContent {
  eyebrow: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  cloudArchitectureAlt: string;
  cloudArchitectureLabel: string;
  distributedSystemsAlt: string;
  distributedSystemsLabel: string;
  enterpriseInfrastructureAlt: string;
  enterpriseInfrastructureLabel: string;
}

export interface AboutSectionContent extends SectionHeaderContent {
  architectureMindsetTitle: string;
  enterpriseExperienceTitle: string;
  leadershipExperienceTitle: string;
}

export interface ContactSectionContent extends SectionHeaderContent {
  emailLabel: string;
  githubLabel: string;
  linkedinLabel: string;
  downloadCvLabel: string;
}

export interface SectionContent {
  hero: HeroSectionContent;
  about: AboutSectionContent;
  skills: SectionHeaderContent;
  experience: SectionHeaderContent;
  certifications: SectionHeaderContent;
  projects: SectionHeaderContent;
  contact: ContactSectionContent;
}
