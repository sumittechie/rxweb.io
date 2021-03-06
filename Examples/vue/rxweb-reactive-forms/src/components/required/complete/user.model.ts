import {  required, } from   "@rxweb/reactive-forms"   

export class User {

	@required() 
	firstName: string;
	
	
	//If you want to apply conditional expression of type 'function'
	@required({conditionalExpression:(x,y) => x.firstName == "Bharat"  }) 
	middleName: string;
	
	
	//If you want to apply conditional expression of type 'string'
	@required({conditionalExpression:'x => x.firstName == "Bharat"' }) 
	lastName: string;
	
	
	@required({message:'Username cannot be blank.' }) 
	userName: string;
	
	
	@required({messageKey:'requiredMessageKey' }) 
	fullName: string;
	
	
}
