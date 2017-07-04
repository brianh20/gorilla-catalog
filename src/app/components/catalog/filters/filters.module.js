import angular from 'angular';
import { FiltersComponent }    from './filters.component';

export const FiltersModule = angular
  .module('filters.module', [
  ])
  .component('filters', FiltersComponent)
  .name;