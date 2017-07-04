import template from './filters.html';

export const FiltersComponent = {
  template,
  bindings: {
    views: '<',
    displayLimits: '<',
    sorting: '<',
    sortType: '<',
    reSort: '&'
  },
  controller: class FiltersComponentController {   
    changeSorting(event) {
      let newType = event.target.value;
      this.reSort({newType});
    }
  }
};

