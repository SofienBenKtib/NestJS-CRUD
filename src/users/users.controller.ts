import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './users.services';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //Returning a user
  @Get()
  getUsers() {
    return 'Getting users';
  }

  //Creatig a user **ISSUE**
  @Post()
  insertUser(
    @Body('name') name: string,
    @Body('age') age: number,
    @Body('surname') surname: string,
    @Body('email') email: string,
  ) {
    const userId = this.userService.insertUser(name, age, surname, email);
    return {
      id: userId,
    };
  }

  //Returning all the users
  @Get()
  getAllUsers() {
    return this.userService.getUsers();
  }

  //Getting a user by ID
  @Get(':userId')
  getUser(@Param('userId') userId: string) {
    return this.userService.getUser(userId);
  }

  //Updaint a user
  @Put()
  updateUser(
    @Param('userId') userId: string,
    @Body('name') name: string,
    @Body('age') age: number,
    @Body('surname') surname: string,
    @Body('email') email: string,
  ) {
    return this.userService.updateUser(userId, name, age, surname, email);
  }

  //Deleting a user by id
  @Delete(':userId')
  deleteUser(@Param('userId') userId: string) {
    this.userService.updateUser(userId);
  }
}
