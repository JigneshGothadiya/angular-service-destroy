import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { MainComponent } from './components/main/main.component';
import { ComponentService } from './services/component.service';
import { ComponentModule } from './modules/component/component.module';
import { RouterModule } from '@angular/router';
import { RootcompComponent } from './components/rootcomp/rootcomp.component';

@NgModule({
  declarations: [
    AppComponent,
    RootcompComponent
  ],
  imports: [
    BrowserModule,
    // ComponentModule,
    RouterModule.forRoot([{
      path:'main',
      loadChildren: () => import('./modules/component/component.module').then(x => x.ComponentModule)
    },
  {
    path:'',
    component:RootcompComponent
  },
  {
    path: 'root',
    pathMatch:'full',
    redirectTo:''
  }
])
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
