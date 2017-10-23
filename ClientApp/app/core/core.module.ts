import { NgModule, Optional, SkipSelf } from '@angular/core';

import { LayoutModule } from './components/layout/layout.module';

import { LoggerService } from './services/logger.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerService } from './components/spinner/spinner.service';
import { throwIfAlreadyLoaded } from './guards/module-import.guard';

@NgModule({
  imports: [
    LayoutModule
  ],
  declarations: [
    SpinnerComponent
  ],
  providers: [
    LoggerService,
    SpinnerService
  ],
  exports: [
    LayoutModule,
    SpinnerComponent
  ],
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
