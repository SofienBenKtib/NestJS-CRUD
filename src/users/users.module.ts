import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.services';
@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UsersModule {}
