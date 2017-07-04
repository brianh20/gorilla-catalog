import angular from 'angular';
import { CatalogComponent }    from './catalog.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { FiltersModule } from './filters/filters.module';
import { DisplayModule } from './display/display.module';

export const CatalogModule = angular
  .module('catalog.module', 
  	[SidebarModule,
  	FiltersModule,
  	DisplayModule
  	])
  .component('catalog', CatalogComponent)
  .name;