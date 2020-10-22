import {
  OrderCancelledEvent,
  Publisher,
  Subjects,
} from '@itimirichard-demo/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
