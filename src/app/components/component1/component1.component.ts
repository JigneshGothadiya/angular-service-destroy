import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component {
destroy$ = inject(DestroyRef);

  constructor(service: ComponentService){

    service.sessionLoaded$
    .pipe(takeUntilDestroyed(this.destroy$))
    .subscribe({
      next: res => {
        console.log('Component1: ', res);
      },
      error: err => {
        console.error('Component1: ', err);
      }
    });
  }

}
