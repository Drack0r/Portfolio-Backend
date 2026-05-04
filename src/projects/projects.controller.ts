import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { JwtGuard } from '../auth/jwt.guard';
import { Project } from './project.schema';

@Controller('api/projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  @UseGuards(JwtGuard)
  getAll() {
    return this.projectsService.getProjects();
  }
  @Get(':id')
  @UseGuards(JwtGuard)
  getOne(@Param('id') id: string) {
    return this.projectsService.getProjectById(id);
  }

  @Post()
  @UseGuards(JwtGuard)
  create(@Body() body: Partial<Project>) {
    return this.projectsService.createProject(body);
  }

  @Patch(':id')
  @UseGuards(JwtGuard)
  update(@Param('id') id: string, @Body() body: Partial<Project>) {
    return this.projectsService.updateProject(id, body);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  delete(@Param('id') id: string) {
    return this.projectsService.deleteProject(id);
  }
}
