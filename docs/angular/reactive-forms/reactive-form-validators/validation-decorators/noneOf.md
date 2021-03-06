---
title: noneOf
description: noneOf validation  {{validatorType}}  will check whether the none of the values is selected from the given inputs.
author: rxcontributorone
category: form-validations
subcategory: Array
type:tabs
linktitle: noneOf
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>noneOf validation  {{validatorType}}  will check whether the none of the values is selected from the given inputs.</p></div>

# When to use
Let's assume that you are creating a employee form in which you want employee to enter none of the value of a particular value which contains fields like department, hobbies and skills.Here the field is taken in the form of array and according to that the choice is applied on the property by applying matchvalues. Here depending upon the requirement these scenarios may arise.
<ol class='showHideElement'>
	<li>The skills field in which you want the user to enter skills based upon matchvalues.</li>
    <li>Apply noneOf validation based on matched condition in the form, like if the department  is ‘dotnet’ then the skills value should be based upon matchvalues.</li>
    <li>The Custom Message on Hobbies field.</li>
    <li>Shows the custom message on `languages` field by using `messageKey` property.</li> 
    <data-scope scope="['decorator','validator']">
 	<li>Apply noneOf validation dynamically based on server rules.</li>
     </data-scope>
</ol>
Let’s see how noneOf {{validatorType}} fulfil the need.

# Basic noneOf Validation
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a employee Model class and define property of hobbies in the model to achieve the functional need of point 1.
<div component="app-code" key="noneOf-add-model"></div> 
</data-scope>
Through Angular FormBuilder service we create FormGroup in the component.
Here we have covered Add form operation.

<div component="app-code" key="noneOf-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="noneOf-add-html"></div> 
<div component="app-example-runner" ref-component="app-noneOf-add"></div>
***

# ArrayConfig
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@noneOf()` decorator. If needed then use the below options.
</data-scope>

<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.noneOf()` validator. If needed then use the below options.
</data-scope>

<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `noneOf` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a (click)='scrollTo("#conditionalExpression")' title="conditionalExpression">conditionalExpression</a></td><td>noneOf validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.</td></tr>
<tr><td><a (click)='scrollTo("#matchValues")' title="matchValues">matchValues</a></td><td>MatchValues is the array based on which the value is matched for validation. According to it none of the values in the array should be matched.</td></tr>
<tr><td><a (click)='scrollTo("#message")' title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
</table>

## conditionalExpression 
Type :  `Function`  |  `string` 

noneOf validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.

> This won't work if you return without expression or fixed boolean value true or false; like : `conditionalExpression: (x) => x.toggle`

<data-scope scope="['validator','decorator']"> 
> Binding `conditionalExpression` with `Function` object.
<div component="app-code" key="noneOf-conditionalExpressionExampleFunction-model"></div> 
</data-scope>

> Binding `conditionalExpression` with `string` object. 
<div component="app-code" key="noneOf-conditionalExpressionExampleString-model"></div> 

<div component="app-example-runner" ref-component="app-noneOf-conditionalExpression" title="noneOf {{validatorType}} with conditionalExpression" key="conditionalExpression"></div>

## matchValues 
Type :  `any[]` 

matchValues is the array based on which the value is matched for validation. According to it none of the values in the array should be matched

<div component="app-code" key="oneOf-matchValuesExample-model"></div> 
<div component="app-example-runner" ref-component="app-noneOf-matchValues" title="noneOf {{validatorType}} with matchValues" key="matchValues"></div>

## message
Type :  `string` 
To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="noneOf-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-noneOf-message" title="noneOf {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="noneOf-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-noneOf-messageKey" title="noneOf {{validatorType}} with messageKey" key="messageKey"></div>

# Non Array Value

The noneOf validator can also validate the textbox value, which is a non array value. If any user enter the duplicate values, then the formControl should mark it as invalid.

<div component="app-code" key="noneOf-nonArrayValueExample-model"></div> 
<div component="app-example-runner" ref-component="app-noneOf-nonArrayValue" title="noneOf {{validatorType}} with nonArrayValue" key="nonArrayValue"></div>

# Complete noneOf Example

This Complete noneOf example which includes all the ArrayConfig properties will fulfil the requirement of scenarios 1, 2, 3 and 4.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-noneOf-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="noneOf-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="noneOf-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="noneOf-complete-html"></div> 
# [/Html]
***

<data-scope scope="['decorator','validator']">
# Dynamic noneOf Example

This Dynamic NoneOf example is executed on the basis of json passed in the formBuilderConfiguration which comes under `RxFormBuilder` of reactive-form-validators. `conditionalExpression` with function would not be applied in dynamic noneOf example. This example will fulfil the requirement of our last point.

<div component="app-tabs" key="dynamic"></div>

[!TabGroup]
# [Example](#tab\dynamicexample)
<div component="app-example-runner" ref-component="app-noneOf-dynamic"></div>
# [/Example]
<data-scope scope="['decorator']">
# [Model](#tab\dynamicmodel)
<div component="app-code" key="noneOf-dynamic-model"></div>
# [/Model]
</data-scope>
# [Component](#tab\dynamiccomponent)
<div component="app-code" key="noneOf-dynamic-component"></div>
# [/Component]
# [Json](#tab\dynamicjson)
<div component="app-code" key="noneOf-dynamic-json"></div>
# [/Json]
# [Html](#tab\dynamichtml)
<div component="app-code" key="noneOf-dynamic-html"></div> 
# [/Html]
***
</data-scope>
