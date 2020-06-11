import { BachecaPreferitiPage } from './bacheca-preferiti';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BachecaPreferitiPageRoutingModule } from './bacheca-preferiti-routing.module';

@NgModule({
declarations: [BachecaPreferitiPage],
    imports: [IonicModule, CommonModule, FormsModule, BachecaPreferitiPageRoutingModule],
exports: [BachecaPreferitiPage]
})
export class BachecaPreferitiModule {}
