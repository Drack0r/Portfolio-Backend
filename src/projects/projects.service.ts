import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from './project.schema';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
  ) {}

  async getProjects(): Promise<ProjectDocument[]> {
    return this.projectModel.find();
  }

  async getProjectById(id: string): Promise<ProjectDocument> {
    const project = await this.projectModel.findById(id);
    if (!project) throw new NotFoundException(`Project ${id} introuvable`);
    return project;
  }

  async createProject(data: Partial<Project>): Promise<ProjectDocument> {
    return this.projectModel.create(data);
  }

  async updateProject(
    id: string,
    data: Partial<Project>,
  ): Promise<ProjectDocument> {
    const updated = await this.projectModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updated) throw new NotFoundException(`Project ${id} introuvable`);
    return updated;
  }

  async deleteProject(id: string): Promise<void> {
    const deleted = await this.projectModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException(`Project ${id} introuvable`);
  }
}
