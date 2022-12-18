export class NotificationNotFound extends Error {
  constructor(message = 'Notification not found') {
    super(message);
  }
}
