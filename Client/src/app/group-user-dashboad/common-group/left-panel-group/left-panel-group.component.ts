import { Component, OnInit, Input, HostListener } from '@angular/core';
import { LayoutService } from 'src/app/shared/services/layout.service';

@Component({
  selector: 'app-left-panel-group',
  templateUrl: './left-panel-group.component.html',
  styleUrls: ['./left-panel-group.component.scss']
})
export class LeftPanelGroupComponent implements OnInit {
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
        name: this.userName,
        icon: 'far fa-user-circle',
        url: '/none',
        image: this.imageurl
      },

      {
        name: 'Group Dashboard',
        icon: 'far fa-clone',
        url: '/dashboardgroup'
        // badge: '2',
        // badgeBg: 'bg-success',
      },

      {
        name: 'Add New Member To Group',
        icon: 'far fa-calendar-alt text-danger',
        url: '/addmembergroup'
        // badge: '3',
        // badgeBg: 'bg-danger',
      },

      // {
      //   name: 'Notifications',
      //   icon: 'fas fa-envelope text-info',
      //   url: '/notifications',
      //   badge: '8',
      //   badgeBg: 'bg-danger',
      // }


    ];
  }
}
