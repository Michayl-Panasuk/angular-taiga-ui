function _templateObject11(){var e=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"]);return _templateObject11=function(){return e},e}function _templateObject10(){var e=_taggedTemplateLiteral([":\u241f218ef47ee70a1ea1ab66e40514ffa9210bf82c74\u241f4958728332946008265: Import ",":START_TAG_CODE:TuiPaginationModule",":CLOSE_TAG_CODE: into a module where you want to use our component "]);return _templateObject10=function(){return e},e}function _templateObject9(){var e=_taggedTemplateLiteral([":\u241f179c074c54faa08ac2cd371aae91270430094cb4\u241f5919257397270847364: Size "]);return _templateObject9=function(){return e},e}function _templateObject8(){var e=_taggedTemplateLiteral([":\u241f7188b68f4c0ede7f60421cd661e5d0791220c304\u241f4207451728711936955: Total pages count "]);return _templateObject8=function(){return e},e}function _templateObject7(){var e=_taggedTemplateLiteral([":\u241fbf69fc21a86418012f148932ebe5eb91bcae5b45\u241f6937522081049060052: Active page index "]);return _templateObject7=function(){return e},e}function _templateObject6(){var e=_taggedTemplateLiteral([":\u241f30781cbf047ad38e186ad68e325b742909287b00\u241f1810512560805883949: Accepts focus with keyboard "]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241fa5c05002b0ac2040f1aede5e727e0ffd06eda819\u241f7590013429208346303:Custom"]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241f47ebd404b33f1353e628e1beaab432a604aa0267\u241f1450301538176787808:Visible edge pages"]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241f7447e99a313dfd660dfdac371c1790c906afdfbc\u241f1343291924581059799:Visible pages around active"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241f380ab580741bec31346978e7cab8062d6970408d\u241f8643289769990675407:Basic"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241fb6b6dd74c9cd7f63f1aa4d62ed5050cfe6280495\u241f8509982288045769283: Pagination component enables the user to select a specific page from a range of pages "]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{G5ph:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiPaginationModule",(function(){return Z}));var a,i,o,r=n("2kYt"),l=n("nIj0"),c=n("sEIs"),d=n("SVIu"),p=n("dvRg"),u=n("kiPw"),m=".slider {\n    width: 12.5rem;\n    margin-bottom: 1em;\n}\n",s=n("EM62"),g=n("OZlg"),f=n("e0eB"),h=n("iyc4"),x=n("cc69"),b=n("X03X"),y=((o=function(){function e(){_classCallCheck(this,e),this.length=64,this.index=10}return _createClass(e,[{key:"goToPage",value:function(e){this.index=e,console.log("New page:",e)}}]),e}()).\u0275fac=function(e){return new(e||o)},o.\u0275cmp=s["\u0275\u0275defineComponent"]({type:o,selectors:[["tui-pagination-example-1"]],decls:2,vars:5,consts:[["secondary","index","size","m",1,"slider",3,"max","quantum","ngModel","ngModelChange"],[3,"length","index","indexChange"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-input-slider",0),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.index=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](1,"tui-pagination",1),s["\u0275\u0275listener"]("indexChange",(function(e){return t.goToPage(e)})),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("max",t.length-1)("quantum",1)("ngModel",t.index),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("length",t.length)("index",t.index))},directives:[x.a,l.NgControlStatus,l.NgModel,b.a],styles:[".slider[_ngcontent-%COMP%]{width:12.5rem;margin-bottom:1em}"],changeDetection:0}),o),P=((i=function e(){_classCallCheck(this,e),this.activePadding=2}).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=s["\u0275\u0275defineComponent"]({type:i,selectors:[["tui-pagination-example-2"]],decls:2,vars:6,consts:[["secondary","activePadding","size","m",1,"slider",3,"max","quantum","ngModel","ngModelChange"],[3,"activePadding","length","index"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-input-slider",0),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.activePadding=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](1,"tui-pagination",1)),2&e&&(s["\u0275\u0275property"]("max",6)("quantum",1)("ngModel",t.activePadding),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("activePadding",t.activePadding)("length",64)("index",10))},directives:[x.a,l.NgControlStatus,l.NgModel,b.a],styles:[".slider[_ngcontent-%COMP%]{width:12.5rem;margin-bottom:1em}"],changeDetection:0}),i),C=((a=function e(){_classCallCheck(this,e),this.sidePadding=3}).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=s["\u0275\u0275defineComponent"]({type:a,selectors:[["tui-pagination-example-3"]],decls:2,vars:6,consts:[["secondary","sidePadding","size","m",1,"slider",3,"max","quantum","ngModel","ngModelChange"],[3,"sidePadding","length","index"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-input-slider",0),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.sidePadding=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](1,"tui-pagination",1)),2&e&&(s["\u0275\u0275property"]("max",6)("quantum",1)("ngModel",t.sidePadding),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("sidePadding",t.sidePadding)("length",64)("index",10))},directives:[x.a,l.NgControlStatus,l.NgModel,b.a],styles:[".slider[_ngcontent-%COMP%]{width:12.5rem;margin-bottom:1em}"],changeDetection:0}),a);function v(e,t){if(1&e&&s["\u0275\u0275text"](0),2&e){var n=t.$implicit,a=s["\u0275\u0275nextContext"]();s["\u0275\u0275textInterpolate1"](" ",a.days[n]," ")}}var _,T,M=((_=function e(){_classCallCheck(this,e),this.days=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}).\u0275fac=function(e){return new(e||_)},_.\u0275cmp=s["\u0275\u0275defineComponent"]({type:_,selectors:[["tui-pagination-example-4"]],decls:3,vars:2,consts:[[3,"length","content"],["test",""]],template:function(e,t){if(1&e&&(s["\u0275\u0275element"](0,"tui-pagination",0),s["\u0275\u0275template"](1,v,1,1,"ng-template",null,1,s["\u0275\u0275templateRefExtractor"])),2&e){var n=s["\u0275\u0275reference"](2);s["\u0275\u0275property"]("length",7)("content",n)}},directives:[b.a],encapsulation:2,changeDetection:0}),_),O=n("EPR0"),S=n("yHor"),j=n("zGJC"),w=n("u8jZ");T=$localize(_templateObject());var E,z,V,L,k,D,N=["heading",$localize(_templateObject2())],$=["heading",$localize(_templateObject3())],I=["heading",$localize(_templateObject4())],A=["heading",$localize(_templateObject5())];function q(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18n"](1,T),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-doc-example",2),s["\u0275\u0275i18nAttributes"](3,N),s["\u0275\u0275element"](4,"tui-pagination-example-1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"tui-doc-example",3),s["\u0275\u0275i18nAttributes"](6,$),s["\u0275\u0275element"](7,"tui-pagination-example-2"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"tui-doc-example",4),s["\u0275\u0275i18nAttributes"](9,I),s["\u0275\u0275element"](10,"tui-pagination-example-3"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"tui-doc-example",5),s["\u0275\u0275i18nAttributes"](12,A),s["\u0275\u0275element"](13,"tui-pagination-example-4"),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("content",n.example1),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",n.example2),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",n.example3),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",n.example4)}}function U(e,t){1&e&&s["\u0275\u0275i18n"](0,E)}function R(e,t){1&e&&s["\u0275\u0275i18n"](0,z)}function H(e,t){1&e&&s["\u0275\u0275i18n"](0,V)}function F(e,t){1&e&&s["\u0275\u0275i18n"](0,L)}function G(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-doc-demo"),s["\u0275\u0275elementStart"](1,"tui-pagination",6),s["\u0275\u0275listener"]("indexChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().index=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-doc-documentation"),s["\u0275\u0275template"](3,U,1,0,"ng-template",7),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().focusable=e})),s["\u0275\u0275template"](4,R,1,0,"ng-template",8),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().index=e})),s["\u0275\u0275template"](5,H,1,0,"ng-template",9),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().length=e})),s["\u0275\u0275template"](6,F,1,0,"ng-template",10),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().size=e})),s["\u0275\u0275elementEnd"]()}if(2&e){var a=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("focusable",a.focusable)("length",a.length)("size",a.size)("index",a.index),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("documentationPropertyValue",a.focusable),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",a.index),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",a.length),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",a.sizeVariants)("documentationPropertyValue",a.size)}}function B(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",11),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,k),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",12),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"li"),s["\u0275\u0275elementStart"](7,"p"),s["\u0275\u0275i18n"](8,D),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](9,"tui-doc-code",13),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",n.exampleImportModule),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}E=$localize(_templateObject6()),z=$localize(_templateObject7()),V=$localize(_templateObject8()),L=$localize(_templateObject9()),k=$localize(_templateObject10(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),D=$localize(_templateObject11());var J,W,X=((W=function e(){_classCallCheck(this,e),this.exampleImportModule="import {TuiPaginationModule} from '@taiga-ui/kit';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiPaginationModule\n    ],\n...\n",this.exampleInsertTemplate='<tui-pagination [length]="pageCount"\n                [index]="currentPage"\n                (indexChange)="goToPage($event)"></tui-pagination>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-pagination-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPaginationExample1 {\n    length = 64;\n\n    index = 10;\n\n    goToPage(index: number) {\n        this.index = index;\n        console.log('New page:', index);\n    }\n}\n",HTML:'<tui-input-slider\n    class="slider"\n    secondary="index"\n    size="m"\n    [max]="length - 1"\n    [quantum]="1"\n    [(ngModel)]="index"\n></tui-input-slider>\n\n<tui-pagination\n    [length]="length"\n    [index]="index"\n    (indexChange)="goToPage($event)"\n></tui-pagination>\n',LESS:m},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-pagination-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPaginationExample2 {\n    activePadding = 2;\n}\n",HTML:'<tui-input-slider\n    class="slider"\n    secondary="activePadding"\n    size="m"\n    [max]="6"\n    [quantum]="1"\n    [(ngModel)]="activePadding"\n></tui-input-slider>\n\n<tui-pagination\n    [activePadding]="activePadding"\n    [length]="64"\n    [index]="10"\n></tui-pagination>\n',LESS:m},this.example3={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-pagination-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPaginationExample3 {\n    sidePadding = 3;\n}\n",HTML:'<tui-input-slider\n    class="slider"\n    secondary="sidePadding"\n    size="m"\n    [max]="6"\n    [quantum]="1"\n    [(ngModel)]="sidePadding"\n></tui-input-slider>\n\n<tui-pagination\n    [sidePadding]="sidePadding"\n    [length]="64"\n    [index]="10"\n></tui-pagination>\n',LESS:m},this.example4={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-pagination-example-4',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPaginationExample4 {\n    readonly days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];\n}\n",HTML:'<tui-pagination [length]="7" [content]="test"></tui-pagination>\n<ng-template #test let-index> {{days[index]}} </ng-template>\n'},this.focusable=!0,this.index=0,this.length=8,this.sizeVariants=["s","m"],this.size=this.sizeVariants[1]}).\u0275fac=function(e){return new(e||W)},W.\u0275cmp=s["\u0275\u0275defineComponent"]({type:W,selectors:[["example-tui-pagination"]],decls:4,vars:0,consts:[["header","Pagination","package","KIT","type","components"],["pageTab",""],["id","base",3,"content",6,"heading"],["id","around",3,"content",6,"heading"],["id","edges",3,"content",6,"heading"],["id","custom",3,"content",6,"heading"],[3,"focusable","length","size","index","indexChange"],["documentationPropertyName","focusable","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","index","documentationPropertyMode","input-output","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","length","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,q,14,4,"ng-template",1),s["\u0275\u0275template"](2,G,7,9,"ng-template",1),s["\u0275\u0275template"](3,B,10,2,"ng-template",1),s["\u0275\u0275elementEnd"]())},directives:[g.a,f.a,h.a,y,P,C,M,O.a,b.a,S.a,j.a,w.a],encapsulation:2,changeDetection:0}),W),Z=((J=function e(){_classCallCheck(this,e)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:J}),J.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||J)},imports:[[p.TuiBadgeModule,p.TuiPaginationModule,p.TuiInputSliderModule,r.c,p.TuiRadioListModule,l.FormsModule,l.ReactiveFormsModule,d.h,c.f.forChild(Object(d.o)(X)),u.c]]}),J)}}]);