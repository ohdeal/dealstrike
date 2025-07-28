import { EntityManager } from "typeorm"
import { UserRole } from "./user-role.entity"

class OhDealUserService {
  private manager: EntityManager

  constructor({ manager }) {
    this.manager = manager
  }

  async setRole(userId: string, role: string) {
    // Attribue le rôle à un user
    await this.manager.save(UserRole, { user_id: userId, role })
  }

  async getRole(userId: string) {
    const userRole = await this.manager.findOne(UserRole, { where: { user_id: userId } })
    return userRole?.role
  }
}

export default OhDealUserService
