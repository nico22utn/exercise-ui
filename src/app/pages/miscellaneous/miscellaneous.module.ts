import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { MiscellaneousComponent } from './miscellaneous.component';
import { NotFoundComponent } from './not-found/not-found.component';

const COMPONENTS = [
    MiscellaneousComponent, NotFoundComponent
];  
@NgModule({
    declarations: [ ...COMPONENTS],
    imports: [ CommonModule, MiscellaneousRoutingModule ],
    exports: [ NotFoundComponent ],
    providers: [],
})
export class MiscellaneousModule {}