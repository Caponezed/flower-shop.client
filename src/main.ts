import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

const provider = [
  {
    provide: 'BASE_URL',
    useFactory: document.getElementsByTagName('base')[0].href,
    deps: [],
  },
];

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
