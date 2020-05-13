import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule, MatToolbarModule, MatDialogRef } from "@angular/material";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from "@angular/material/select";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ButtonsModule, CardsModule, CheckboxModule, IconsModule, InputsModule, MDBBootstrapModule, TableModule, WavesModule } from "angular-bootstrap-md";
import { ChartsModule } from 'ng2-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NotFoundComponent } from "./404/notfound.component";
import { AccessDeniedComponent } from "./access-denied/access-denied.component";
import { AdmindashboardComponent } from "./admindashboard/admindashboard.component";
import { TableRowComponent } from "./admindashboard/tablerow/tablerow.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthGuard } from './auth.guard';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { RoleGuardService } from './guards/role-guard.service';
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { EmployeeFormComponent } from "./main/employee-form/employee-form.component";
import { MainComponent } from "./main/main.component";
import { MyprofileComponent } from "./myprofile/myprofile.component";
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectFormComponent } from "./project-form/project-form.component";
import { ProjectComponent } from "./project/project.component";
import { ProjectRowComponent } from './project/projectrow/projectrow.component';
import { ServicesService } from './services.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ViewArrangementComponent } from './view-arrangement/view-arrangement.component';
import { CreateArrangementComponent } from './create-arrangement/create-arrangement.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    LoginComponent,
    EmployeeFormComponent,
    AccessDeniedComponent,
    AdmindashboardComponent,
    ProjectComponent,
    ProjectFormComponent,
    MyprofileComponent,
    NotFoundComponent,
    TableRowComponent,
    SidebarComponent,
    ProjectRowComponent,
    EmployeedashboardComponent,
    NavbarComponent,
    ResetpasswordComponent,
    ConfirmEqualValidatorDirective,
    ViewArrangementComponent,
    CreateArrangementComponent
   
  ],
  imports: [PerfectScrollbarModule ,
    NgbModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    MatSelectModule,
    
    //Third Party
   
    MDBBootstrapModule.forRoot(),
    CheckboxModule,
    WavesModule,
    ButtonsModule,
    InputsModule,
    IconsModule,
    CardsModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    MDBBootstrapModule.forRoot(),
    CheckboxModule,
    WavesModule,
    ButtonsModule,
    InputsModule,
    IconsModule,
    CardsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  providers: [ServicesService, RoleGuardService,AuthGuard, NgbActiveModal],
entryComponents: [],
  bootstrap: [AppComponent]
  // entryComponents: [TimesheetComponent]
})
export class AppModule {}