import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
    path: '',
    component: PagesComponent,
    children: [
        {
            path: 'home',
            loadChildren: './home/home.module#HomeModule',
        },
        {
            path: 'miscellaneous',
            loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
        },
        {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full',
        },
        { path: '', component: NotFoundComponent },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
