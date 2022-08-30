import { NgModule } from '@angular/core';
import { Router,PreloadAllModules , RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'clients', component: PageListClientsComponent},
  // { path: 'orders', component: PageListOrdersComponent},
  { path: '', redirectTo: '', pathMatch: 'full' },
  // { path: 'sign-in', component: PageSignInComponent },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'clients',
    loadChildren: () =>
      import('./clients/clients.module').then((m) => m.ClientsModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found-routing.module').then(m => m.PageNotFoundRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router){
    console.log(this.router.config, 'tableau de routes');
  }
}
