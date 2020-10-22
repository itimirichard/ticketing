import {
  OrderCreatedEvent,
  Publisher,
  Subjects,
} from '@itimirichard-demo/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
