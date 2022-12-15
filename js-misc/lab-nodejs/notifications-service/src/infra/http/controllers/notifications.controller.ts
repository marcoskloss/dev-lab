import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { CreateNotificationDTO } from '../dtos/create-notification-dto';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  public async create(@Body() body: CreateNotificationDTO) {
    const { notification } = await this.sendNotification.execute(body);
    return { notification };
  }
}