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
import { SkillsService } from './skills.service';
import { JwtGuard } from '../auth/jwt.guard';
import { Skill } from './skill.schema';

@Controller('api/skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Get()
  @UseGuards(JwtGuard)
  getAll() {
    return this.skillsService.getSkills();
  }

  @Get(':id')
  @UseGuards(JwtGuard)
  getOne(@Param('id') id: string) {
    return this.skillsService.getSkillById(id);
  }

  @Post()
  @UseGuards(JwtGuard)
  create(@Body() body: Partial<Skill>) {
    return this.skillsService.createSkill(body);
  }

  @Patch(':id')
  @UseGuards(JwtGuard)
  update(@Param('id') id: string, @Body() body: Partial<Skill>) {
    return this.skillsService.updateSkill(id, body);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  delete(@Param('id') id: string) {
    return this.skillsService.deleteSkill(id);
  }
}
