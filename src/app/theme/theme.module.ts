import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

const NB_THEME_PROVIDERS = [
    // ...NbSidebarModule.forRoot().providers, -- Example Service
];
@NgModule({
    declarations: [HeaderComponent],
    imports: [ CommonModule, RouterModule ],
    exports: [ HeaderComponent ],
    entryComponents: [ HeaderComponent ]
})
export class ThemeModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders>{
          ngModule: ThemeModule,
          providers: [...NB_THEME_PROVIDERS],
        };
    }
}