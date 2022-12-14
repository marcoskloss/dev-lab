import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationRepository } from '../repositories/notification-repository';
import { UseCase } from './UseCase';

interface Params {
  recipientId: string;
  content: string;
  category: string;
}

interface Response {
  notification: Notification;
}

export class SendNotification implements UseCase<Params, Response> {
  constructor(private notificationRepository: NotificationRepository) {}

  public async execute(request: Params): Promise<Response> {
    const notification = new Notification({
      ...request,
      content: new Content(request.content),
    });

    await this.notificationRepository.create(notification);

    return {
      notification,
    };
  }
}

export type {
  Params as SendNotificationRequest,
  Response as SendNotificationResponse,
};
