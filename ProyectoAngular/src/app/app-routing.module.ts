import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { CreateComponent } from './components/create/create.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailsComponent } from './components/details/details.component';
import { EditsComponent } from './components/edits/edits.component';



const appRoutes: Routes = [
  { path: '', component: SobremiComponent},
  { path: 'sobre-mi', component: SobremiComponent},
  { path: 'proyectos', component: ProyectosComponent},
  { path: 'crear-proyecto', component: CreateComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'proyecto/:id', component: DetailsComponent},
  { path: 'editar-proyecto/:id', component: EditsComponent},
  { path: '**', component: ErrorComponent},
  

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
