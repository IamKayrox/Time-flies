import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { httpLoaderFactory } from './utils/http-translation-loader.factory';
import { provideNativeDateAdapter } from '@angular/material/core';
import { AppStore } from './stores/app.store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideTranslateService({
        loader: {
            provide: TranslateLoader,
            useFactory: httpLoaderFactory,
            deps: [HttpClient],
        },
        defaultLanguage: 'es',
    }),
    provideNativeDateAdapter(),
    AppStore,
]
};
