import prisma from '../../config/prisma';

export class EmployeeService {
  async upsertDetails(employeeId: number, data: {
    mobile?: string;
    age?: number;
    salary?: number;
  }) {
    return prisma.employeeDetails.upsert({
      where: { employeeId },
      update: data,
      create: {
        employeeId,
        ...data,
      },
    });
  }

  async listEmployees() {
    return prisma.employee.findMany({
      select: {
        id: true,
        fullName: true,
        email: true,
        isActive: true,
        roles: {
          select: {
            role: { select: { name: true } },
          },
        },
      },
    });
  }

async getEmployeeById(employeeId: number) {
    return prisma.employee.findUnique({
      where: { id: employeeId },
      include: {
        details: true,
        roles: {
          include: {
            role: {
              select: { id: true, name: true },
            },
          },
        },
      },
    });
  }

}