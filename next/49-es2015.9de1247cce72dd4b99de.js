(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{pzXc:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiFieldErrorModule",(function(){return ce}));var r=n("2kYt"),o=n("nIj0"),a=n("sEIs"),l=n("SVIu"),i=n("Qq0t"),u=n("dvRg"),s=n("kiPw"),m=n("EM62"),d=n("OZlg"),c=n("e0eB"),p=n("yZWP"),f=n("iyc4"),h=n("1Nkj"),g=n("GdrL"),b=n("2wTY"),V=n("gEyt"),C=n("kNZY");const x=["label",$localize`:␟c2f188eeca60463782738d8247914bf170df5098␟3772154377692784553:Type the ultimate answer`],y=["label",$localize`:␟4de3cc8dba3c7b052f74a1db4752f51bda859e9c␟8591875090862306452:Set a password`];var E;E=$localize`:␟740e12c058c1a630b11478b272764bf7d7d5f028␟124757051077109908: If you need to show validation message as early as a user started to type something, subscribe on form value changes and call markAsTouched on control on first value change `;const v=/^[a-zA-Z]+$/;function T(e){return e.value&&v.test(e.value)?null:{other:"Only latin letters are allowed"}}function w(e){return"42"===e.value?null:{other:"Wrong"}}let F=(()=>{class e{constructor(){this.testValue1=new o.FormControl("",[o.Validators.required,T]),this.testForm=new o.FormGroup({testValue1:this.testValue1,testValue2:new o.FormControl("",[o.Validators.required,w])}),this.testValue1.valueChanges.subscribe(()=>{this.testValue1.markAsTouched()})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-field-error-example-1"]],decls:13,vars:3,consts:[[1,"b-form",3,"formGroup"],["tuiLabel","",1,"tui-space_bottom-4",6,"label"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue2"],["tuiLabel","",6,"label"],["formControlName","testValue1","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue1"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"form",0),m["\u0275\u0275elementStart"](1,"label",1),m["\u0275\u0275i18nAttributes"](2,x),m["\u0275\u0275elementStart"](3,"tui-input",2),m["\u0275\u0275text"](4," to the Question of Life, the Universe, and Everything "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](5,"tui-field-error",3),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"label",4),m["\u0275\u0275i18nAttributes"](7,y),m["\u0275\u0275elementStart"](8,"tui-input",5),m["\u0275\u0275text"](9," Latin letters only "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](10,"tui-field-error",6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"p"),m["\u0275\u0275i18n"](12,E),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("formGroup",t.testForm),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0),m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,h.a,g.a,o.NgControlStatus,o.FormControlName,b.b,V.b,C.a],encapsulation:2,changeDetection:0}),e})();var S=n("l4xa"),L=n("zV1d");const A=["errorContent"],N=["bigErrorContent"],_=["label",$localize`:␟7d66ae66a6f955b1eb6f5c00aac4d4e2584cdeed␟2295031025708706060:Enter company name`];function O(e,t){1&e&&(m["\u0275\u0275text"](0," Secret number must contain "),m["\u0275\u0275elementStart"](1,"strong"),m["\u0275\u0275text"](2,"10 or 12 digits"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](3,". "))}function D(e,t){1&e&&(m["\u0275\u0275text"](0," This company is already registered "),m["\u0275\u0275elementStart"](1,"button",9),m["\u0275\u0275text"](2," It is mine "),m["\u0275\u0275elementEnd"]())}const G=function(){return["required","inn"]},I=/^\d{10}$/,z=/^\d{12}$/;let k=(()=>{class e{constructor(){this.errorContent="",this.bigErrorContent="",this.testValue2=new o.FormControl(""),this.testForm=new o.FormGroup({testValue1:new o.FormControl("",[o.Validators.required,this.getSecretValidator()]),testValue2:this.testValue2}),this.companyValidator=e=>e.value?{inn:new S.TuiValidationError(this.bigErrorContent)}:null}ngOnInit(){this.testValue2.setValidators([o.Validators.required,this.companyValidator])}getSecretValidator(){return e=>e.value&&(I.test(e.value)||z.test(e.value))?null:{secret:new S.TuiValidationError(this.errorContent)}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-field-error-example-2"]],viewQuery:function(e,t){var n;1&e&&(m["\u0275\u0275viewQuery"](A,!0),m["\u0275\u0275viewQuery"](N,!0)),2&e&&(m["\u0275\u0275queryRefresh"](n=m["\u0275\u0275loadQuery"]())&&(t.errorContent=n.first),m["\u0275\u0275queryRefresh"](n=m["\u0275\u0275loadQuery"]())&&(t.bigErrorContent=n.first))},decls:12,vars:5,consts:[[1,"b-form",3,"formGroup"],["tuiLabel","","label","Secret number"],["formControlName","testValue1","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["errorContent",""],["formControlName","testValue1",3,"order"],["tuiLabel","",1,"tui-space_top-4",6,"label"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["bigErrorContent",""],["formControlName","testValue2"],["tuiButton","","type","button",1,"tui-space_top-2"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"form",0),m["\u0275\u0275elementStart"](1,"label",1),m["\u0275\u0275element"](2,"tui-input",2),m["\u0275\u0275template"](3,O,4,0,"ng-template",null,3,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275element"](5,"tui-field-error",4),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"label",5),m["\u0275\u0275i18nAttributes"](7,_),m["\u0275\u0275element"](8,"tui-input",6),m["\u0275\u0275template"](9,D,3,0,"ng-template",null,7,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275element"](11,"tui-field-error",8),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("formGroup",t.testForm),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("order",m["\u0275\u0275pureFunction0"](4,G)),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,h.a,g.a,o.NgControlStatus,o.FormControlName,b.b,V.b,C.a,L.a],encapsulation:2,changeDetection:0}),e})();var M=n("bYz0"),P=n("CDxv");const q=["phoneErrorContent"];function R(e,t){1&e&&m["\u0275\u0275text"](0," Invalid phone number length ")}function $(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"label",4),m["\u0275\u0275elementStart"](1,"span",5),m["\u0275\u0275element"](2,"tui-input-phone",6),m["\u0275\u0275elementStart"](3,"button",7),m["\u0275\u0275listener"]("click",(function(){m["\u0275\u0275restoreView"](e);const n=t.index;return m["\u0275\u0275nextContext"]().removePhone(n)})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](4,R,1,0,"ng-template",null,8,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275element"](6,"tui-field-error",9),m["\u0275\u0275elementEnd"]()}if(2&e){const e=t.index;m["\u0275\u0275propertyInterpolate1"]("label","Phone number ",e+1,""),m["\u0275\u0275advance"](2),m["\u0275\u0275propertyInterpolate"]("formControlName",e),m["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0),m["\u0275\u0275advance"](4),m["\u0275\u0275propertyInterpolate"]("formControlName",e)}}let B=(()=>{class e{constructor(){this.phoneErrorContent="",this.getPhoneArrayValidator=e=>e.controls.length<2||e.controls.filter(e=>e.errors).length&&e.controls.length?{length:new S.TuiValidationError("You should add at least 2 phone number")}:null,this.testForm=new o.FormGroup({phones:new o.FormArray([new o.FormControl("",[o.Validators.required,this.getPhoneLengthValidator()])],[this.getPhoneArrayValidator])})}get formData(){return this.testForm.get("phones")}addPhone(){this.formData.push(new o.FormControl("",this.addValidators()))}removePhone(e){this.formData.removeAt(e);let t=0;for(;t<=1&&this.formData.controls[t];)this.formData.controls[t].setValidators([o.Validators.required,this.getPhoneLengthValidator()]),t++}addValidators(){return this.formData.controls.length<2?[o.Validators.required,this.getPhoneLengthValidator()]:null}getPhoneLengthValidator(){return e=>12!==e.value.length?{lenght:new S.TuiValidationError(this.phoneErrorContent)}:null}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-field-error-example-3"]],viewQuery:function(e,t){var n;1&e&&m["\u0275\u0275viewQuery"](q,!0),2&e&&m["\u0275\u0275queryRefresh"](n=m["\u0275\u0275loadQuery"]())&&(t.phoneErrorContent=n.first)},decls:5,vars:2,consts:[[3,"formGroup"],["tuiLabel","","class","tui-space_bottom-4","formArrayName","phones",3,"label",4,"ngFor","ngForOf"],["formArrayName","phones",1,"form-array-error"],["tuiButton","","type","button","size","s",1,"tui-space_top-4",3,"click"],["tuiLabel","","formArrayName","phones",1,"tui-space_bottom-4",3,"label"],[1,"row"],["tuiTextfieldAutocomplete","off","tuiTextfieldSize","m",1,"input",3,"formControlName","tuiTextfieldLabelOutside"],["tuiIconButton","","type","button","size","m","title","Delete phone number","appearance","icon","icon","tuiIconTrash",1,"tui-space_left-2","icon",3,"click"],["phoneErrorContent",""],[3,"formControlName"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"form",0),m["\u0275\u0275template"](1,$,7,4,"label",1),m["\u0275\u0275element"](2,"tui-field-error",2),m["\u0275\u0275elementStart"](3,"button",3),m["\u0275\u0275listener"]("click",(function(){return t.addPhone()})),m["\u0275\u0275text"](4," Add a phone number "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("formGroup",t.testForm),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngForOf",t.formData.controls))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,r.s,C.a,o.FormArrayName,L.a,h.a,M.a,P.b,b.b,o.NgControlStatus,o.FormControlName,V.b],styles:[".input[_ngcontent-%COMP%]{width:20rem}.row[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.form-array-error[_ngcontent-%COMP%]{font-size:.875rem}"],changeDetection:0}),e})();var j=n("ROBh"),U=n("BwBJ");const Q=/^[a-zA-Z]+$/;let Z=(()=>{class e{constructor(e){this.fb=e,this.form=this.fb.group({text:["\u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0442\u0435\u043a\u0441\u0442",o.Validators.required]}),this.form.controls.text.setAsyncValidators(e=>e.value&&Q.test(e.value)?Object(j.a)(null).pipe():Object(j.a)({error:new S.TuiValidationError("Only latin letters allowed")}).pipe(Object(U.a)(5e3))),this.form.controls.text.markAsTouched()}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](o.FormBuilder))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-field-error-example-4"]],decls:5,vars:1,consts:[[3,"formGroup"],[1,"tui-form__row"],["formControlName","text",1,"input"],["formControlName","text"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"form",0),m["\u0275\u0275elementStart"](1,"div",1),m["\u0275\u0275elementStart"](2,"tui-input",2),m["\u0275\u0275text"](3," Enter some text "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](4,"tui-field-error",3),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&m["\u0275\u0275property"]("formGroup",t.form)},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,g.a,o.NgControlStatus,o.FormControlName,C.a],styles:[".input[_ngcontent-%COMP%]{width:20rem}.row[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.form-array-error[_ngcontent-%COMP%]{font-size:.875rem}"],changeDetection:0}),e})();var Y;function H(e){return"Maximum length \u2014 "+e.requiredLength}function W(e){return"Minimum length \u2014 "+e.requiredLength}Y=$localize`:␟87a9e0f6ceb1444cab6185424f933a376357a91c␟3646762244302681891: Required `;let J=(()=>{class e{constructor(){this.testValue1=new o.FormControl("",[o.Validators.minLength(4),o.Validators.maxLength(4)]),this.testValue2=new o.FormControl("",[o.Validators.required,o.Validators.email]),this.testForm=new o.FormGroup({testValue1:this.testValue1,testValue2:this.testValue2}),this.testValue1.valueChanges.subscribe(()=>{this.testValue1.markAsTouched()})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-field-error-example-5"]],features:[m["\u0275\u0275ProvidersFeature"]([{provide:u.TUI_VALIDATION_ERRORS,useValue:{required:"Enter this!",email:"Enter a valid email",maxlength:H,minlength:W}}])],decls:9,vars:2,consts:[[1,"b-form",3,"formGroup"],["tuiLabel","","label","Enter an email",1,"tui-space_bottom-4"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue2"],["tuiLabel","","label","Minimum and maximum length"],["formControlName","testValue1","tuiTextfieldSize","m"],["formControlName","testValue1"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"form",0),m["\u0275\u0275elementStart"](1,"label",1),m["\u0275\u0275elementStart"](2,"tui-input",2),m["\u0275\u0275i18n"](3,Y),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](4,"tui-field-error",3),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"label",4),m["\u0275\u0275elementStart"](6,"tui-input",5),m["\u0275\u0275text"](7," 4 letters word... "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](8,"tui-field-error",6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("formGroup",t.testForm),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,h.a,g.a,o.NgControlStatus,o.FormControlName,b.b,V.b,C.a],encapsulation:2,changeDetection:0}),e})();var K=n("u8jZ");const X=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var ee;ee=$localize`:␟68963404caf24d9d905f46dee9eaac5a5ceae88e␟4281026355528165017:${"[\ufffd#2\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:FieldError${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: shows a validation error of a field. If you do not use forms, see ${"\ufffd#3\ufffd"}:START_LINK:${"[\ufffd#2\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:TuiError${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd/#3\ufffd"}:CLOSE_LINK:. `,ee=m["\u0275\u0275i18nPostprocess"](ee);const te=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],ne=["heading",$localize`:␟beedd8b329a8f8773c3b0f41eefeeb5e601578a9␟7592818721454246340:with a template`],re=["heading",$localize`:␟f168335edcd7a2503812f5cdb86f5fdf3f53881e␟296183290148574667:With adding new controls (FormArray)`],oe=["heading",$localize`:␟4dd4c0a5cc2f0b5edcf6ce49c7de250516eb991e␟2219993318238885702:async validator`],ae=["heading",$localize`:␟878e6fe461fd9ca2712122350e24522f5de8fd18␟8087109270529539309:With custom messages for validators`],le=function(){return["/components/error"]};function ie(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18nStart"](1,ee),m["\u0275\u0275element"](2,"code"),m["\u0275\u0275elementStart"](3,"a",3),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"tui-doc-example",4),m["\u0275\u0275i18nAttributes"](6,te),m["\u0275\u0275element"](7,"tui-field-error-example-1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"tui-doc-example",5),m["\u0275\u0275i18nAttributes"](9,ne),m["\u0275\u0275element"](10,"tui-field-error-example-2"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"tui-doc-example",6),m["\u0275\u0275i18nAttributes"](12,re),m["\u0275\u0275element"](13,"tui-field-error-example-3"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](14,"tui-doc-example",7),m["\u0275\u0275i18nAttributes"](15,oe),m["\u0275\u0275element"](16,"tui-field-error-example-4"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](17,"tui-doc-example",8),m["\u0275\u0275i18nAttributes"](18,ae),m["\u0275\u0275element"](19,"tui-field-error-example-5"),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("routerLink",m["\u0275\u0275pureFunction0"](6,le)),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",e.example1),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example2),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example3),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example4),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example5)}}var ue,se;function me(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",9),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,ue),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](5,"tui-doc-code",10),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"li"),m["\u0275\u0275elementStart"](7,"p"),m["\u0275\u0275i18n"](8,se),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](9,"tui-doc-code",11),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",e.exampleImportModule),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}ue=$localize`:␟452615d8aca8604fe3e6e733f5620d407d940214␟121058670900444179: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiFieldErrorModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,se=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let de=(()=>{class e{constructor(){this.exampleImportModule="import {ReactiveFormsModule} from '@angular/forms';\nimport {TuiFieldErrorModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        ReactiveFormsModule,\n        TuiFieldErrorModule,\n        TuiContentModule\n    ],\n...\n",this.exampleInsertTemplate='<ng-container [formGroup]="testForm">\n    <tui-input formControlName="testValue1"></tui-input>\n    <tui-field-error formControlName="testValue1"></tui-field-error>\n</ng-container>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\nconst latinChars = /^[a-zA-Z]+$/;\n\nexport function passwordValidator(field: AbstractControl): Validators | null {\n    return field.value && latinChars.test(field.value)\n        ? null\n        : {\n              other: 'Only latin letters are allowed',\n          };\n}\n\nexport function superComputerValidator(field: AbstractControl): Validators | null {\n    return field.value === '42'\n        ? null\n        : {\n              other: 'Wrong',\n          };\n}\n\n@Component({\n    selector: 'tui-field-error-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFieldErrorExample1 {\n    readonly testValue1 = new FormControl('', [Validators.required, passwordValidator]);\n\n    readonly testForm = new FormGroup({\n        testValue1: this.testValue1,\n        testValue2: new FormControl('', [Validators.required, superComputerValidator]),\n    });\n\n    constructor() {\n        this.testValue1.valueChanges.subscribe(() => {\n            this.testValue1.markAsTouched();\n        });\n    }\n}\n",HTML:'<form class="b-form" [formGroup]="testForm">\n    <label\n        i18n-label\n        tuiLabel\n        label="Type the ultimate answer"\n        class="tui-space_bottom-4"\n    >\n        <tui-input\n            formControlName="testValue2"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        >\n            to the Question of Life, the Universe, and Everything\n        </tui-input>\n\n        <tui-field-error formControlName="testValue2"></tui-field-error>\n    </label>\n\n    <label tuiLabel i18n-label label="Set a password">\n        <tui-input\n            formControlName="testValue1"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        >\n            Latin letters only\n        </tui-input>\n\n        <tui-field-error formControlName="testValue1"></tui-field-error>\n    </label>\n\n    <p i18n>\n        If you need to show validation message as early as a user started to\n        type something, subscribe on form value changes and call markAsTouched\n        on control on first value change\n    </p>\n</form>\n'},this.example2={TypeScript:"import {Component, OnInit, ViewChild} from '@angular/core';\nimport {\n    AbstractControl,\n    FormControl,\n    FormGroup,\n    ValidationErrors,\n    Validators,\n} from '@angular/forms';\nimport {TuiValidationError} from '@taiga-ui/cdk';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\nconst secretRegexTen = /^\\d{10}$/;\nconst secretRegexTwelve = /^\\d{12}$/;\n\nexport function innValidator(field: AbstractControl): any {\n    return field.value &&\n        (secretRegexTen.test(field.value) || secretRegexTwelve.test(field.value))\n        ? null\n        : {\n              inn: new TuiValidationError('Secret number contains 10 or 12 digits'),\n          };\n}\n\n@Component({\n    selector: 'tui-field-error-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFieldErrorExample2 implements OnInit {\n    @ViewChild('errorContent')\n    errorContent: PolymorpheusContent = '';\n\n    @ViewChild('bigErrorContent')\n    bigErrorContent: PolymorpheusContent = '';\n\n    readonly testValue2 = new FormControl('');\n\n    readonly testForm = new FormGroup({\n        testValue1: new FormControl('', [Validators.required, this.getSecretValidator()]),\n        testValue2: this.testValue2,\n    });\n\n    private readonly companyValidator = (\n        field: AbstractControl,\n    ): ValidationErrors | null =>\n        field.value\n            ? {\n                  inn: new TuiValidationError(this.bigErrorContent),\n              }\n            : null;\n\n    ngOnInit() {\n        this.testValue2.setValidators([Validators.required, this.companyValidator]);\n    }\n\n    private getSecretValidator(): (field: AbstractControl) => ValidationErrors | null {\n        return (field: AbstractControl): ValidationErrors | null =>\n            field.value &&\n            (secretRegexTen.test(field.value) || secretRegexTwelve.test(field.value))\n                ? null\n                : {\n                      secret: new TuiValidationError(this.errorContent),\n                  };\n    }\n}\n",HTML:'<form class="b-form" [formGroup]="testForm">\n    <label tuiLabel label="Secret number">\n        <tui-input\n            formControlName="testValue1"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        ></tui-input>\n\n        <ng-template #errorContent>\n            Secret number must contain <strong>10 or 12 digits</strong>.\n        </ng-template>\n\n        <tui-field-error\n            formControlName="testValue1"\n            [order]="[\'required\', \'inn\']"\n        ></tui-field-error>\n    </label>\n\n    <label\n        tuiLabel\n        i18n-label\n        class="tui-space_top-4"\n        label="Enter company name"\n    >\n        <tui-input\n            formControlName="testValue2"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        ></tui-input>\n\n        <ng-template #bigErrorContent>\n            This company is already registered\n            <button tuiButton type="button" class="tui-space_top-2">\n                It is mine\n            </button>\n        </ng-template>\n\n        <tui-field-error formControlName="testValue2"></tui-field-error>\n    </label>\n</form>\n'},this.example3={TypeScript:"import {Component, ViewChild} from '@angular/core';\nimport {\n    AbstractControl,\n    FormArray,\n    FormControl,\n    FormGroup,\n    ValidationErrors,\n    ValidatorFn,\n    Validators,\n} from '@angular/forms';\nimport {TuiValidationError} from '@taiga-ui/cdk';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-field-error-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFieldErrorExample3 {\n    @ViewChild('phoneErrorContent')\n    phoneErrorContent: PolymorpheusContent = '';\n\n    getPhoneArrayValidator = (array: FormArray): ValidationErrors | null => {\n        return array.controls.length < 2 ||\n            (!!array.controls.filter(item => item.errors).length && array.controls.length)\n            ? {length: new TuiValidationError('You should add at least 2 phone number')}\n            : null;\n    };\n\n    testForm = new FormGroup({\n        phones: new FormArray(\n            [new FormControl('', [Validators.required, this.getPhoneLengthValidator()])],\n            [this.getPhoneArrayValidator as ValidatorFn],\n        ),\n    });\n\n    get formData() {\n        return <FormArray>this.testForm.get('phones');\n    }\n\n    addPhone() {\n        this.formData.push(new FormControl('', this.addValidators()));\n    }\n\n    removePhone(index: number) {\n        this.formData.removeAt(index);\n\n        let n = 0;\n\n        while (n <= 1 && this.formData.controls[n]) {\n            this.formData.controls[n].setValidators([\n                Validators.required,\n                this.getPhoneLengthValidator(),\n            ]);\n            n++;\n        }\n    }\n\n    addValidators(): ValidationErrors | null {\n        return this.formData.controls.length < 2\n            ? [Validators.required, this.getPhoneLengthValidator()]\n            : null;\n    }\n\n    private getPhoneLengthValidator(): (\n        field: AbstractControl,\n    ) => ValidationErrors | null {\n        return (field: AbstractControl): ValidationErrors | null =>\n            field.value.length !== 12\n                ? {\n                      lenght: new TuiValidationError(this.phoneErrorContent),\n                  }\n                : null;\n    }\n}\n",HTML:'<form [formGroup]="testForm">\n    <label\n        tuiLabel\n        *ngFor="let phone of formData.controls; let i = index"\n        class="tui-space_bottom-4"\n        label="Phone number {{i + 1}}"\n        formArrayName="phones"\n    >\n        <span class="row">\n            <tui-input-phone\n                class="input"\n                formControlName="{{i}}"\n                tuiTextfieldAutocomplete="off"\n                tuiTextfieldSize="m"\n                [tuiTextfieldLabelOutside]="true"\n            ></tui-input-phone>\n            <button\n                tuiIconButton\n                type="button"\n                class="tui-space_left-2 icon"\n                size="m"\n                title="Delete phone number"\n                appearance="icon"\n                icon="tuiIconTrash"\n                (click)="removePhone(i)"\n            ></button>\n        </span>\n        <ng-template #phoneErrorContent>\n            Invalid phone number length\n        </ng-template>\n        <tui-field-error formControlName="{{i}}"></tui-field-error>\n    </label>\n\n    <tui-field-error\n        class="form-array-error"\n        formArrayName="phones"\n    ></tui-field-error>\n\n    <button\n        tuiButton\n        type="button"\n        class="tui-space_top-4"\n        size="s"\n        (click)="addPhone()"\n    >\n        Add a phone number\n    </button>\n</form>\n',LESS:".input {\n    width: 20rem;\n}\n\n.row {\n    display: flex;\n    align-items: center;\n}\n\n.form-array-error {\n    font-size: 0.875rem;\n}\n"},this.example4={TypeScript:"import {Component, Inject} from '@angular/core';\nimport {\n    AbstractControl,\n    AsyncValidatorFn,\n    FormBuilder,\n    FormGroup,\n    Validators,\n} from '@angular/forms';\nimport {TuiValidationError} from '@taiga-ui/cdk';\nimport {of} from 'rxjs';\nimport {delay} from 'rxjs/operators';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\nconst latinChars = /^[a-zA-Z]+$/;\n\nfunction asyncValidatorFn(): AsyncValidatorFn {\n    return (field: AbstractControl) => {\n        return field.value && latinChars.test(field.value)\n            ? of(null).pipe()\n            : of({\n                  error: new TuiValidationError('Only latin letters allowed'),\n              }).pipe(delay(5000));\n    };\n}\n\n@Component({\n    selector: 'tui-field-error-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFieldErrorExample4 {\n    readonly form: FormGroup;\n\n    constructor(@Inject(FormBuilder) private fb: FormBuilder) {\n        this.form = this.fb.group({\n            text: ['\u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0442\u0435\u043a\u0441\u0442', Validators.required],\n        });\n\n        this.form.controls['text'].setAsyncValidators(asyncValidatorFn());\n        this.form.controls['text'].markAsTouched();\n    }\n}\n",HTML:'<form [formGroup]="form">\n    <div class="tui-form__row">\n        <tui-input class="input" formControlName="text">\n            Enter some text\n        </tui-input>\n        <tui-field-error formControlName="text"></tui-field-error>\n    </div>\n</form>\n',LESS:".input {\n    width: 20rem;\n}\n\n.row {\n    display: flex;\n    align-items: center;\n}\n\n.form-array-error {\n    font-size: 0.875rem;\n}\n"},this.example5={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\nexport function maxLengthValidator(context: {requiredLength: string}): string {\n    return `Maximum length \u2014 ${context.requiredLength}`;\n}\n\nexport function minLengthValidator(context: {requiredLength: string}): string {\n    return `Minimum length \u2014 ${context.requiredLength}`;\n}\n\n@Component({\n    selector: 'tui-field-error-example-5',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_VALIDATION_ERRORS,\n            useValue: {\n                required: 'Enter this!',\n                email: 'Enter a valid email',\n                maxlength: maxLengthValidator,\n                minlength: minLengthValidator,\n            },\n        },\n    ],\n})\nexport class TuiFieldErrorExample5 {\n    readonly testValue1 = new FormControl('', [\n        Validators.minLength(4),\n        Validators.maxLength(4),\n    ]);\n    readonly testValue2 = new FormControl('', [Validators.required, Validators.email]);\n\n    readonly testForm = new FormGroup({\n        testValue1: this.testValue1,\n        testValue2: this.testValue2,\n    });\n\n    constructor() {\n        this.testValue1.valueChanges.subscribe(() => {\n            this.testValue1.markAsTouched();\n        });\n    }\n}\n",HTML:'<form class="b-form" [formGroup]="testForm">\n    <label tuiLabel class="tui-space_bottom-4" label="Enter an email">\n        <tui-input\n            i18n\n            formControlName="testValue2"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        >\n            Required\n        </tui-input>\n\n        <tui-field-error formControlName="testValue2"></tui-field-error>\n    </label>\n\n    <label tuiLabel label="Minimum and maximum length">\n        <tui-input formControlName="testValue1" tuiTextfieldSize="m">\n            4 letters word...\n        </tui-input>\n\n        <tui-field-error formControlName="testValue1"></tui-field-error>\n    </label>\n</form>\n'}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-field-error"]],decls:4,vars:0,consts:[["header","FieldError","package","KIT","type","components"],["pageTab",""],[6,"pageTab"],["tuiLink","",3,"routerLink"],["id","base",3,"content",6,"heading"],["id","patterns",3,"content",6,"heading"],["id","formArray",3,"content",6,"heading"],["id","async",3,"content",6,"heading"],["id","customMessages",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275template"](1,ie,20,7,"ng-template",1),m["\u0275\u0275template"](2,me,10,2,"ng-template",2),m["\u0275\u0275i18nAttributes"](3,X),m["\u0275\u0275elementEnd"]())},directives:[d.a,c.a,p.a,a.e,f.a,F,k,B,Z,J,K.a],encapsulation:2,changeDetection:0}),e})(),ce=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[u.TuiInputModule,o.ReactiveFormsModule,r.c,u.TuiFieldErrorModule,i.TuiLabelModule,u.TuiInputPhoneModule,u.TuiInputCountModule,i.TuiLinkModule,l.h,s.c,i.TuiButtonModule,i.TuiTextfieldControllerModule,a.f.forChild(Object(l.o)(de))]]}),e})()}}]);