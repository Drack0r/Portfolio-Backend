import { Test, TestingModule } from '@nestjs/testing';
import { NavlinksService } from './navlinks.service';

describe('NavlinksService', () => {
  let service: NavlinksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NavlinksService],
    }).compile();

    service = module.get<NavlinksService>(NavlinksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
