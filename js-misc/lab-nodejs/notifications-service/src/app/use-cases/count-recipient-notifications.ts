import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification-repository';
import { UseCase } from './UseCase';

interface Params {
  recipientId: string;
}

interface Response {
  count: number;
}

@Injectable()
export class CountRecipientNotifications implements UseCase<Params, Response> {
  constructor(private notificationRepository: NotificationRepository) {}

  public async execute({ recipientId }: Params): Promise<Response> {
    const count = await this.notificationRepository.countManyByRecipientId(
      recipientId,
    );
    return {
      count,
    };
  }
}

export type {
  Params as CountRecipientNotificationsRequest,
  Response as CountRecipientNotificationsResponse,
};
