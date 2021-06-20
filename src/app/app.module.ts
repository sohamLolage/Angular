import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './loginportal/login/login.component';
import { RegistrationComponent } from './loginportal/registration/registration.component';
import {HttpClientModule} from '@angular/common/http';
import { PipeexampleComponent } from './pipes/pipeexample/pipeexample.component';
import { CustomPipe } from './pipes/custom.pipe';
import { ExponentialPipe } from './pipes/custompipes/exponential.pipe';
import { SearchFilterPipe } from './pipes/custompipes/search-filter.pipe';
import { ProductComponent } from './component/product/product.component';
import { DiscountFilterPipe } from './pipes/custompipes/discount-filter.pipe';
import { ParentComponent } from './component/parent.component';
import { ChildComponent } from './component/child.component';
import { TemplateDrivenFormComponent } from './Forms/template-driven-form/template-driven-form.component';
import { RegisterCrudComponent } from './component/CrudWithService/register-crud/register-crud.component';
import { ObservableDemoComponent } from './ObservableDemo/observable-demo/observable-demo.component';
import { HttpdemoComponent } from './HttpDemo/httpdemo/httpdemo.component';
import { UserComponent } from './ServiceUsingHttpClient/user/user.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    PipeexampleComponent,
    CustomPipe,
    ExponentialPipe,
    SearchFilterPipe,
    ProductComponent,
    DiscountFilterPipe,
    ParentComponent,
    ChildComponent,
    TemplateDrivenFormComponent,
    RegisterCrudComponent,
    ObservableDemoComponent,
    HttpdemoComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    CustomPipe
  ]
})
export class AppModule { }
