import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutComponent } from './Components/about/about.component';
import {Routes,RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { Contactservice } from './services/contactService';
import { FormsModule } from '@angular/forms';
const appRoute:Routes=[ 
{path:'about',component: AboutComponent},
{path:'contacts',component: ContactComponent},
{path:'',redirectTo:'/about',pathMatch:'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    HttpModule,
    FormsModule
  ],
  providers: [ Contactservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
