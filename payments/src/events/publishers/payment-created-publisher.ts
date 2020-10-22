import {
  PaymentCreatedEvent,
  Publisher,
  Subjects,
} from '@itimirichard-demo/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
