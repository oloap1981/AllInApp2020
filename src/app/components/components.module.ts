import { NgModule } from '@angular/core';
import { HomeMessComponent } from './vari/home-mess/home-mess';
import { HomeComComponent } from './vari/home-com/home-com';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [HomeMessComponent, HomeComComponent],
	imports: [CommonModule],
	exports: [HomeMessComponent, HomeComComponent]
})
export class ComponentsModule {}