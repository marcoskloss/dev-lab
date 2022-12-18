import { Content } from '@app/entities/content';
import { NotificationProps, Notification } from '@app/entities/notification';

export const makeNotification = (props?: NotificationProps) =>
  new Notification({
    category: 'some-category',
    content: new Content('fooooo'),
    recipientId: 'recipient-id',
    ...props,
  });
