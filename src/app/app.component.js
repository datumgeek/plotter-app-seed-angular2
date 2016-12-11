var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core'], function (require, exports, core_1) {
    "use strict";
    var AppComponent = (function () {
        function AppComponent() {
            this.title = 'app works!';
        }
        AppComponent = __decorate([
            core_1.Component({
                selector: 'app-root',
                templateUrl: './app.component.html',
                styles: [require('bootstrap/dist/css/bootstrap.css'),
                    "\n      .heading {\n          background-color: cadetblue;\n          margin: 0;\n          padding: 0;\n      }\n\n      .body {\n          background-color: orange;\n      }\n    "
                ]
            }), 
            __metadata('design:paramtypes', [])
        ], AppComponent);
        return AppComponent;
    }());
    exports.AppComponent = AppComponent;
});
//# sourceMappingURL=app.component.js.map