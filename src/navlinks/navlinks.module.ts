import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NavLink, NavLinkSchema } from './navlink.schema';
import { NavlinksService } from './navlinks.service';
import { NavlinksController } from './navlinks.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: NavLink.name, schema: NavLinkSchema }]),
    AuthModule,
  ],
  providers: [NavlinksService],
  exports: [NavlinksService],
  controllers: [NavlinksController],
})
export class NavlinksModule {}
