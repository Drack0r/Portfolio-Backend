import { Module } from '@nestjs/common';
import { PortfolioController } from './portfolio.controller';
import { SkillsModule } from '../skills/skills.module';
import { ServicesModule } from '../services/services.module';
import { ProjectsModule } from '../projects/projects.module';
import { NavlinksModule } from '../navlinks/navlinks.module';

@Module({
  imports: [SkillsModule, ServicesModule, ProjectsModule, NavlinksModule],
  controllers: [PortfolioController],
})
export class PortfolioModule {}
