import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: 'clients', component: ClientsComponent},
  {path: 'login', component: LoginComponent},
  {path: '',redirectTo: 'login', pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
