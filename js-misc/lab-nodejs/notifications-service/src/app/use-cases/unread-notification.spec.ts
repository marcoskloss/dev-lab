import { makeNotification } from '@test/factories/make-notification';
import { makeNotificationRepositoryMock } from '@test/mocks/make-notification-repository-mock';
import { UnreadNotification } from './unread-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Use Case - Unread Notification', () => {
  it('should mark a notification as unread', async () => {
    const notification = makeNotification({ readAt: new Date() });
    const notificationRepositoryMock = makeNotificationRepositoryMock({
      findById: (_id: string) => Promise.resolve(notification),
    });

    const unreadNotification = new UnreadNotification(
      notificationRepositoryMock,
    );

    await expect(
      unreadNotification.execute({ notificationId: notification.id }),
    ).resolves.toBe(undefined);

    expect(notificationRepositoryMock.save).toBeCalledWith(
      expect.objectContaining({
        readAt: null,
      }),
    );
  });

  it('should throw when the notification is not found', async () => {
    const notification = makeNotification();
    const notificationRepositoryMock = makeNotificationRepositoryMock();

    const unreadNotification = new UnreadNotification(
      notificationRepositoryMock,
    );

    await expect(
      unreadNotification.execute({ notificationId: notification.id }),
    ).rejects.toThrow(NotificationNotFound);
  });
});
