import { NgModule } from '@angular/core';
import { HomeMessComponent } from './vari/home-mess/home-mess';
import { HomeComComponent } from './vari/home-com/home-com';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';

@NgModule({
	declarations: [BaseComponent, HomeMessComponent, HomeComComponent],
	imports: [CommonModule],
	exports: [BaseComponent, HomeMessComponent, HomeComComponent]
})
export class ComponentsModule {}