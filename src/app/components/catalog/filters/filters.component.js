import template from './filters.html';

export const FiltersComponent = {
  template,
  bindings: {
    views: '<',
    displayLimits: '<',
    sorting: '<',
    sortType: '<',
    reSort: '&',
    reLimit: '&'
  },
  controller: class FiltersComponentController {   
    changeSorting(event) {
      let newType = event.target.value;
      this.reSort({newType});
    }

    changeLimit(event) {
      let newLimit = event.target.value;
      this.reLimit({newLimit});
    }
  }
};

