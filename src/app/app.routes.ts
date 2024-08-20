import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';

import { AnimalsComponent } from './animals/animals.component';
import { FlowersComponent } from './flowers/flowers.component';

export const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent,title:'home'},
{path:'about',component:AboutComponent,title:'about'},
{path:'contact',component:ContactComponent,title:'contact',
    children:[
        {path:'animals' ,component:AnimalsComponent},
        {path:'flowers' ,component:FlowersComponent}
        
    ]},
{path:'**',component:NotfoundComponent,title:'NOTFOUND'},


];
