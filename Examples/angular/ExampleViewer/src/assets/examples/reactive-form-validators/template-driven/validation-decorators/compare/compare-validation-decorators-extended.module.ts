import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { CompareCompleteTemplateDrivenValidationDecoratorsComponent } from './complete/compare-complete.component';
import { CompareFieldNameTemplateDrivenValidationDecoratorsComponent } from './fieldName/compare-field-name.component';
import { CompareMessageTemplateDrivenValidationDecoratorsComponent } from './message/compare-message.component';
import { CompareMessageKeyTemplateDrivenValidationDecoratorsComponent } from './messageKey/compare-message-key.component';
import { CompareAddTemplateDrivenValidationDecoratorsComponent } from './add/compare-add.component';

@NgModule({
  declarations: [
	CompareCompleteTemplateDrivenValidationDecoratorsComponent,
	CompareFieldNameTemplateDrivenValidationDecoratorsComponent,
	CompareMessageTemplateDrivenValidationDecoratorsComponent,
	CompareMessageKeyTemplateDrivenValidationDecoratorsComponent,
	CompareAddTemplateDrivenValidationDecoratorsComponent,
  ],
entryComponents: [
	CompareCompleteTemplateDrivenValidationDecoratorsComponent,
	CompareFieldNameTemplateDrivenValidationDecoratorsComponent,
	CompareMessageTemplateDrivenValidationDecoratorsComponent,
	CompareMessageKeyTemplateDrivenValidationDecoratorsComponent,
	CompareAddTemplateDrivenValidationDecoratorsComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	CompareCompleteTemplateDrivenValidationDecoratorsComponent,
	CompareFieldNameTemplateDrivenValidationDecoratorsComponent,
	CompareMessageTemplateDrivenValidationDecoratorsComponent,
	CompareMessageKeyTemplateDrivenValidationDecoratorsComponent,
	CompareAddTemplateDrivenValidationDecoratorsComponent,
  ],

})
export class  CompareTemplateDrivenValidationDecoratorsExtendedModule { }
