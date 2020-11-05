import { Component, OnInit, Input, HostListener } from '@angular/core';
import { LayoutService } from '../../../shared/services/layout.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel-admin.component.html',
  styleUrls: ['./left-panel-admin.component.scss']
})
export class LeftPaneladminComponent implements OnInit {
  asidebarHeight: number;

  @Input() navLayout: string;
  @Input() defaultNavbar: string;
  @Input() toggleNavbar: string;
  @Input() toggleStatus: boolean;
  @Input() navbarEffect: string;
  @Input() deviceType: string;
  @Input() headerColorTheme: string;
  @Input() navbarColorTheme: string;
  @Input() activeNavColorTheme: string;
  imageurl = '../../../../assets/avatar3.jpg';
  title: any;
  menuList: any;
  selected: any;
  userName: any;
  constructor(private layoutService: LayoutService) {}

  isActive(item) {
    return this.selected === item;
  }
  onItemSelect(item) {
    this.selected = this.selected === item ? item : item;
  }
  onSubItemSelect(item) {
    event.stopPropagation();
    this.selected = this.selected === item ? item : item;
  }

  @HostListener('window:resize', ['$event'])
  onResizeHeight(event: any) {
    this.asidebarHeight = window.innerHeight;
  }

  ngOnInit() {
    this.layoutService.setAsidebarHeightCast.subscribe(
      setSidebarHeight => (this.asidebarHeight = setSidebarHeight)
    );

    this.title = 'Navigation';

    this.menuList = [
      {
        name: "admin Dashboard",
        icon: "far fa-clone",
        url: "/dashboardadmin",
      },

      {
        name: "Post Transactions",
        icon: "fas fa-exchange-alt",
        url: "/posttransactions",
      },
      {
        name: "Approve Purchases",
        icon: "fas fa-coins",
        url: "/approvetokenpurchases",
      },
      {
        name: "Approve Withdraws",
        icon: "fas fa-money-bill",
        url: "/approvetokenwithdraws",
      },
      {
        name: "Reports",
        icon: "fas fa-chart-line",
        url: "/reports",
      },
      {
        name: "Profile",
        icon: "fas fa-user-cog",
        url: "/updateadminprofile",
      },

      {
        name: "Notifications",
        icon: "fas fa-envelope",
        url: "/notifications",
        badge: "8",
        badgeBg: "bg-danger",
      },
    ];
  }
}
