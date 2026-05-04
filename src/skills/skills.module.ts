import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Skill, SkillSchema } from './skill.schema';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Skill.name, schema: SkillSchema }]),
    AuthModule,
  ],
  providers: [SkillsService],
  exports: [SkillsService],
  controllers: [SkillsController],
})
export class SkillsModule {}
