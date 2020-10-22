import {
  Subjects,
  TicketUpdatedEvent,
  Publisher,
} from '@itimirichard-demo/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
