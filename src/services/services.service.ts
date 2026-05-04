import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service, ServiceDocument } from './service.schema';

@Injectable()
export class ServicesService {
  constructor(
    @InjectModel(Service.name) private serviceModel: Model<ServiceDocument>,
  ) {}

  async getServices(): Promise<ServiceDocument[]> {
    return this.serviceModel.find();
  }

  async getServiceById(id: string): Promise<ServiceDocument> {
    const service = await this.serviceModel.findById(id);
    if (!service) throw new NotFoundException(`Service ${id} introuvable`);
    return service;
  }

  async createService(data: Partial<Service>): Promise<ServiceDocument> {
    return this.serviceModel.create(data);
  }

  async updateService(
    id: string,
    data: Partial<Service>,
  ): Promise<ServiceDocument> {
    const updated = await this.serviceModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updated) throw new NotFoundException(`Service ${id} introuvable`);
    return updated;
  }

  async deleteService(id: string): Promise<void> {
    const deleted = await this.serviceModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException(`Service ${id} introuvable`);
  }
}
