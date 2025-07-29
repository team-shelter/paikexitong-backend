import { HttpStatus, Injectable } from '@nestjs/common';

export interface userInfo {
  userId: string;
  username: string;
  class?: string;
  roles: string[];
}

@Injectable()
export class UserService {
  checkLogin(userId: string) {
    let resultJson: userInfo | {} = {};

    switch (userId) {
      case '114514a':
        resultJson = {
          userId: userId,
          username: 'sqlhz',
          roles: ['admin', 'teacher']
        }
      break;
      case '114514aa':
        resultJson = {
          userId: userId,
          username: 'hmk',
          class: '20j1',
          roles: ['student']
        }
      break;
      case '114514aaa':
        resultJson = {
          userId: userId,
          username: 'clhz',
          roles: ['teacher']
        }
      break;
      default:
        break;
    }
    return {
      code: HttpStatus.OK,
      data: resultJson,
      msg: '获取成功',
    }
  }

  loginActions() {
    return {
      code: HttpStatus.OK,
      data: {
        userId: '114514aaa',
        username: 'clhz',
        roles: ['teacher'],
      },
      msg: '登录成功',
    }
  }
}
