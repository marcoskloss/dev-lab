import { NotificationRepository } from '@app/repositories/notification-repository';

export const makeNotificationRepositoryMock = (
  mocks?: Partial<NotificationRepository>,
): NotificationRepository => ({
  create: jest.fn(),
  findById: jest.fn(),
  countManyByRecipientId: jest.fn(),
  save: jest.fn(),
  findManyByRecipientId: jest.fn(),
  ...mocks,
});
