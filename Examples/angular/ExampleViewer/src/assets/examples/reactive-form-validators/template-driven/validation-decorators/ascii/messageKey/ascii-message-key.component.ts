import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { User } from './user.model';

@Component({
    selector: 'app-ascii-messageKey-template-driven-validation-decorators',
    templateUrl: './ascii-message-key.component.html'
})
export class AsciiMessageKeyTemplateDrivenValidationDecoratorsComponent implements OnInit {
    user: User
	
    constructor(
    ) { }

    ngOnInit() {
       this.user= new User()
    }
}
