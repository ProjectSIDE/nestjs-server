import { Injectable } from "@nestjs/common";
import { UserQueryService } from "./user-query.service";

@Injectable()
export class UserCudService {
  constructor(
    private service: UserQueryService
  ) {
  }
// todo 컨트롤러에서 요청받았을 때 동작하는 로직을 작성해 주세요
}