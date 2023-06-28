import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'bookings', name: 'BOOKINGS', route: '/main/bookings', icon: 'book_online'},
  { id: 'users', name: 'USERS', route: '/main/users', icon: 'people'},
  { id: 'products', name: 'PRODUCTS', route: '/main/products', icon: 'inventory'},
  { id: 'global-bookings', name: 'GLOBAL-BOOKINGS', route: '/main/global-bookings', icon: 'outbox'},
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' },
  
];
