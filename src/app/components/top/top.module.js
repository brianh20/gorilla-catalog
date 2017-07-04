import angular from 'angular';
import { TopComponent }    from './top.component';

export const TopModule = angular
  .module('top.module', [
  ])
  .component('top', TopComponent)
  .name;