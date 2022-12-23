import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "../models/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserQueryService {
  @InjectRepository(UserEntity)
  private readonly repo: Repository<UserEntity>

  // todo typeorm method를 활용해서 CRUD를 작성해 주세요
  // findOne, save, update, softDelete등과 같은 메서드 들이 있습니다.
}