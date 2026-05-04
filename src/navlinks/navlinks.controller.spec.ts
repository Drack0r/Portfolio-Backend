import { Test, TestingModule } from '@nestjs/testing';
import { NavlinksController } from './navlinks.controller';

describe('NavlinksController', () => {
  let controller: NavlinksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NavlinksController],
    }).compile();

    controller = module.get<NavlinksController>(NavlinksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
