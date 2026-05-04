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
import { ServicesService } from './services.service';
import { JwtGuard } from '../auth/jwt.guard';
import { Service } from './service.schema';

@Controller('api/services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get()
  @UseGuards(JwtGuard)
  getAll() {
    return this.servicesService.getServices();
  }

  @Get(':id')
  @UseGuards(JwtGuard)
  getOne(@Param('id') id: string) {
    return this.servicesService.getServiceById(id);
  }

  @Post()
  @UseGuards(JwtGuard)
  create(@Body() body: Partial<Service>) {
    return this.servicesService.createService(body);
  }

  @Patch(':id')
  @UseGuards(JwtGuard)
  update(@Param('id') id: string, @Body() body: Partial<Service>) {
    return this.servicesService.updateService(id, body);
  }

  @Delete(':id')
  @UseGuards(JwtGuard)
  delete(@Param('id') id: string) {
    return this.servicesService.deleteService(id);
  }
}
