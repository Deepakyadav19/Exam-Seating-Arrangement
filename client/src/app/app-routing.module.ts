import { ViewArrangementComponent } from './view-arrangement/view-arrangement.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./404/notfound.component";
import { AccessDeniedComponent } from "./access-denied/access-denied.component";
import { AdmindashboardComponent } from "./admindashboard/admindashboard.component";
import { AuthGuard } from './auth.guard';
import { EmployeedashboardComponent } from "./employeedashboard/employeedashboard.component";
import { LoginComponent } from "./login/login.component";
import { EmployeeFormComponent } from "./main/employee-form/employee-form.component";
import { MyprofileComponent } from "./myprofile/myprofile.component";
import { ProjectFormComponent } from "./project-form/project-form.component";
import { ProjectComponent } from "./project/project.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import {ResetpasswordComponent} from './resetpassword/resetpassword.component' 
const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "viewArrangement",
    component:ViewArrangementComponent
  },
  {
    path:"resetpassword",
    component:ResetpasswordComponent
  },
  {
    path: "sidebar",
    component: SidebarComponent,
  },
  {
    path: "myProfile",
    component: MyprofileComponent,
  },
  {
    path: "projects",
    component: ProjectComponent,

    canActivate:[AuthGuard],
    data: { 
      expectedRole: 'admin'
    } 
  },
  {
    path: "employee",
    component: EmployeedashboardComponent,
     canActivate:[AuthGuard],
    data: { 
      expectedRole: 'employee'
    } 
  },
  {
    path: "admin",
    component: AdmindashboardComponent,
     canActivate:[AuthGuard],
    data: { 
      expectedRole: 'admin'
    } 
  },
  {
    path: "viewArrangement",
    component:ViewArrangementComponent
  },
  {
    path: "accessdenied",
    component: AccessDeniedComponent,
    data: {},
    
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "employee",
    children: [
      {
        path: ":type",
        component: EmployeeFormComponent,
        
        
      },
      {
        path: "details/:empId",
        component: EmployeeFormComponent,
        
      },
      {
        path: ":type/:empId",
        component: EmployeeFormComponent,
      }
    ],
     canActivate:[AuthGuard],
        data: { 
          expectedRole: 'admin'
        } 
  },
  {
    path: "project",
    children: [
      {
        path: "",
        component: ProjectComponent,
        pathMatch: 'full'
      },
      {
        path: ":type",
        component: ProjectFormComponent
      },
      {
        path: "details/:projectId",
        component: ProjectFormComponent
      },
      {
        path: ":type/:projectId",
        component: ProjectFormComponent,
       
      }
    ],
     canActivate:[AuthGuard],
    data:{
        expectedRole:"admin"
    }
  },
 
  {
    path: "**",
    component: NotFoundComponent,
    
  },
 
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}