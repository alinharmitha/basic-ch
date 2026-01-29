import prisma from '../../config/prisma';

export class RoleService {
  async listRoles() {
    return prisma.role.findMany({
      where: { isActive: true },
    });
  }
}