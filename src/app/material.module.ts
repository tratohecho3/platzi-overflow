import { NgModule } from '@angular/core';

const modules =   [
    MatButtonModule, 
    MatCheckboxModule
  ] 

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
@NgModule({
  imports: modules, 
  exports: modules

})
export class MaterialModule { }
