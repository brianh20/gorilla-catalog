import template from './catalog.html';

export const CatalogComponent = {
  template,
  controller: class CatalogComponentController {
  	constructor(SiteService) {
      'ngInject';
      this.SiteService = SiteService;
      this.Site = new this.SiteService();

      this.data = {};
      this.items = [];
      this.facets = [];
      this.topControls = {};
      this.sortType = '';
    }

    $onInit() {
      //Init Contact List
      this.results = this.Site
      .get()
      .then((response) => {
        this.transformData(response.data);
      }, ()=> {
        console.log('Error resolving response');
      });
    }

    transformData(data){
      this.data = data;
      this.items = data.catalog;
      this.topControls = data.topControls;
      this.facets = this.removeAll(data.facets);
      this.sortType = 'Position';
    }

    activateFacet(facet,filter) {
      this.facets[facet].filters[filter].active=true;
    }

    removeFacet(facet, filter) {
      this.facets[facet].filters[filter].active=false;
    }

    removeAll(facets){
      facets.forEach((facet) => {
        facet.filters.forEach((filter)=>{
          filter.active = false;
        });
      });
      return facets;
    }

    sortItems(type) {
      if (type==='Price Asc.') {
        this.items.forEach((element)=>{
          if (element.price.regular || element.price.special) {
            if (element.price.regular > element.price.special && element.price.special) {
              element.goingPrice = element.price.special;
            } else {
              element.goingPrice = element.price.regular;
            }
          } else {
            element.goingPrice = element.price;
          }
        });
        this.items.sort(function(a, b) {
          return parseFloat(a.goingPrice) - parseFloat(b.goingPrice);
        });
      }

      if (type==='Price Desc.') {
        this.items.forEach((element)=>{
          if (element.price.regular || element.price.special) {
            if (element.price.regular > element.price.special && element.price.special) {
              element.goingPrice = element.price.special;
            } else {
              element.goingPrice = element.price.regular;
            }
          } else {
            element.goingPrice = element.price;
          }
        });
        this.items.sort(function(a, b) {
          return parseFloat(b.goingPrice) - parseFloat(a.goingPrice);
        });
      }

    }


  }
};

