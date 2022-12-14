import { SendNotification } from './send-notification';

const notificationRepositoryMock = {
  create: jest.fn(),
};

describe('Use Case - Send Notification', () => {
  it('should be able to send a notification', async () => {
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
