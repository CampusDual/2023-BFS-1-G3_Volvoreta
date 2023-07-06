import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService, PermissionsGuardService } from 'ontimize-web-ngx';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService],
    canActivateChild: [PermissionsGuardService],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), 
      data: {
        oPermission: {
          permissionId: 'home-permissions',
          restrictedPermissionsRedirect: '/login',
        }
      } 
    },
      { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule), 
          data: {
            oPermission: {
              permissionId: 'users-permissions',
              restrictedPermissionsRedirect: '/main/home',
              // restrictedPermissionsRedirect: '403',
            }
          } 
      },
      { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule), 
          data: {
            oPermission: {
              permissionId: 'products-permissions',
              restrictedPermissionsRedirect: '/main/home',
              // restrictedPermissionsRedirect: '403',
            }
          } 
      },
      { path: 'bookings', loadChildren: () => import('./bookings/bookings.module').then(m => m.BookingsModule)},
      { path: 'global-bookings', loadChildren: () => import('./global-bookings/global-bookings.module').then(m => m.GlobalBookingsModule), 
        data: {
          oPermission: {
            permissionId: 'global-bookings-permissions',
            restrictedPermissionsRedirect: '/main/home',
            // restrictedPermissionsRedirect: '403',
          }
        } 
      },
      { path: 'booking-charts-profits', loadChildren: () => import('./booking-charts-profits/booking-charts-profits.module').then(m => m.BookingChartsProfitsModule), 
        data: {
          oPermission: {
            permissionId: 'booking-charts-sells-permissions',
            restrictedPermissionsRedirect: '/main/home',
            // restrictedPermissionsRedirect: '403',
          }
        } 
      },
      { path: 'booking-charts-sells', loadChildren: () => import('./booking-charts-sells/booking-charts-sells.module').then(m => m.BookingChartsSellsModule), 
        data: {
          oPermission: {
            permissionId: 'booking-charts-sells-permissions',
            restrictedPermissionsRedirect: '/main/home',
            // restrictedPermissionsRedirect: '403',
          }
        } 
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
