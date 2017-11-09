import { baseURL } from './baseurl';

export function RestangularConfigFactory(RestangularProvider) {
    RestangularProvider.setBaseUrl(baseURL)
    //RestangularProvider.setBaseUrl('http://api.restng2.local/v1');
    //RestangularProvider.setDefaultHeaders({'Authorization': 'Bearer UDXPx-Xko0w4BRKajozCVy20X11MRZs1'});
}