import { Component, OnInit, Input, HostListener } from '@angular/core';
import { LayoutService } from '../../../shared/services/layout.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel-saver.component.html',
  styleUrls: ['./left-panel-saver.component.scss']
})
export class LeftPanelSaverComponent implements OnInit {
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
        name: 'Smart Saver Dashboard',
        icon: 'far fa-clone',
        url: '/saverdashboard'
        // badge: '2',
        // badgeBg: 'bg-success',
      },

      {
        name: 'Add Tokens ',
        icon: 'fa fa-plus-circle text-danger',
        url: '/addsaverstokens'
        // badge: '3',
        // badgeBg: 'bg-danger',
      },

      {
       name: 'Add Tokens Through Agent',
       icon: 'fa fa-plus-circle text-primary',
       url: '/addtokensagent'
       // badge: '3',
       // badgeBg: 'bg-danger',
     }
    ,
      {
        name: 'Withdraw Saver Tokens',
        icon: 'far fa-user-circle text-success',
        url: '/withdrawsaverstokens'
        // badge: '3',
        // badgeBg: 'bg-danger',
      }


 ,
 {
   name: 'Withdraw Saver Profit',
   icon: 'far fa-user-circle text-info',
   url: '/withdrawsaversprofit'
   // badge: '3',
   // badgeBg: 'bg-danger',
 }
,
      {
        name: 'Notifications',
        icon: 'fas fa-envelope text-info',
        url: '/saverNotifications',
        badge: '8',
        badgeBg: 'bg-danger',
      }


    ];
  }
}
