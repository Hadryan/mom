import { Get, Post, Controller, UsePipes, ValidationPipe, Body, Query, UseGuards } from '@nestjs/common';

import { AuthGuard } from 'guards/auth.guard';
import { User } from 'decorators/user.decorator';

import { LoginDTO } from './auth.dto';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}
  
  @Post('login')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  )
  async login(@Body() loginDTO: LoginDTO) {
    return await this.authService.login(loginDTO);
  }

  @Get('logout')
  @UseGuards(AuthGuard)
  async logout(@User() user) {
    return {
      success: await this.authService.logout(user)
    }
  }  

  @Get('auth-test')
  @UseGuards(AuthGuard)
  test(@User() user) {
    return [ 'Authorized user!', user ];
  }
}