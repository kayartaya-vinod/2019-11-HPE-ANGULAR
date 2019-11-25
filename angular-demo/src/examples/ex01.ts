import { OnInit, Component, NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

console.log('This is from ex01.ts');

// An Angular component is a class decorated with @Component

@Component({
    selector: 'app-root',
    template: `
    <h1>Angular demo</h1>
    <hr />
    <p>{{ message }}</p>
    `
})
class HelloWorldComponent implements OnInit {
    message: string;

    constructor() {
        console.log('HelloWorldComponent instantiated');
    }

    ngOnInit(): void {
        console.log('HelloWorldComponent initialized');
        this.message = 'Hello, world!';
    }

}


// An Angular module is a logical collection of 
// one or more components, service (injectable), pipe, directive
// and may refer (import) other modules

@NgModule({
    declarations: [
        // a list of all components, pipes, directives that belong to this module
        HelloWorldComponent
    ],
    providers: [
        // a list of injectables (services)
    ],
    imports: [
        // a list of other NgModules
        BrowserModule, // this helps angular to do DOM manipulation
    ],
    bootstrap: [
        // a list of components of this module that needs to be bootstraped
        HelloWorldComponent
    ]
})
class AppModule { }

// One last thing is to instruct Angular to bootstrap our module (AppModule)
platformBrowserDynamic().bootstrapModule(AppModule);