// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBvxkxYqA5cs0zxXoRauaDbYAgKa_mC9k0",
    authDomain: "fantasytasks.firebaseapp.com",
    databaseURL: "https://fantasytasks.firebaseio.com",
    projectId: "fantasytasks",
    storageBucket: "fantasytasks.appspot.com",
    messagingSenderId: "693870969720"
  }
};
