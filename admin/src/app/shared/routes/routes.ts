import { Routes } from "@angular/router";

export const content : Routes = [
  {
    path: 'dashboard',
    data: {
      title: 'Dashboard',
      breadcrumb: 'Dashboard'
    },
    loadChildren: () => import('../../components/dashboard/dashboard.routes')
  },
  {
    path: 'property',
    data: {
      title: 'My properties',
      breadcrumb: 'My properties'
    },
    loadChildren: () => import("../../components/property/property.routes")
  },
  {
    path: 'manage-user',
    data: {
      title: 'Manage users',
      breadcrumb: 'Manage users'
    },
    loadChildren: () => import("../../components/manage-user/manage-user.routes")
  },
  {
    path: 'agents',
    data: {
      title: 'Agents',
      breadcrumb: 'Agents'
    },
    loadChildren: () => import('../../components/agents/agents.routes')
  },
  {
    path: 'map',
    data: {
      title: 'Map',
      breadcrumb: 'Map'
    },
    loadChildren: () => import('../../components/maps/maps.routes')
  },
  {
    path: 'type',
    data: {
      title: "Types",
      breadcrumb: 'Types',
    },
    loadChildren: () => import('../../components/property-types/property-types.routes')
  },
  {
    path: 'reports',
    data: {
      title: "Reports",
      breadcrumb: 'Reports',
    },
    loadChildren: () => import('../../components/reports/reports.routes')
  },
  {
    path: 'payments',
    data: {
      title: "Payments",
      breadcrumb: 'Payments',
    },
    loadChildren: () => import('../../components/payments/payments.routes')
  }
]
