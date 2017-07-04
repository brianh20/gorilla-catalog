export const SiteService = function ($http) {
  class SiteModel {
    get() {
      return $http({
        url: '../../mock/site.json',
        method: 'GET'
      }).then((res) => {
        // Return response
        return res;
      }, () => {
        // Handle error
        return 'Error contacting service';
      });
    }
  }
  return SiteModel;
};