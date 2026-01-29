import prisma from '../../config/prisma';

export class LoginHistoryService {
  async getMyHistory(employeeId: number) {
    return prisma.employeeLoginHistory.findMany({
      where: { employeeId },
      orderBy: { loginAt: 'desc' },
    });
  }

  async getHistoryByEmployee(employeeId: number) {
    return prisma.employeeLoginHistory.findMany({
      where: { employeeId },
      orderBy: { loginAt: 'desc' },
    });
  }

async listAll() {
    return prisma.employeeLoginHistory.findMany({
      include: {
        employee: {
          select: {
            id: true,
            fullName: true,
            email: true,
          },
        },
      },
      orderBy: {
        loginAt: 'desc',
      },
    });
  }

}