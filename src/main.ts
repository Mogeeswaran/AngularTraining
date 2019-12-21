import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// step 2: ng App should bootstrap a Module - AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
