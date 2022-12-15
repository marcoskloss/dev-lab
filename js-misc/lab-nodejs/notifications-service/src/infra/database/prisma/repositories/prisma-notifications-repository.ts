import { Notification } from 'src/app/entities/notification';
import { NotificationRepository } from '../../../../app/repositories/notification-repository';
import { PrismaService } from '../../prisma.service';

export class PrismaNotificationRepository implements NotificationRepository {
  constructor(private prisma: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prisma.notification.create({
      data: notification.value(),
    });
  }
}