import prisma from '../../config/prisma';
import { hashPassword, comparePassword } from '../../utils/password';
import { signToken } from '../../utils/jwt';

export class AuthService {
  async register(data: {
    fullName: string;
    email: string;
    password: string;
    details?: {
      mobile?: string;
      age?: number;
      salary?: number;
    };
  }) {
    const hashedPassword = await hashPassword(data.password);

    return prisma.employee.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        password: hashedPassword,

        // create employee details in separate table
        details: data.details
          ? {
              create: {
                mobile: data.details.mobile,
                age: data.details.age,
                salary: data.details.salary,
              },
            }
          : undefined,

        // default role assignment
        roles: {
          create: {
            role: {
              connect: { name: 'employee' }, // role must exist
            },
          },
        },
      },
    });
  }

  //  UPDATED LOGIN WITH LOGIN HISTORY
  async login(
    email: string,
    password: string,
    meta?: { ip?: string; userAgent?: string }
  ) {
    const employee = await prisma.employee.findUnique({
      where: { email },
      include: {
        roles: {
          include: { role: true },
        },
      },
    });

    //  email not found
    if (!employee) {
      throw new Error('Invalid credentials');
    }

    const isValid = await comparePassword(password, employee.password);

    //  wrong password → save failed login
    if (!isValid) {
      await prisma.employeeLoginHistory.create({
        data: {
          employeeId: employee.id,
          isSuccess: false,
          ipAddress: meta?.ip,
          userAgent: meta?.userAgent,
        },
      });
      throw new Error('invalid email or password');
    }

    //  successful login → save history
    await prisma.employeeLoginHistory.create({
      data: {
        employeeId: employee.id,
        isSuccess: true,
        ipAddress: meta?.ip,
        userAgent: meta?.userAgent,
      },
    });

    const roles = employee.roles.map(
      (r) => r.role.name
    );

    const token = signToken({
      id: employee.id,
      roles,
    });

    return { token };
  }
}