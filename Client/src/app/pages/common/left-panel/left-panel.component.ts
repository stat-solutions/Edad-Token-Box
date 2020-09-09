import { Component, OnInit, Input, HostListener } from '@angular/core';
import { LayoutService } from '../../../shared/services/layout.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
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
  title: any;
  menuList: any;
  selected: any;
  constructor(private layoutService: LayoutService) { }

  isActive(item) {
      return this.selected === item;
  }
  onItemSelect(item) {
    this.selected = (this.selected === item ? item : item);
  }
  onSubItemSelect(item) {
    event.stopPropagation();
    this.selected = (this.selected === item ? item : item);
  }


  @HostListener('window:resize', ['$event'])
  onResizeHeight(event: any) {
      this.asidebarHeight = window.innerHeight;
  }



  ngOnInit() {
    this.layoutService.setAsidebarHeightCast.subscribe(setSidebarHeight => this.asidebarHeight = setSidebarHeight);

    this.title = 'Smart Agent Dashboard';
    this.menuList = [
      {
        name: 'Dashboard',
        icon: 'fas fa-tachometer-alt',
        url: '/dashboard',
      },
      {
        name: 'Elements',
        icon: 'far fa-clone',
        url: '/elements',
        badge: '2',
        badgeBg: 'bg-success',
      },
      {
        name: 'Tables',
        icon: 'far fa-calendar-alt',
        url: '/tables',
        badge: 'New',
        badgeBg: 'bg-danger',
      },
      {
        name: 'eCommerce',
        icon: 'fas fa-shopping-cart',
        subMenu: [
          {
            name: 'Orders',
            icon: 'far fa-circle',
            url: '/orders',
          },
          {
            name: 'Order View',
            icon: 'far fa-circle',
            url: '/order-view',
          },
          {
            name: 'Products',
            icon: 'far fa-circle',
            url: '/products',
          },
          {
            name: 'Product Edit',
            icon: 'far fa-circle',
            url: '/product-edit',
          },
        ]
      },
      {
        name: 'Components',
        icon: 'far fa-sun',
        subMenu: [
          {
            name: 'Date & Time Picker',
            icon: 'far fa-circle',
            url: '/date-time-picker',
          },
          {
            name: 'Color Pickers',
            icon: 'far fa-circle',
            url: '/color-pickers',
          },
          {
            name: 'Bootstrap Select',
            icon: 'far fa-circle',
            url: '/select',
          },
          {
            name: 'Bootstrap Switch',
            icon: 'far fa-circle',
            url: '/switch',
          },
          {
            name: 'Bootstrap file upload',
            icon: 'far fa-circle',
            url: '/file-upload',
          },
          {
            name: 'Bootstrap TouchSpin',
            icon: 'far fa-circle',
            url: '/touchspin',
          },
          {
            name: 'Bootstrap Icons',
            icon: 'far fa-circle',
            url: '/icons',
          },
          {
            name: 'Code Editor',
            icon: 'far fa-circle',
            url: '/code-editor',
          },
          {
            name: 'WYSIWYG Editor',
            icon: 'far fa-circle',
            url: '/WYSIWYG-editor',
          },
          {
            name: 'Widgets & Tools',
            icon: 'far fa-circle',
            url: '/widgets-tools',
          },
          {
            name: 'Context Menu',
            icon: 'far fa-circle',
            url: '/context-menu',
          },

        ]
      },
      {
        name: 'UI Features',
        icon: 'far fa-gem',
        subMenu: [
          {
            name: 'Color Library',
            icon: 'far fa-circle',
            url: '/color-library',
          },
          {
            name: 'Grid System',
            icon: 'far fa-circle',
            url: '/grid-system',
          },
          {
            name: 'General Components',
            icon: 'far fa-circle',
            url: '/general-components',
          },
          {
            name: 'Buttons',
            icon: 'far fa-circle',
            url: '/buttons',
          },
          {
            name: 'Spinner Buttons',
            icon: 'far fa-circle',
            url: '/spinner-buttons',
          },
          {
            name: 'Font Icons',
            icon: 'far fa-circle',
            url: '/font-icons',
          },
          {
            name: 'Social Icons',
            icon: 'far fa-circle',
            url: '/soical-icons',
          }
        ]
      },
      {
        name: 'Form Stuff',
        icon: 'far fa-edit',
        subMenu: [
          {
            name: 'Form Control',
            icon: 'far fa-circle',
            url: '/form-control',
          },
          {
            name: 'Form Validation',
            icon: 'far fa-circle',
            url: '/form-validation',
          },
          {
            name: 'Form Layouts',
            icon: 'far fa-circle',
            url: '/form-layouts',
          },
          {
            name: 'Form Input Mask',
            icon: 'far fa-circle',
            url: '/form-input-mask',
          },
          {
            name: 'Form X-editable',
            icon: 'far fa-circle',
            url: '/form-X-editable',
          },
          {
            name: 'Form Wizard',
            icon: 'far fa-circle',
            url: '/form-wizard',
          },
          {
            name: 'Image Cropping',
            icon: 'far fa-circle',
            url: '/image-cropping',
          },
          {
            name: 'Multiple File Upload',
            icon: 'far fa-circle',
            url: '/multiple-file-upload',
          },
          {
            name: 'Dropzone File Upload',
            icon: 'far fa-circle',
            url: '/dropzone-file-upload',
          }
        ]
      },
      {
        name: 'Portlets',
        icon: 'far fa-bookmark',
        subMenu: [
          {
            name: 'Boxed Portlets',
            icon: 'far fa-circle',
            url: '/boxed-portlets',
          },
          {
            name: 'Light Portlets',
            icon: 'far fa-circle',
            url: '/light-portlets',
          },
          {
            name: 'Solid Portlets',
            icon: 'far fa-circle',
            url: '/solid-portlets',
          },
          {
            name: 'Ajax Portles',
            icon: 'far fa-circle',
            url: '/ajax-portles',
          },
          {
            name: 'Draggable Portlets',
            icon: 'far fa-circle',
            url: '/draggable-portlets',
          },
        ]
      },
      {
        name: 'Pages Layouts',
        icon: 'far fa-list-alt',
        subMenu: [
          {
            name: 'Blank Page',
            icon: 'far fa-circle',
            url: '/blank-page',
          },
          {
            name: 'Ajax Contant',
            icon: 'far fa-circle',
            url: '/ajax-contant-layout',
          },
          {
            name: 'Off-Canvas Menu',
            icon: 'far fa-circle',
            url: '/off-canvas-mobile-menu',
          },
          {
            name: 'Classic Page Head',
            icon: 'far fa-circle',
            url: '/classic-page-head',
          },
          {
            name: 'Light Page Head',
            icon: 'far fa-circle',
            url: '/light-page-head',
          },
          {
            name: 'Boxed Page',
            icon: 'far fa-circle',
            url: '/boxed-page',
          }
        ]
      },
      {
        name: 'Custom Layout',
        icon: 'far fa-paper-plane',
        subMenu: [
          {
            name: 'Light Sidebar',
            icon: 'far fa-circle',
            url: '/light-sidebar-menu',
          },
          {
            name: 'Hover Sidebar',
            icon: 'far fa-circle',
            url: '/hover-sidebar-menu',
          },
          {
            name: 'Fixed Sidebar',
            icon: 'far fa-circle',
            url: '/fixed-sidebar-layout',
          },
          {
            name: 'Closed Sidebar',
            icon: 'far fa-circle',
            url: '/closed-sidebar-layout',
          },
          {
            name: 'Offcanvas Sidebar',
            icon: 'far fa-circle',
            url: '/offcanvas-sidebar-layout',
          }
        ]
      },
      {
        name: 'Invoice',
        icon: 'far fa-file-alt',
        url: '/invoice-summary',
      },
      {
        name: 'Authentication',
        icon: 'far fa-user-circle',
        url: '/authentication',
      },
      {
        name: 'Other App',
        icon: 'far fa-comments',
        url: '/other-app',
        badge: 'New',
        badgeBg: 'bg-warning',
      },

    ];
  }

}
