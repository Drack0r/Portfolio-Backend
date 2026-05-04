import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill, SkillDocument } from './skill.schema';

@Injectable()
export class SkillsService {
  constructor(
    @InjectModel(Skill.name) private skillModel: Model<SkillDocument>,
  ) {}

  async getSkills(): Promise<SkillDocument[]> {
    return this.skillModel.find();
  }

  async getSkillById(id: string): Promise<SkillDocument> {
    const skill = await this.skillModel.findById(id);
    if (!skill) throw new NotFoundException(`Skill ${id} introuvable`);
    return skill;
  }

  async createSkill(data: Partial<Skill>): Promise<SkillDocument> {
    return this.skillModel.create(data);
  }

  async updateSkill(id: string, data: Partial<Skill>): Promise<SkillDocument> {
    const updated = await this.skillModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updated) throw new NotFoundException(`Skill ${id} introuvable`);
    return updated;
  }

  async deleteSkill(id: string): Promise<void> {
    const deleted = await this.skillModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException(`Skill ${id} introuvable`);
  }
}
