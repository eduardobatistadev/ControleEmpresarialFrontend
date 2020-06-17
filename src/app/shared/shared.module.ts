import { LoadingComponent } from './../fragments/loading/loading.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ LoadingComponent ],
  imports: [
    CommonModule
  ],
  exports: [ LoadingComponent ]
})
export class SharedModule { }
