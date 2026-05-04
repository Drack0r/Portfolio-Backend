import { Controller, Get } from '@nestjs/common';
import { SkillsService } from '../skills/skills.service';
import { ServicesService } from '../services/services.service';
import { ProjectsService } from '../projects/projects.service';
import { NavlinksService } from '../navlinks/navlinks.service';

@Controller('api/portfolio')
export class PortfolioController {
  constructor(
    private readonly skillsService: SkillsService,
    private readonly servicesService: ServicesService,
    private readonly projectsService: ProjectsService,
    private readonly navlinksService: NavlinksService,
  ) {}

  @Get('data')
  async getPortfolioData() {
    const [skills, services, projects, navLinks] = await Promise.all([
      this.skillsService.getSkills(),
      this.servicesService.getServices(),
      this.projectsService.getProjects(),
      this.navlinksService.getNavLinks(),
    ]);

    return { skills, services, projects, navLinks };
  }
}
