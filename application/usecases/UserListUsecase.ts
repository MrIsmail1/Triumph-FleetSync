import { UserRepository } from "../repositories/UserRepository";

export class UserListUsecase {
  public constructor(private readonly userRepository: UserRepository) {}

  public async execute() {
    return this.userRepository.findAll();
  }
}
