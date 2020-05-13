import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { jsonDecoder } from '../utils/json.util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input()
  menus: any=[];
  dashboard: string;

  constructor(private router: Router) { }

  ngOnInit() {
    const decodeToken = jsonDecoder();
    if(decodeToken.role == "Admin"||decodeToken.role == "admin"){
      this.dashboard = "Admin Dashboard";
      this.menus.push(
        {
          title: "Employees",
          icon: "fa fa-users",
          active: false,
          type: "dropdown",
    
          submenus: [
            {
              title: "Add New Employee",
              route: "/employee/create"
            }
          ]
        },
    ); 
    }
  }

  home(title){
    if(title=='Admin Dashboard')
    this.router.navigate(['/admin']);
    else if(title=='Manager Dashboard')
    this.router.navigate(['/manager']);
    else  if(title=='Employee Dashboard')
    this.router.navigate(['/timesheetweek']);
    else if(title=='C-level Manager Dashboard')
    this.router.navigate(['/clevel']);
    else
    this.router.navigate(['/accessdenied']);
  }
  logout() {
    localStorage.removeItem('Authorization');
    this.router.navigate(["/login"]);
  }
 
}
