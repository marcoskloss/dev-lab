import { NotificationRepository } from '@app/repositories/notification-repository';
import { SendNotification } from './send-notification';

class NotificationRepositoryMock extends NotificationRepository {
  create = jest.fn();
  findById = jest.fn();
  save = jest.fn();
}

describe('Use Case - Send Notification', () => {
  it('should be able to send a notification', async () => {
    const notificationRepositoryMock = new NotificationRepositoryMock();

    const notificationSender = new SendNotification(notificationRepositoryMock);
    const { notification } = await notificationSender.execute({
      category: 'foo',
      content: 'string',
      recipientId: 'asd123',
    });

    expect(notification).toBeTruthy();
    expect(notificationRepositoryMock.create).toHaveBeenCalledWith(
      notification,
    );
  });
});
