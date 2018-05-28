import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatListModule, MatGridListModule, MatRadioModule, MatProgressSpinnerModule, MatMenuModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

const modules =   [
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatRadioModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatMenuModule

  ] 


@NgModule({
  imports: modules, 
  exports: modules

})
export class MaterialModule { }
