import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { HeaderHeuristicaComponent } from '../featerures/componente/Header Heuristica/Header Heuristica';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-h2-page',
  imports: [HeaderHeuristicaComponent,CommonModule ],
  templateUrl: './h2-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class H2Page { 
    lastOperation = signal('');
  
  executeOperation(action: string) {
    this.lastOperation.set(action);
  }
}
