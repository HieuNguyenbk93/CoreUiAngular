# CoreUiAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.8.

## Add bootstrap
Reference `https://viblo.asia/p/cai-dat-bootstrap-5-trong-angular-13-RQqKL3w457z`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Webpack-bundle-analyzer

Reference [100 days of angular](https://www.youtube.com/watch?v=D0Tv5BaNTa8&list=PLMTyi4Bfd5pW73uXw-6jgRxDwdPYqwk0r&index=28)

Create app route link: login (login component) and admin(component has the same layout)
Create componets: 
- login 
- dasboard, user-profile (have a same layout)
- footer, navbar, sidebar (must declaration to use selector, they are declared in component.moudle, and import in app.moudle)
- admin-layout (use footer, navbar, sidebar to build layout). Create module and component admin-layout. When the module has component, it called layout.
  - To use selector component (must declare and import components in a module)

Create route for admin-layout module. Not use routing.module that is the same angular. Instead of, create file routing.ts, it have list route. In module, import `RouterModule.forChild(AdminLayoutRoutes)`. Practice lazy loading in app.route: app.module is in file js, admin-layout.module is in anther file js. Only load admin-layout, file js 

To use webpack-bundle-analyzer:
- `npm install --save-dev webpack-bundle-analyzer`
- set `"outputHashing": "none"` in auglar.json
- `ng build --stats-json`
- cd dist/core-ui-angular: `npx webpack-bundle-analyzer stats.json`


