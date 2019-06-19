import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../theme/theme.module';
import { HomeModule } from './home/home.module';

const PAGES_COMPONENTS = [
    PagesComponent
];

@NgModule({
    declarations: [ ...PAGES_COMPONENTS],
    imports: [ PagesRoutingModule, ThemeModule, MiscellaneousModule, HomeModule ],
    exports: [],
    providers: [],
})
export class PagesModule {}