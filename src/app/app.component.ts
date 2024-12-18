import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { TranslatePipe } from '@ngx-translate/core';
import { DATE_OPERATIONS_OPTIONS } from './constants/app.constants';
import { DateOperation } from './models/app.model';
import { AppStore } from './stores/app.store';
import { ElapsedOperationComponent } from './components/elapsed-operation/elapsed-operation.component';

@Component({
  selector: 'app-root',
  imports: [
    // Operations
    ElapsedOperationComponent,
    // Angular Material
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    // NGX Translate
    TranslatePipe,
  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly appStore = inject(AppStore);
  protected readonly DATE_OPERATIONS_OPTIONS = DATE_OPERATIONS_OPTIONS;
  protected readonly operation = signal<string | null>(null);
  protected readonly DateOperations = DateOperation;

  protected onBaseDateChange($event: MatDatepickerInputEvent<Date>) {
    if ($event.value) {
      this.appStore.updateBaseDate($event.value);
    }
  }

  protected setCurrentOperation($event: DateOperation | null) {
    if ($event) {
      this.appStore.setCurrentOperation($event);
    }
  }
}
