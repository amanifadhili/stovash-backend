import { Command } from '@nestjs/cqrs';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { prisma } from '../../database/client';

export class DeleteSessionCommand {
  constructor(public readonly data: { tokenHash: string }) {}
}

@CommandHandler(DeleteSessionCommand)
export class DeleteSessionCommandHandler implements ICommandHandler<DeleteSessionCommand> {
  async execute(command: DeleteSessionCommand) {
    const { tokenHash } = command.data;

    await prisma.session.deleteMany({
      where: { tokenHash },
    });

    return { success: true };
  }
}