import { Notification } from '@app/entities/notification';
import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification-repository';
import { UseCase } from './UseCase';

interface Params {
  recipientId: string;
}

interface Response {
  notifications: Notification[];
}

@Injectable()
export class GetRecipientNotifications implements UseCase<Params, Response> {
  constructor(private notificationRepository: NotificationRepository) {}

  public async execute({ recipientId }: Params): Promise<Response> {
    const notifications =
      await this.notificationRepository.findManyByRecipientId(recipientId);
    return {
      notifications,
    };
  }
}

export type {
  Params as GetRecipientNotificationsRequest,
  Response as GetRecipientNotificationsResponse,
};
