import prisma from '../../config/prisma';

export class EmployeeRoleService {
  async assignRole(employeeId: number, roleId: number) {
    return prisma.employeeRole.create({
      data: { employeeId, roleId },
    });
  }

  

  async listEmployeeRoles() {
    return prisma.employeeRole.findMany({
      include: {
        employee: {
          select: {
            id: true,
            fullName: true,
            email: true,
          },
        },
        role: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  }

}