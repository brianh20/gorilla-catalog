import template from './filters.html';

export const FiltersComponent = {
  template,
  bindings: {
    views: '<',
    displayLimits: '<',
    sorting: '<'
  },
  controller: class FiltersComponentController {
  }
};

