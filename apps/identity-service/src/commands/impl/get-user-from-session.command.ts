import { Command } from '@nestjs/cqrs';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { prisma } from '@electronic-shop/database';

export class GetUserFromSessionCommand {
  constructor(public readonly data: { tokenHash: string }) {}
}

@CommandHandler(GetUserFromSessionCommand)
export class GetUserFromSessionCommandHandler implements ICommandHandler<GetUserFromSessionCommand> {
  async execute(command: GetUserFromSessionCommand) {
    const { tokenHash } = command.data;

    const session = await prisma.session.findUnique({
      where: { tokenHash },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            role: true,
            status: true,
            emailVerified: true,
            avatarUrl: true,
            tenantId: true,
          },
        },
      },
    });

    if (!session) {
      return null;
    }

    return session;
  }
}