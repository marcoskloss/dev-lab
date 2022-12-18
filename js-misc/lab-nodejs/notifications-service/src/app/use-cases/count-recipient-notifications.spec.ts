import { makeNotification } from '@test/factories/make-notification';
import { makeNotificationRepositoryMock } from '@test/mocks/make-notification-repository-mock';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Use Case - Count Recipient Notifications', () => {
  it.each([0, 1, 2, 3])(
    'should count all notifications by a given recipient',
    async (toReturnCount) => {
      const notification = makeNotification();
      const notificationRepositoryMock = makeNotificationRepositoryMock({
        countManyByRecipientId: (_id: string) => Promise.resolve(toReturnCount),
      });

      const countRecipientNotifications = new CountRecipientNotifications(
        notificationRepositoryMock,
      );
      const { count } = await countRecipientNotifications.execute({
        recipientId: notification.recipientId,
      });

      expect(count).toBe(toReturnCount);
    },
  );
});
