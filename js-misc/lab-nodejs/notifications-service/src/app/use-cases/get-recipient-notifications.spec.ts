import { makeNotification } from '@test/factories/make-notification';
import { makeNotificationRepositoryMock } from '@test/mocks/make-notification-repository-mock';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Use Case - Get Recipient Notifications', () => {
  it('should get a list all notifications of a given recipient', async () => {
    const recipientId = 'user-foo-asd-123';
    const preloadedNotifications = [
      makeNotification({ recipientId }),
      makeNotification({ recipientId }),
    ];
    const notificationRepositoryMock = makeNotificationRepositoryMock({
      findManyByRecipientId: (_id: string) =>
        Promise.resolve(preloadedNotifications),
    });

    const getRecipientNotifications = new GetRecipientNotifications(
      notificationRepositoryMock,
    );
    const { notifications } = await getRecipientNotifications.execute({
      recipientId,
    });

    expect(notifications.length).toBe(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId }),
        expect.objectContaining({ recipientId }),
      ]),
    );
  });
});
