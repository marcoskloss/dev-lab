import { Content } from './content';
import { Notification } from './notification';

describe('Entity - Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      category: 'Foo',
      content: new Content('some string'),
      recipientId: '123asd',
    });

    expect(notification).toBeTruthy();
  });
});
