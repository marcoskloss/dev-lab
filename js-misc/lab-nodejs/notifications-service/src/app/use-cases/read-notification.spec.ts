import { makeNotification } from '@test/factories/make-notification';
import { makeNotificationRepositoryMock } from '@test/mocks/make-notification-repository-mock';
import { ReadNotification } from './read-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Use Case - Read Notification', () => {
  it('should mark a notification as read', async () => {
    const notification = makeNotification();
    const notificationRepositoryMock = makeNotificationRepositoryMock({
      findById: (_id: string) => Promise.resolve(notification),
    });

    const readNotification = new ReadNotification(notificationRepositoryMock);

    await expect(
      readNotification.execute({ notificationId: notification.id }),
    ).resolves.toBe(undefined);

    expect(notificationRepositoryMock.save).toBeCalledWith(
      expect.objectContaining({
        readAt: expect.any(Date),
      }),
    );
  });

  it('should throw when the notification is not found', async () => {
    const notification = makeNotification();
    const notificationRepositoryMock = makeNotificationRepositoryMock();

    const readNotification = new ReadNotification(notificationRepositoryMock);

    await expect(
      readNotification.execute({ notificationId: notification.id }),
    ).rejects.toThrow(NotificationNotFound);
  });
});
