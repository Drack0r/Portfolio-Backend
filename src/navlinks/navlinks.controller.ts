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
import { NavlinksService } from './navlinks.service';
import { JwtGuard } from '../auth/jwt.guard';
import { NavLink } from './navlink.schema';

@Controller('api/navlinks')
export class NavlinksController {
  constructor(private readonly navlinksService: NavlinksService) {}

  @Get()
  @UseGuards(JwtGuard)
  getAll() {
    return this.navlinksService.getNavLinks();
  }

  @Get(':id')
  @UseGuards(JwtGuard)
  getOne(@Param('id') id: string) {
    return this.navlinksService.getNavLinkById(id);
  }

  @Post()
  @UseGuards(JwtGuard)
  create(@Body() body: Partial<NavLink>) {
    return this.navlinksService.createNavLink(body);
  }

  @Patch(':id')
  @UseGuards(JwtGuard)
  update(@Param('id') id: string, @Body() body: Partial<NavLink>) {
    return this.navlinksService.updateNavLink(id, body);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  delete(@Param('id') id: string) {
    return this.navlinksService.deleteNavLink(id);
  }
}
