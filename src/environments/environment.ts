// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // endPointHttp: 'https://pcabackend.infomediaservice.online:9000/api',
  // endPointHttp: 'https://as-ws-zona-transaccionales.azurewebsites.net/api', // Viejo, rutas quemadas
  endPointHttp: 'https://as-ws-zona-transaccionales.azurewebsites.net/infomediadev/api',
  endPointSocket: 'ws://20.65.46.44:3004/connection/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
