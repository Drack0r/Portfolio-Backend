import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PortfolioModule } from './portfolio/portfolio.module';
import { SkillsModule } from './skills/skills.module';
import { ServicesModule } from './services/services.module';
import { ProjectsModule } from './projects/projects.module';
import { NavlinksModule } from './navlinks/navlinks.module';
import { PortfolioController } from './portfolio/portfolio.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'production' ? '.env.prod' : '.env.dev',
    }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
    }),
    PortfolioModule,
    SkillsModule,
    ServicesModule,
    ProjectsModule,
    NavlinksModule,
    AuthModule,
  ],
  controllers: [AppController, PortfolioController],
  providers: [AppService],
})
export class AppModule {}
