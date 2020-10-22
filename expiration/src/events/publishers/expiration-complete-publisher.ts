import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects,
} from '@itimirichard-demo/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
