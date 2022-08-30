"use strict";(self.webpackChunkawesome_components=self.webpackChunkawesome_components||[]).push([[723],{5723:(B,d,o)=>{o.r(d),o.d(d,{ComplexFormModule:()=>J});var s=o(6895),f=o(3060),n=o(4006),h=o(8675),m=o(4004),u=o(8505);function C(e,a){return t=>{if(!t.get(e)||!t.get(a))return{confirmEqual:"Invalid control names"};const i=t.get(e).value,c=t.get(a).value;return i===c?null:{confirmEqual:{main:i,confirm:c}}}}var r=o(4650),g=o(1005),F=o(262),I=o(9646),E=o(2340),U=o(529);let Z=(()=>{class e{constructor(t){this.http=t}saveUserInfo(t){return this.http.post(`${E.N.apiUrl}/users`,t).pipe((0,m.U)(()=>!0),(0,g.g)(1e3),(0,F.K)(()=>(0,I.of)(!1).pipe((0,g.g)(1e3))))}}return e.\u0275fac=function(t){return new(t||e)(r.LFG(U.eN))},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac}),e})();var l=o(3546),A=o(4859),p=o(9549),T=o(4144),x=o(1948),q=o(1572);function y(e,a){1&e&&(r.TgZ(0,"small",21),r._uU(1," Les deux adresses ne correspondent pas "),r.qZA())}function P(e,a){if(1&e&&(r.TgZ(0,"mat-card",12)(1,"mat-card-subtitle"),r._uU(2,"Email"),r.qZA(),r.TgZ(3,"div",2)(4,"mat-form-field",3)(5,"mat-label"),r._uU(6,"Adresse mail"),r.qZA(),r._UZ(7,"input",19),r.TgZ(8,"mat-error"),r._uU(9),r.qZA()(),r.TgZ(10,"mat-form-field",3)(11,"mat-label"),r._uU(12,"Confirmer votre adresse mail"),r.qZA(),r._UZ(13,"input",20),r.TgZ(14,"mat-error"),r._uU(15),r.qZA()()(),r.YNc(16,y,2,0,"small",16),r.ALo(17,"async"),r.qZA()),2&e){const t=r.oxw();r.Q6J("formGroup",t.emailForm),r.xp6(9),r.Oqu(t.getFormCtrlErrorText(t.emailCtrl)),r.xp6(6),r.Oqu(t.getFormCtrlErrorText(t.confirmEmailCtrl)),r.xp6(1),r.Q6J("ngIf",r.lcZ(17,4,t.showEmailError$))}}function b(e,a){if(1&e&&(r.TgZ(0,"mat-card",6)(1,"mat-card-subtitle"),r._uU(2,"T\xe9l\xe9phone"),r.qZA(),r.TgZ(3,"mat-form-field",3)(4,"mat-label"),r._uU(5,"Num\xe9ro de t\xe9l\xe9phone"),r.qZA(),r._UZ(6,"input",22),r.TgZ(7,"mat-error"),r._uU(8),r.qZA()()()),2&e){const t=r.oxw();r.xp6(6),r.Q6J("formControl",t.phoneCtrl),r.xp6(2),r.Oqu(t.getFormCtrlErrorText(t.phoneCtrl))}}function N(e,a){1&e&&(r.TgZ(0,"small",21),r._uU(1," Les deux adresses ne correspondent pas "),r.qZA())}function O(e,a){1&e&&r._UZ(0,"mat-spinner",23)}const V=[{path:"",component:(()=>{class e{constructor(t,i){this.formBuilder=t,this.complexFormService=i,this.loading=!1}ngOnInit(){this.initFormControls(),this.initMainForm(),this.initFormsObservables()}initMainForm(){this.mainForm=this.formBuilder.group({personalInfo:this.personalInfoForm,contactPreference:this.contactPreferenceCtrl,email:this.emailForm,phone:this.phoneCtrl,loginInfo:this.loginInfoForm})}initFormControls(){this.personalInfoForm=this.formBuilder.group({firstName:["",n.kI.required],lastName:["",n.kI.required]}),this.contactPreferenceCtrl=this.formBuilder.control("email"),this.emailCtrl=this.formBuilder.control(""),this.confirmEmailCtrl=this.formBuilder.control(""),this.emailForm=this.formBuilder.group({email:this.emailCtrl,confirmEmail:this.confirmEmailCtrl},{validators:[C("email","confirmEmail")],updateOn:"blur"}),this.phoneCtrl=this.formBuilder.control(""),this.passwordCtrl=this.formBuilder.control("",n.kI.required),this.confirmPasswordCtrl=this.formBuilder.control("",n.kI.required),this.loginInfoForm=this.formBuilder.group({username:["",n.kI.required],password:this.passwordCtrl,confirmPassword:this.confirmPasswordCtrl},{validators:[C("password","confirmPassword")],updateOn:"blur"})}initFormsObservables(){this.showEmailCtrl$=this.contactPreferenceCtrl.valueChanges.pipe((0,h.O)(this.contactPreferenceCtrl.value),(0,m.U)(t=>"email"===t),(0,u.b)(t=>this.setEmailValidator(t))),this.showPhoneCtrl$=this.contactPreferenceCtrl.valueChanges.pipe((0,h.O)(this.contactPreferenceCtrl.value),(0,m.U)(t=>"phone"===t),(0,u.b)(t=>this.setPhoneValidators(t))),this.showEmailError$=this.emailForm.statusChanges.pipe((0,m.U)(t=>"INVALID"===t&&this.emailCtrl.value&&this.confirmEmailCtrl.value)),this.showPasswordError$=this.loginInfoForm.statusChanges.pipe((0,m.U)(t=>"INVALID"===t&&this.loginInfoForm.hasError("confirmEqual")&&this.passwordCtrl.value&&this.confirmPasswordCtrl.value))}setEmailValidator(t){t?(this.emailCtrl.addValidators([n.kI.required,n.kI.email]),this.confirmEmailCtrl.addValidators([n.kI.required,n.kI.email])):(this.emailCtrl.clearValidators(),this.confirmEmailCtrl.clearValidators()),this.emailCtrl.updateValueAndValidity(),this.confirmEmailCtrl.updateValueAndValidity()}setPhoneValidators(t){t?this.phoneCtrl.addValidators([n.kI.required,n.kI.minLength(10),n.kI.maxLength(10),e=>e.value.split("").reduce((t,i)=>!isNaN(parseInt(i,10))&&t,!0)?null:{phoneNumber:e.value}]):this.phoneCtrl.clearValidators(),this.phoneCtrl.updateValueAndValidity()}onSubmitForm(){console.log(this.mainForm.value),this.loading=!0,this.complexFormService.saveUserInfo(this.mainForm.value).pipe((0,u.b)(t=>{this.loading=!1,t?this.resetForm():console.error("Echec de l'enregistrement des donn\xe9es.")})).subscribe()}resetForm(){this.mainForm.reset(),this.contactPreferenceCtrl.patchValue("email")}getFormCtrlErrorText(t){return t.hasError("required")?"Ce champs est requis":t.hasError("email")?"Merci d'entrer une adress mail valide":t.hasError("phoneNumber")?"Le num\xe9ro de t\xe9l\xe9phone ne doit contenir que des chiffres":t.hasError("minlength")?"Ce num\xe9ro de t\xe9l\xe9phone ne contient pas assez de chiffre":t.hasError("maxlength")?"Ce num\xe9ro de t\xe9l\xe9phone contient trop de chiffre":"Ce champs contient une erreur"}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(n.qu),r.Y36(Z))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-complex-form"]],decls:60,vars:14,consts:[[1,"main-form",3,"formGroup"],["formGroupName","personalInfo",1,"form-card"],[1,"form-row"],["appearance","fill"],["type","text","matInput","","formControlName","firstName"],["type","text","matInput","","formControlName","lastName"],[1,"form-card"],[3,"formControl"],["value","email"],["value","phone"],["class","form-card",3,"formGroup",4,"ngIf"],["class","form-card",4,"ngIf"],[1,"form-card",3,"formGroup"],["type","text","matInput","","formControlName","username"],["type","password","matInput","","formControlName","password"],["type","password","matInput","","formControlName","confirmPassword"],["class","error-text",4,"ngIf"],["mat-flat-button","","color","primary",3,"disabled","click"],["color","primary","mode","indeterminate",4,"ngIf"],["type","text","matInput","","formControlName","email"],["type","text","matInput","","formControlName","confirmEmail"],[1,"error-text"],["type","text","matInput","",3,"formControl"],["color","primary","mode","indeterminate"]],template:function(t,i){1&t&&(r.TgZ(0,"mat-card",0)(1,"mat-card-title"),r._uU(2,"Inscription"),r.qZA(),r.TgZ(3,"mat-card",1)(4,"mat-card-subtitle"),r._uU(5,"Informations personnelles"),r.qZA(),r.TgZ(6,"div",2)(7,"mat-form-field",3)(8,"mat-label"),r._uU(9,"Pr\xe9nom"),r.qZA(),r._UZ(10,"input",4),r.TgZ(11,"mat-error"),r._uU(12,"Ce champs est requis"),r.qZA()(),r.TgZ(13,"mat-form-field",3)(14,"mat-label"),r._uU(15,"Nom"),r.qZA(),r._UZ(16,"input",5),r.TgZ(17,"mat-error"),r._uU(18,"Ce champs est requis"),r.qZA()()()(),r.TgZ(19,"mat-card",6)(20,"mat-card-subtitle"),r._uU(21,"Comment pr\xe9f\xe9rez-vous \xeatre contact\xe9(e) ?"),r.qZA(),r.TgZ(22,"mat-radio-group",7)(23,"mat-radio-button",8),r._uU(24,"Mail"),r.qZA(),r.TgZ(25,"mat-radio-button",9),r._uU(26,"T\xe9l\xe9phone"),r.qZA()()(),r.YNc(27,P,18,6,"mat-card",10),r.ALo(28,"async"),r.YNc(29,b,9,2,"mat-card",11),r.ALo(30,"async"),r.TgZ(31,"mat-card",12)(32,"mat-card-subtitle"),r._uU(33,"Informations de connexion"),r.qZA(),r.TgZ(34,"mat-form-field",3)(35,"mat-label"),r._uU(36,"Nom d'utilisateur"),r.qZA(),r._UZ(37,"input",13),r.TgZ(38,"mat-error"),r._uU(39,"Ce champs est requis"),r.qZA()(),r.TgZ(40,"div",2)(41,"mat-form-field",3)(42,"mat-label"),r._uU(43,"Mot de passe"),r.qZA(),r._UZ(44,"input",14),r.TgZ(45,"mat-error"),r._uU(46,"Ce champs est requis"),r.qZA()(),r.TgZ(47,"mat-form-field",3)(48,"mat-label"),r._uU(49,"Confirmer votre mot de passe"),r.qZA(),r._UZ(50,"input",15),r.TgZ(51,"mat-error"),r._uU(52,"Ce champs est requis"),r.qZA()()(),r.YNc(53,N,2,0,"small",16),r.ALo(54,"async"),r.qZA(),r.TgZ(55,"mat-card-actions")(56,"button",17),r.NdJ("click",function(){return i.onSubmitForm()}),r._uU(57," Enregistrez "),r.qZA()(),r.YNc(58,O,1,0,"mat-spinner",18),r.qZA(),r._uU(59," securityInfoForm\n")),2&t&&(r.Q6J("formGroup",i.mainForm),r.xp6(22),r.Q6J("formControl",i.contactPreferenceCtrl),r.xp6(5),r.Q6J("ngIf",r.lcZ(28,8,i.showEmailCtrl$)),r.xp6(2),r.Q6J("ngIf",r.lcZ(30,10,i.showPhoneCtrl$)),r.xp6(2),r.Q6J("formGroup",i.loginInfoForm),r.xp6(22),r.Q6J("ngIf",r.lcZ(54,12,i.showPasswordError$)),r.xp6(3),r.Q6J("disabled",i.loading||i.mainForm.invalid),r.xp6(2),r.Q6J("ngIf",i.loading))},dependencies:[s.O5,l.a8,l.n5,l.$j,l.hq,A.lW,p.TO,p.KE,p.hX,T.Nt,x.VQ,x.U0,q.Ou,n.Fj,n.JJ,n.JL,n.oH,n.sg,n.u,n.x0,s.Ov],styles:["mat-form-field[_ngcontent-%COMP%]{width:45%}mat-form-field.full-width[_ngcontent-%COMP%]{width:80%;margin-left:10%}.form-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.form-card[_ngcontent-%COMP%]{margin:20px 0}.mat-radio-button[_ngcontent-%COMP%] ~ .mat-radio-button[_ngcontent-%COMP%]{margin-left:16px}mat-card-actions[_ngcontent-%COMP%]{text-align:center}.main-form[_ngcontent-%COMP%]{padding-bottom:30px;position:relative}.loading[_ngcontent-%COMP%]{position:absolute;top:-10px;bottom:-10px;left:-10px;right:-10px;height:inherit;z-index:10;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);display:flex;justify-content:center;align-items:center}.error-text[_ngcontent-%COMP%]{color:#f44336;display:block;width:100%;text-align:center;margin-top:20px}"]}),e})()}];let w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[f.Bz.forChild(V),f.Bz]}),e})();var M=o(7710);let J=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({providers:[Z],imports:[s.ez,w,M.m]}),e})()}}]);