// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverSocket: 'http://ec2-15-228-21-133.sa-east-1.compute.amazonaws.com:3000',
  HOST: 'http://ec2-15-228-21-133.sa-east-1.compute.amazonaws.com:3000',
  secret: 'S0yuNt3xt0S3cR3t0',
  user: {
    email: 't.provider@example.com',
    password: 'test'
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
