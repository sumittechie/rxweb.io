import {  maxTime, } from   "@rxweb/reactive-form-validators"   

export class AttandanceDetail {

	@maxTime({allowSeconds:true  ,value:'02:00:00' }) 
	totalOutTime: string;
	
	
}
