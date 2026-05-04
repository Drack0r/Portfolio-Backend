import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private readonly adminEmail: string;
  private readonly adminPasswordHash: string;

  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {
    this.adminEmail = this.configService.get<string>('ADMIN_EMAIL')!;
    const plainPassword = this.configService.get<string>('ADMIN_PASSWORD')!;
    this.adminPasswordHash = bcrypt.hashSync(plainPassword, 10);
  }

  async login(email: string, password: string) {
    if (email !== this.adminEmail) {
      throw new UnauthorizedException('Identifiants invalides');
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      this.adminPasswordHash,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Identifiants invalides');
    }

    const payload = { email, role: 'admin' };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
