import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  checkLogin() {
    return {
      code: HttpStatus.OK,
      data: {
        username: 'admin',
        isLogin: true
      },
      msg: '获取成功',
    }
  }

  loginActions() {
    return {
      code: HttpStatus.OK,
      data: {
        userId: '114514aaa',
        username: 'clhz',
        role: 'teacher',
      },
      msg: '登录成功',
    }
  }
}
