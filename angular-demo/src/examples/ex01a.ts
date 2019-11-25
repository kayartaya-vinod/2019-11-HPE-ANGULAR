import { Component, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';

@Component({
    selector: 'div.welcome',
    template: `
    <h1>Angular demo</h1>
    <hr />
    <pre>{{ data }}</pre>
    `
})
class TableComponent {
    data: string;

    ngOnInit() {
        let n = 12;
        this.data = '';
        for(let i=1; i<=20; i++) {
            this.data += `${n} X ${i} = ${n*i}\n`
        }
    }
}


@NgModule({
    declarations: [TableComponent],
    imports: [BrowserModule],
    bootstrap: [TableComponent]
})
class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule)