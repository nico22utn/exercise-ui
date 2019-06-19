import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { PlayerService } from './services/player.service';
import { PlayerDataService } from './services/player-data.service';
import { HttpClientModule } from '@angular/common/http';

export const NB_CORE_PROVIDERS = [
  { provide: PlayerService, useClass: PlayerDataService },
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