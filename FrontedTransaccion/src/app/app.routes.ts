import { Routes } from '@angular/router';
import { TransaccionListComponent } from './Transaccion/transaccion-list/transaccion-list.component';
import { TransaccionCreateComponent } from './Transaccion/transaccion-create/transaccion-create.component';
import { TransaccionUpdateComponent } from './Transaccion/transaccion-update/transaccion-update.component';
import { TransaccionDeleteComponent } from './Transaccion/transaccion-delete/transaccion-delete.component';
import { HomeComponent } from './Transaccion/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'TransaccionList', component: TransaccionListComponent },
    { path: 'TransaccionCreate', component: TransaccionCreateComponent},
    { path: 'TransaccionUpdate/:id', component: TransaccionUpdateComponent},
    { path: 'TransaccionDelete/:id', component: TransaccionDeleteComponent}
];
