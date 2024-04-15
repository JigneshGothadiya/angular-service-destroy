import { DestroyRef, Injectable, inject } from '@angular/core';
import { ReplaySubject, Subject, interval, takeUntil } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';

@Injectable()
export class ComponentService {
  session$ = new ReplaySubject<string>(1);
  sessionLoaded$ = new ReplaySubject(1);

  destroy$ = inject(DestroyRef);
 private ngUnsubscribe = new Subject();

  constructor() { 
    interval(1000).subscribe({  
      next: res => {
        this.session$.next(new DatePipe('en').transform(new Date(), 'HH:MM:ss:SSS') || 'test');
      },
      error: err=> {

      }
    });

    this.init();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(void 0);
    this.ngUnsubscribe.complete();
  }

  init(){

    this.session$
    .pipe(
      // takeUntil(this.ngUnsubscribe)
      takeUntilDestroyed(this.destroy$)
    )
    .subscribe({
      next: res => {
        console.log('Service subscriber called................');
        this.sessionLoaded$.next(res);
      },
      error: err => {
        console.error(err);
      }
    });

  }
}

