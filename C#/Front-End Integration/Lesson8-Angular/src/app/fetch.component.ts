import { Component } from '@angular/core';
@Component({
    selector: 'app-fetch-request',
    template: `<h1> Test </h1>
    <button type="button" (click)="this.getApi()">Click Me!</button>
    <ul *ngFor = "let data of apiData">
    <li>{{data}} </li>
    </ul>
    `
})
export class GetRequestComponent {
    apiData;

    getApi() {
        const url = 'http://localhost:5001/api/Characters';
        fetch(url)
            .then(resp => resp.json())
            .then(resp => (this.apiData = resp));
    }
}
