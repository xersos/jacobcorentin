import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable()
export class LoadingService {

  subject = new Subject();

  subscribe(onNext): Subscription {
    return this.subject.subscribe(onNext);
  }

  stop() {
    this.subject.next(false);
  }
}
