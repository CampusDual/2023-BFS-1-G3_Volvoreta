import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'bookings', name: 'BOOKINGS', route: '/main/bookings', icon: 'book_online'},
  { id: 'users', name: 'USERS', route: '/main/users', icon: 'people'},
  { id: 'products', name: 'PRODUCTS', route: '/main/products', icon: 'inventory'},
  { id: 'global-bookings', name: 'GLOBAL-BOOKINGS', route: '/main/global-bookings', icon: 'outbox'},
  { id: 'booking-charts', name: 'GLOBAL-BOOKINGS-CHART', icon: 'bar_chart', opened: false, route: 'main/booking-charts/home',
    items: [
      { id: 'chart-sells', name: 'CHARTS-SELLS-YEAR', route: '/main/booking-charts/chart-sells', icon: 'bar_chart'},
      { id: 'chart-profits', name: 'CHARTS-PROFITS-YEAR', route: '/main/booking-charts/chart-profits', icon: 'bar_chart'},
      { id: 'chart-locations', name: 'CHARTS-LOCATIONS-YEAR', route: '/main/booking-charts/chart-locations', icon: 'bar_chart'},
      { id: 'chart-locationp', name: 'CHARTS-LOCATIONP-YEAR', route: '/main/booking-charts/chart-locationp', icon: 'bar_chart'},
      { id: 'chart-stock', name: 'CHARTS-STOCK', route: '/main/booking-charts/chart-stock', icon: 'bar_chart'},
      { id: 'chart-users', name: 'CHARTS-USERS', route: '/main/booking-charts/chart-users', icon: 'bar_chart'},
    ]
  },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' },
];
