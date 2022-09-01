import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFullWidthComponent } from './components/template-full-width/template-full-width.component';
import { TemplateContainerComponent } from './components/template-container/template-container.component';
import { TemplateFormComponent } from './components/forms/template-form/template-form.component';



@NgModule({
  declarations: [
    TemplateFullWidthComponent,
    TemplateContainerComponent,
    TemplateFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateFullWidthComponent,
    TemplateContainerComponent,
    TemplateFormComponent
  ]
})
export class TemplatesModule { }
