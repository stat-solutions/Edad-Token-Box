import { Component, OnInit, Input, HostListener } from '@angular/core';
import { LayoutService } from '../../../shared/services/layout.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel-agent.component.html',
  styleUrls: ['./left-panel-agent.component.scss']
})
export class LeftPanelAgentComponent implements OnInit {
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
        name: 'Agent Dashboard',
        icon: 'far fa-clone',
        url: '/dashboardAgent/theAgentDashboard'
        // badge: '2',
        // badgeBg: 'bg-success',
      },

      {
        name: 'Add Tokens To Stock',
        icon: 'far fa-calendar-alt text-danger',
        url: '/addtokensAgent'
        // badge: '3',
        // badgeBg: 'bg-danger',
      },
      {
        name: 'Sell Tokens',
        icon: 'far fa-user-circle text-success',
        url: '/selltokensAgent'
        // badge: '3',
        // badgeBg: 'bg-danger',
      }
      ,
      // {
      //   name: 'Transfer Tokens To Savings',
      //   icon: 'far fa-user-circle text-info',
      //   url: '/transfertokenstosavingsboxAgent'
        // badge: '3',
        // badgeBg: 'bg-danger',
      // },
      // {
      //   name: 'Withdraw Tokens',
      //   icon: 'far fa-clone text-warning',
      //   url: '/withdrawTokensAgent'
        // badge: '2',
        // badgeBg: 'bg-success',
      // },


      {
        name: 'Update Profile',
        icon: 'far fa-user text-danger',
        url: '/updateagentprofileAgent'
        // badge: '3',
        // badgeBg: 'bg-danger',
      }

      ,


      {
        name: 'Notifications',
        icon: 'fas fa-envelope text-info',
        url: '/notificationsAgent',
        badge: '8',
        badgeBg: 'bg-danger',
      }


    ];
  }
}
