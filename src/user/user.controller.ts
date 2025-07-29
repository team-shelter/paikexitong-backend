import { Controller, Get, Post, Query } from '@nestjs/common';
import { userInfo, UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/checkLogin')
  checkLogin(@Query() query: any) {
    let userId: string = String(query.userId);
    return this.userService.checkLogin(userId);
  }

  @Post('/login')
  loginActions() {
    return this.userService.loginActions();
  }
}
