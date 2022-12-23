import { Controller, Post } from "@nestjs/common";
import { UserCudService } from "../service/user-cud.service";

@Controller('/user')
export class UserController {
  constructor(
    private service: UserCudService
  ) {}

  @Post('/sign-up')
  async signUp(): Promise<any> {
    return 'hi'
  }

  @Post('/sign-in')
  async signIn(): Promise<any> {
    return 'hi'
  }
}