import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NavLink, NavLinkDocument } from './navlink.schema';

@Injectable()
export class NavlinksService {
  constructor(
    @InjectModel(NavLink.name) private navlinkModel: Model<NavLinkDocument>,
  ) {}

  async getNavLinks(): Promise<NavLinkDocument[]> {
    return this.navlinkModel.find();
  }

  async getNavLinkById(id: string): Promise<NavLinkDocument> {
    const navlink = await this.navlinkModel.findById(id);
    if (!navlink) throw new NotFoundException(`NavLink ${id} introuvable`);
    return navlink;
  }

  async createNavLink(data: Partial<NavLink>): Promise<NavLinkDocument> {
    return this.navlinkModel.create(data);
  }

  async updateNavLink(
    id: string,
    data: Partial<NavLink>,
  ): Promise<NavLinkDocument> {
    const updated = await this.navlinkModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updated) throw new NotFoundException(`NavLink ${id} introuvable`);
    return updated;
  }

  async deleteNavLink(id: string): Promise<void> {
    const deleted = await this.navlinkModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException(`NavLink ${id} introuvable`);
  }
}
