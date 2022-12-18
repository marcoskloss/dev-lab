import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';
import { Notification as PrismaNotification } from '@prisma/client';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }

  static toDomain(notification: PrismaNotification) {
    return new Notification({
      category: notification.category,
      content: new Content(notification.content),
      recipientId: notification.recipientId,
      canceledAt: notification.canceledAt,
      createdAt: notification.createdAt,
      readAt: notification.createdAt,
    });
  }
}
