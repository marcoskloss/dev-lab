import { makeNotification } from '@test/factories/make-notification';
import { makeNotificationRepositoryMock } from '@test/mocks/make-notification-repository-mock';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Use Case - Cancel Notification', () => {
  it('should cancel an existing notification', async () => {
    const notification = makeNotification();
    const notificationRepositoryMock = makeNotificationRepositoryMock({
      findById: (_id: string) => Promise.resolve(notification),
    });

    const cancelNotification = new CancelNotification(
      notificationRepositoryMock,
    );

    await expect(
      cancelNotification.execute({ notificationId: notification.id }),
    ).resolves.toBe(undefined);

    expect(notificationRepositoryMock.save).toBeCalledWith(
      expect.objectContaining({
        canceledAt: expect.any(Date),
      }),
    );
  });

  it('should throw when the notification is not found', async () => {
    const notification = makeNotification();
    const notificationRepositoryMock = makeNotificationRepositoryMock();

    const cancelNotification = new CancelNotification(
      notificationRepositoryMock,
    );

    await expect(
      cancelNotification.execute({ notificationId: notification.id }),
    ).rejects.toThrow(NotificationNotFound);
  });
});
