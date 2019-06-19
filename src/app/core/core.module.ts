import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { UserDataService } from './services/user-data.service';

export const NB_CORE_PROVIDERS = [
  { provide: UserService, useClass: UserDataService },
];
@NgModule({
    declarations: [],
    imports: [ 
      CommonModule,
      HttpClientModule
    ],
    exports: [],
    providers: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
      throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}