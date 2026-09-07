import { Command } from '@nestjs/cqrs';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { prisma } from '../../database/client';

export class CreateSessionCommand {
  constructor(public readonly data: {
    tokenHash: string;
    userId: string;
    expiresAt: string;
  }) {}
}

@CommandHandler(CreateSessionCommand)
export class CreateSessionCommandHandler implements ICommandHandler<CreateSessionCommand> {
  async execute(command: CreateSessionCommand) {
    const { tokenHash, userId, expiresAt } = command.data;

    return await prisma.session.create({
      data: {
        tokenHash,
        userId,
        expiresAt: new Date(expiresAt),
      },
    });
  }
}