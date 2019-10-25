var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var GetRequestComponent = /** @class */ (function () {
    function GetRequestComponent() {
    }
    GetRequestComponent.prototype.getApi = function () {
        var _this = this;
        var url = 'http://localhost:5001/api/Characters';
        fetch(url)
            .then(function (resp) { return resp.json(); })
            .then(function (resp) { return (_this.apiData = resp); });
    };
    GetRequestComponent = __decorate([
        Component({
            selector: 'app-fetch-request',
            template: "<h1> Test </h1>\n    <button type=\"button\" (click)=\"this.getApi()\">Click Me!</button>\n    <ul *ngFor = \"let data of apiData\">\n    <li>{{data}} </li>\n    </ul>\n    "
        })
    ], GetRequestComponent);
    return GetRequestComponent;
}());
export { GetRequestComponent };
//# sourceMappingURL=fetch.component.js.map