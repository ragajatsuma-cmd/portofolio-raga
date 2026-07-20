export interface SocialLink {
  id: string;
  platform: string;
  username: string;
  url: string;
  icon: string; // Lucide icon name
  color: string; // Tailwind color class for hover
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: 'Web' | 'Mobile' | 'Design' | 'Other';
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'Frontend' | 'Backend' | 'Tools' | 'Others';
}

export interface PortfolioData {
  name: string;
  role: string;
  company?: string;
  location: string;
  avatarUrl: string;
  bio: string;
  longBio: string;
  email: string;
  phone?: string;
  skills: Skill[];
  projects: Project[];
  socials: SocialLink[];
  stats: { label: string; value: string }[];
}
