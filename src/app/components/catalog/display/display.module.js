import angular from 'angular';
import { DisplayComponent }    from './display.component';

export const DisplayModule = angular
  .module('display.module', [
  ])
  .component('display', DisplayComponent)
  .name;