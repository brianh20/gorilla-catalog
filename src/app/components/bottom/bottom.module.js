import angular from 'angular';
import { BottomComponent }    from './bottom.component';

export const BottomModule = angular
  .module('bottom.module', [
  ])
  .component('bottom', BottomComponent)
  .name;