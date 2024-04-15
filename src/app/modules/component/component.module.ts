import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from 'src/app/components/component1/component1.component';
import { Component2Component } from 'src/app/components/component2/component2.component';
import { MainComponent } from 'src/app/components/main/main.component';
import { ComponentService } from 'src/app/services/component.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Component1Component,
    Component2Component,
    MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path:'',
      component: MainComponent
    }])
  ],
  providers: [ComponentService],
})
export class ComponentModule { }
