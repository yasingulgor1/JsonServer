import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { MyListComponent } from './my-list/my-list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';


const routes : Routes = [
  {path:'',component:MyListComponent},
  {path:'add',component:AddComponent},
  {path:'edit/:id',component:EditComponent},
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]

})
export class AppRoutingModule { }
