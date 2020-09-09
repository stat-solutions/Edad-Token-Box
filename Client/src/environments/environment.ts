// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  apiUrl: 'http://localhost:3021',

  firebase : {
    apiKey: 'AIzaSyBUscojUEXp_j30YBlgidYHXBKikOZ0jXU',
    authDomain: 'edadtokenapp.firebaseapp.com',
    databaseURL: 'https://edadtokenapp.firebaseio.com',
    projectId: 'edadtokenapp',
    storageBucket: 'edadtokenapp.appspot.com',
    messagingSenderId: '1001291746108',
    appId: '1:1001291746108:web:feb1f2ff753df57fc72c39',
    measurementId: 'G-WFNVD71HSZ'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.