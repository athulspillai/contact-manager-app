import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { ContactmanagerComponent } from './contactmanager/contactmanager.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdatecontactComponent } from './updatecontact/updatecontact.component';
import { ViewcontactComponent } from './viewcontact/viewcontact.component';


const routes: Routes = [
  {
    path:'',redirectTo:'/contacts/admin',pathMatch:'full'
  },
  {
    path:'contacts/admin', component:ContactmanagerComponent
  },
  {
    path:'contacts/add', component:AddcontactComponent
  },
  {
    path:'contacts/edit/:contactID',component:UpdatecontactComponent
  },
  {
    path:'contacts/view/:contactID',component:ViewcontactComponent
  },
  {
    path:'**',component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
