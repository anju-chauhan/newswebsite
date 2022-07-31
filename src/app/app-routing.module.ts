import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SomePageComponent } from './some-page/some-page.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
{
	path: 'admin',
	component: AdminComponent
},
{
	path: '',
	component: SomePageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
