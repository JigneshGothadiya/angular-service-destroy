import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss']
})
export class Component2Component {
  destroy$ = inject(DestroyRef);

  constructor(service: ComponentService){
    service.sessionLoaded$
    .pipe(takeUntilDestroyed(this.destroy$))
    .subscribe({
      next: res => {
        console.log('Component2: ', res);
      },
      error: err => {
        console.error('Component2: ', err);
      }
    });
  }
}
