import { Injectable } from '@nestjs/common';
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
}
