import { Command } from '@nestjs/cqrs';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { prisma } from '../../database/client';

export class HandleGoogleUserCommand {
  constructor(public readonly data: {
    googleSub: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    avatarUrl: string | null;
    emailVerified: boolean;
  }) {}
}

@CommandHandler(HandleGoogleUserCommand)
export class HandleGoogleUserCommandHandler implements ICommandHandler<HandleGoogleUserCommand> {
  async execute(command: HandleGoogleUserCommand) {
    const { googleSub, email, firstName, lastName, avatarUrl, emailVerified } = command.data;

    return await prisma.$transaction(async (tx) => {
      // Check if Google account already exists
      const existingAccount = await tx.account.findUnique({
        where: {
          provider_providerAccountId: {
            provider: 'GOOGLE',
            providerAccountId: googleSub,
          },
        },
        include: {
          user: true,
        },
      });

      if (existingAccount) {
        // Update existing user with latest Google data
        return await tx.user.update({
          where: { id: existingAccount.userId },
          data: {
            firstName: firstName || undefined,
            lastName: lastName || undefined,
            avatarUrl: avatarUrl || undefined,
            emailVerified,
          },
        });
      }

      // Check if user exists with same email
      const existingUser = await tx.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        // Link Google account to existing user
        await tx.account.create({
          data: {
            userId: existingUser.id,
            provider: 'GOOGLE',
            providerAccountId: googleSub,
          },
        });

        return existingUser;
      }

      // Create new user with Google account
      // Create a private tenant for this Google user (assigned during onboarding)
      const tenant = await tx.tenant.create({
        data: { name: `${firstName || 'Google'} ${lastName || 'User'}`, status: 'ACTIVE' },
      });

      const newUser = await tx.user.create({
        data: {
          email,
          firstName: firstName || 'Unknown',
          lastName: lastName || 'User',
          avatarUrl: avatarUrl || null,
          emailVerified,
          password: null,
          tenantId: tenant.id,
          role: 'STAFF',
          status: 'ACTIVE',
          accounts: {
            create: {
              provider: 'GOOGLE',
              providerAccountId: googleSub,
            },
          },
        },
      });

      return newUser;
    });
  }
}