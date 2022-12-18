import { Content } from '@app/entities/content';
import { Notification, NotificationProps } from '@app/entities/notification';
import { NotificationRepository } from '@app/repositories/notification-repository';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found';

const makeNotification = (props?: NotificationProps) =>
  new Notification({
    category: 'some-category',
    content: new Content('fooooo'),
    recipientId: 'recipient-id',
    ...props,
  });

const makeNotificationRepositoryMock = (
  mocks?: Partial<NotificationRepository>,
): NotificationRepository => ({
  create: jest.fn(),
  findById: jest.fn(),
  save: jest.fn(),
  ...mocks,
});

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
