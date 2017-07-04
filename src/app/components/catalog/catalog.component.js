import template from './catalog.html';

export const CatalogComponent = {
  template,
  controller: class CatalogComponentController {
  	constructor(SiteService) {
      'ngInject';

      this.SiteService = SiteService;
      this.Site = new this.SiteService();
    }

    $onInit() {
        //Init Contact List
        this.results = this.Site
        .get()
        .then((response) => {
          this.site = response.data;
          console.log(this.site);
        }, ()=> {
          console.log('Error resolving response');
        });

        //Check for mobile in order to wireFrame
        if (window.innerWidth < 400) {
            this.mobileDisplay = true;
        }
    }
  }
};

