import { randomUUID } from 'node:crypto';
import { Replace } from '../../types/Replace';
import { Content } from './content';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(
    props: Replace<NotificationProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }
  public get recipientId() {
    return this.props.recipientId;
  }

  public set content(content: Content) {
    this.props.content = content;
  }
  public get content() {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }
  public get category() {
    return this.props.category;
  }

  public unread() {
    this.props.readAt = null;
  }
  public read() {
    return (this.props.readAt = new Date());
  }
  public get readAt() {
    return this.props.readAt;
  }

  public cancel() {
    return (this.props.canceledAt = new Date());
  }
  public get canceledAt() {
    return this.props.canceledAt;
  }

  public get createdAt() {
    return this.props.createdAt;
  }
}
