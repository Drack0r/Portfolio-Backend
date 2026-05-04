import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NavLink, NavLinkSchema } from './navlink.schema';
import { NavlinksService } from './navlinks.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: NavLink.name, schema: NavLinkSchema }]),
  ],
  providers: [NavlinksService],
  exports: [NavlinksService],
})
export class NavlinksModule {}
