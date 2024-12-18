import { computed, DestroyRef, inject, signal } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { TranslateService } from "@ngx-translate/core";

export function computeTranslation(computation: TranslationComputation) {
  const key = computed(computation);
  const translateService = inject(TranslateService);
  const destroyRef = inject(DestroyRef);
  const language = signal(translateService.currentLang);
  translateService.onTranslationChange.pipe(takeUntilDestroyed(destroyRef)).subscribe(($event) => {
    language.set($event.lang);
  });
  return computed(() => {
    language();
    return translateService.instant(key());
  })
}

/**
 * @returns A translation key
 */
export interface TranslationComputation {
  (): string;
}
