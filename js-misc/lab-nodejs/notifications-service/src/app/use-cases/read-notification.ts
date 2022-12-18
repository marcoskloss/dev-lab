import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification-repository';
import { NotificationNotFound } from './errors/notification-not-found';
import { UseCase } from './UseCase';

interface Params {
  notificationId: string;
}

type Response = void;

@Injectable()
export class ReadNotification implements UseCase<Params, Response> {
  constructor(private notificationRepository: NotificationRepository) {}

  public async execute({ notificationId: id }: Params): Promise<Response> {
    const notification = await this.notificationRepository.findById(id);
    if (!notification) throw new NotificationNotFound();

    notification.read();
    this.notificationRepository.save(notification);
  }
}

export type {
  Params as ReadNotificationRequest,
  Response as ReadNotificationResponse,
};
