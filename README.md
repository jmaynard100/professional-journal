# ProfessionalJournal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

##Running the application

Start the mongodb service and cd into the root of the project using the Angular cli. Run the command node server.js to open a working version of the application. If no errors appear navigate to localhost:3000/ in a web browser to see what the application does.

When writing code and wanting to check the impact of changes quickly run the command ng serve and navigate to localhost:4200/. This method cannot make api calls to the database so should only be used to check visual changes to the application.

Currently 2 functions are implemented which run on the / and /get-users paths to add a user object to the database and get all the users respecively. Ensure that a database with name journaldb exists in your mongo application by opening it and running the command use journaldb.

If /get-users successfully shows data on the screen. The application is working as designed.