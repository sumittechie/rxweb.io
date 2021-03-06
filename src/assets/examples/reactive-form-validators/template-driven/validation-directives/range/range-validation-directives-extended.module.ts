import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'


import { RangeCompleteTemplateDrivenValidationDirectivesComponent } from './complete/range-complete.component';
import { RangeMinimumNumberTemplateDrivenValidationDirectivesComponent } from './minimumNumber/range-minimum-number.component';
import { RangeMaximumNumberTemplateDrivenValidationDirectivesComponent } from './maximumNumber/range-maximum-number.component';
import { RangeConditionalExpressionTemplateDrivenValidationDirectivesComponent } from './conditionalExpression/range-conditional-expression.component';
import { RangeMessageTemplateDrivenValidationDirectivesComponent } from './message/range-message.component';
import { RangeMessageKeyTemplateDrivenValidationDirectivesComponent } from './messageKey/range-message-key.component';
import { RangeAddTemplateDrivenValidationDirectivesComponent } from './add/range-add.component';

@NgModule({
  declarations: [
	RangeCompleteTemplateDrivenValidationDirectivesComponent,
	RangeMinimumNumberTemplateDrivenValidationDirectivesComponent,
	RangeMaximumNumberTemplateDrivenValidationDirectivesComponent,
	RangeConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	RangeMessageTemplateDrivenValidationDirectivesComponent,
	RangeMessageKeyTemplateDrivenValidationDirectivesComponent,
	RangeAddTemplateDrivenValidationDirectivesComponent,
  ],
entryComponents: [
	RangeCompleteTemplateDrivenValidationDirectivesComponent,
	RangeMinimumNumberTemplateDrivenValidationDirectivesComponent,
	RangeMaximumNumberTemplateDrivenValidationDirectivesComponent,
	RangeConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	RangeMessageTemplateDrivenValidationDirectivesComponent,
	RangeMessageKeyTemplateDrivenValidationDirectivesComponent,
	RangeAddTemplateDrivenValidationDirectivesComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule,RxReactiveDynamicFormsModule
  ],
  
 
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	RangeCompleteTemplateDrivenValidationDirectivesComponent,
	RangeMinimumNumberTemplateDrivenValidationDirectivesComponent,
	RangeMaximumNumberTemplateDrivenValidationDirectivesComponent,
	RangeConditionalExpressionTemplateDrivenValidationDirectivesComponent,
	RangeMessageTemplateDrivenValidationDirectivesComponent,
	RangeMessageKeyTemplateDrivenValidationDirectivesComponent,
	RangeAddTemplateDrivenValidationDirectivesComponent,
  ],

})
export class  RangeTemplateDrivenValidationDirectivesExtendedModule { }
