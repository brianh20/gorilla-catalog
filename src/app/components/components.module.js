import angular from 'angular';
import { TopModule } from './top/top.module';
import { CatalogModule } from './catalog/catalog.module';
import { BottomModule } from './bottom/bottom.module';


export const ComponentsModule = angular
  .module('app.components', [
    TopModule,
    CatalogModule,
    BottomModule])
  .name;