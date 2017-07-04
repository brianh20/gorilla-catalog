import angular from 'angular';
import { CatalogComponent }    from './catalog.component';
import { SidebarModule } from './sidebar/sidebar.module';

export const CatalogModule = angular
  .module('catalog.module', [SidebarModule
  ])
  .component('catalog', CatalogComponent)
  .name;