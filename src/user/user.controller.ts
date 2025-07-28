import { Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/checkLogin')
  checkLogin() {
    return this.userService.checkLogin();
  }

  @Post('/login')
  loginActions() {
    return this.userService.loginActions();
  }
}
