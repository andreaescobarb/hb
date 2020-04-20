import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { 
    path: 'register', 
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)},
  {
    path: 'user-data',
    loadChildren: () => import('./pages/user-data/user-data.module').then( m => m.UserDataPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu', //canActivate: [AuthGuard],
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'citas-details', //canActivate: [AuthGuard],
    loadChildren: () => import('./pages/citas-details/citas-details.module').then( m => m.CitasDetailsPageModule)
  },
  {
    path: 'perfil-doctor', //canActivate: [AuthGuard],
    loadChildren: () => import('./pages/perfil-doctor/perfil-doctor.module').then( m => m.PerfilDoctorPageModule)
  },  {
    path: 'mis-citas',
    loadChildren: () => import('./pages/mis-citas/mis-citas.module').then( m => m.MisCitasPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/carrito/carrito.module').then( m => m.CarritoPageModule)
  }

  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
