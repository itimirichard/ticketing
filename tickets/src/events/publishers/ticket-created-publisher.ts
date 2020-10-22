import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@itimirichard-demo/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
