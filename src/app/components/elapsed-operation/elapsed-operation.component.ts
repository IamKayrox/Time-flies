import { ChangeDetectionStrategy, Component, computed, inject, Signal, signal } from '@angular/core';
import { AppStore } from '../../stores/app.store';
import { TimeUnit } from '../../models/common.model';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TIME_UNIT_OPTIONS } from '../../constants/common.constants';
import { computeTranslation } from '../../utils/compute-translation';
import { TranslatePipe } from '@ngx-translate/core';
import moment from "moment";
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-elapsed-operation',
  imports: [
    DecimalPipe,
    // Angular Material
    MatFormField,
    MatInputModule,
    MatLabel,
    MatSelectModule,
    // NGX Translate
    TranslatePipe,
  ],
  templateUrl: './elapsed-operation.component.html',
  styleUrl: './elapsed-operation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElapsedOperationComponent {
  private readonly _appStore = inject(AppStore);

  protected readonly TIME_UNIT_OPTIONS = TIME_UNIT_OPTIONS;
  protected readonly timeUnit = signal<TimeUnit | null>(null);
  protected readonly translatedTimeUnit: Signal<string>;
  protected readonly time: Signal<number>;

  public constructor() {
    this.translatedTimeUnit = computeTranslation(() => {
      const timeUnit = this.timeUnit() || TimeUnit.Seconds;
      return `common.${timeUnit}`;
    });
    this.time = computed(() => {
      const timeUnit = this.timeUnit() || TimeUnit.Seconds;
      const baseDate = this._appStore.baseDate();
      if (baseDate) {
        return moment().diff(baseDate, timeUnit);
      }
      return 0;
    })
  }
}
