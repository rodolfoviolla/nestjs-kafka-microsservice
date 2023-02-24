import { Injectable } from '@nestjs/common';
import { GetUserRequest } from './get-user-request.dto';

@Injectable()
export class AppService {
  private readonly users: { userId: string; stripeUserId: string }[] = [
    {
      userId: '123',
      stripeUserId: '321321',
    },
    {
      userId: '456',
      stripeUserId: '654654',
    },
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getUser(getUserRequest: GetUserRequest) {
    return this.users.find((user) => user.userId === getUserRequest.userId);
  }
}
