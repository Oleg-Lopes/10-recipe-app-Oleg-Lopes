webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.title = "app";
    }
    AppComponent.prototype.ngOnInit = function () {
        this.http.get("http://localhost:8000/auth").subscribe(function (data) { }, function (error) {
            window.location.href = "http://localhost:8000/login";
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-root",
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recipes_recipes_component__ = __webpack_require__("../../../../../src/app/recipes/recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__recipes_service__ = __webpack_require__("../../../../../src/app/recipes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__recipe_routing_module__ = __webpack_require__("../../../../../src/app/recipe-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__recipe_detail_recipe_detail_component__ = __webpack_require__("../../../../../src/app/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__favorites_favorites_component__ = __webpack_require__("../../../../../src/app/favorites/favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__favorite_detail_favorite_detail_component__ = __webpack_require__("../../../../../src/app/favorite-detail/favorite-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__recipes_recipes_component__["a" /* RecipesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__recipe_detail_recipe_detail_component__["a" /* RecipeDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_10__favorites_favorites_component__["a" /* FavoritesComponent */],
                __WEBPACK_IMPORTED_MODULE_11__favorite_detail_favorite_detail_component__["a" /* FavoriteDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__recipe_routing_module__["a" /* RecipeRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__recipes_service__["a" /* RecipesService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/favorite-detail/favorite-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainDiv {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.ingredients {\n  width: 600px;\n}\n.logout {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/favorite-detail/favorite-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainDiv\">\n  <div class=\"curRecipe\" *ngFor=\"let recipe of currentFavorite\">\n    <button (click)=\"backToFavorites()\">&crarr; Back to Favorites</button>\n    <button (click)=\"goToRecipes()\">Search new recipes</button>\n    <button class=\"logout\" (click)=\"logout()\">Log out</button>\n    <h1>{{recipe.label}}</h1>\n    <img src=\"{{recipe.image}}\">\n    <p>{{recipe.calories | number: '1.0-0'}} kcal</p>\n    <p class=\"ingredients\">{{recipe.ingredients}}</p>\n    <p>{{recipe.health_labels}}</p>\n    <button (click)=\"deleteFavorite(recipe)\">Delete Favorite</button>\n    <div>\n      <router-outlet></router-outlet>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/favorite-detail/favorite-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoriteDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipes_service__ = __webpack_require__("../../../../../src/app/recipes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FavoriteDetailComponent = /** @class */ (function () {
    function FavoriteDetailComponent(http, route, recipesService, router) {
        this.http = http;
        this.route = route;
        this.recipesService = recipesService;
        this.router = router;
        this.currentFavorite = this.recipesService.currentFavorite;
    }
    FavoriteDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http
            .get("http://localhost:8000/recipe-app/favorites")
            .subscribe(function (data) {
            _this.favorites = data;
        }, function (error) {
            console.log("error", error);
        });
    };
    FavoriteDetailComponent.prototype.deleteFavorite = function (recipe) {
        this.recipesService.deleteFavorite(recipe, this.favorites);
    };
    FavoriteDetailComponent.prototype.goToRecipes = function () {
        this.recipesService.goToRecipes();
    };
    FavoriteDetailComponent.prototype.backToFavorites = function () {
        this.recipesService.goToFavorites();
    };
    FavoriteDetailComponent.prototype.logout = function () {
        this.recipesService.logout();
    };
    FavoriteDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-favorite-detail",
            template: __webpack_require__("../../../../../src/app/favorite-detail/favorite-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/favorite-detail/favorite-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__recipes_service__["a" /* RecipesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], FavoriteDetailComponent);
    return FavoriteDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/favorites/favorites.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".head {\r\n  text-align: center;\r\n}\r\n\r\n.main-div {\r\n  cursor: pointer;\r\n}\r\n\r\n.logout {\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/favorites/favorites.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"head\">\n  <button (click)=\"goToRecipes()\">&crarr; Search new recipes</button>\n  <button class=\"logout\" (click)=\"logout()\">Log out</button>\n  <h1>Favorite Recipes</h1>\n  <hr>\n</div>\n\n<div class=\"main-div\">\n  <div class=\"recipes\">\n    <div class=\"recipe\" *ngFor=\"let favorite of favorites\">\n      <h2 (click)=\"openFavorite(favorite)\">{{favorite.label}}</h2>\n      <button (click)=\"deleteFavorite(favorite)\">Delete Favorite</button>\n      <br>\n      <br>\n      <img (click)=\"openFavorite(favorite)\" class=\"recipeImg\" src=\"{{favorite.image}}\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/favorites/favorites.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipes_service__ = __webpack_require__("../../../../../src/app/recipes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(http, route, recipesService, router) {
        this.http = http;
        this.route = route;
        this.recipesService = recipesService;
        this.router = router;
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http
            .get("http://localhost:8000/recipe-app/favorites")
            .subscribe(function (data) {
            _this.favorites = data;
        }, function (error) {
            console.log("error", error);
        });
    };
    FavoritesComponent.prototype.openFavorite = function (recipe) {
        this.recipesService.getCurrentFavorite(recipe);
        this.router.navigate(["/favorites", recipe.label]);
    };
    FavoritesComponent.prototype.deleteFavorite = function (recipe) {
        this.recipesService.deleteFavorite(recipe, this.favorites);
    };
    FavoritesComponent.prototype.goToRecipes = function () {
        this.recipesService.goToRecipes();
    };
    FavoritesComponent.prototype.logout = function () {
        this.recipesService.logout();
    };
    FavoritesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-favorites",
            template: __webpack_require__("../../../../../src/app/favorites/favorites.component.html"),
            styles: [__webpack_require__("../../../../../src/app/favorites/favorites.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__recipes_service__["a" /* RecipesService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/recipe-detail/recipe-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mainDiv {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.ingredients {\n  width: 600px;\n}\n.disabled {\n  display: none;\n}\n.logout {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recipe-detail/recipe-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mainDiv\">\n  <div class=\"curRecipe\" *ngFor=\"let recipe of currentRecipe\">\n    <button (click)=\"goToRecipes()\">&crarr; Back to recipes</button>\n    <button (click)=\"goToFavorites()\">Favorites</button>\n    <button class=\"logout\" (click)=\"logout()\">Log out</button>\n    <h1>{{recipe.label}}</h1>\n    <img src=\"{{recipe.image}}\">\n    <p>{{recipe.calories | number: '1.0-0'}} kcal</p>\n    <p class=\"ingredients\">{{recipe.ingredientLines}}</p>\n    <p *ngFor=\"let healthLabel of recipe.healthLabels\">{{healthLabel}}</p>\n    <button id=\"btn-add-fav\" (click)=\"addFavorite(recipe)\">Add Favorite</button>\n    <div>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  <script>angular.module(\"App\").constant(\"CSRF_TOKEN\", '{!! csrf_token() !!}');</script>"

/***/ }),

/***/ "../../../../../src/app/recipe-detail/recipe-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipes_service__ = __webpack_require__("../../../../../src/app/recipes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecipeDetailComponent = /** @class */ (function () {
    function RecipeDetailComponent(http, route, recipesService, router) {
        this.http = http;
        this.route = route;
        this.recipesService = recipesService;
        this.router = router;
        this.currentRecipe = this.recipesService.currentRecipe;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http
            .get("http://localhost:8000/recipe-app/favorites")
            .subscribe(function (data) {
            _this.favorites = data;
        }, function (error) {
            console.log("error", error);
        });
    };
    RecipeDetailComponent.prototype.addFavorite = function (recipe) {
        this.recipesService.addFavorite(recipe, this.favorites);
        document.getElementById("btn-add-fav").classList.add("disabled");
    };
    RecipeDetailComponent.prototype.goToFavorites = function () {
        this.recipesService.goToFavorites();
    };
    RecipeDetailComponent.prototype.goToRecipes = function () {
        this.recipesService.goToRecipes();
    };
    RecipeDetailComponent.prototype.logout = function () {
        this.recipesService.logout();
    };
    RecipeDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-recipe-detail",
            template: __webpack_require__("../../../../../src/app/recipe-detail/recipe-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/recipe-detail/recipe-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__recipes_service__["a" /* RecipesService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/recipe-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipes_recipes_component__ = __webpack_require__("../../../../../src/app/recipes/recipes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipe_detail_recipe_detail_component__ = __webpack_require__("../../../../../src/app/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__favorites_favorites_component__ = __webpack_require__("../../../../../src/app/favorites/favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__favorite_detail_favorite_detail_component__ = __webpack_require__("../../../../../src/app/favorite-detail/favorite-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: "favorites", component: __WEBPACK_IMPORTED_MODULE_4__favorites_favorites_component__["a" /* FavoritesComponent */] },
    { path: "favorites/:label", component: __WEBPACK_IMPORTED_MODULE_5__favorite_detail_favorite_detail_component__["a" /* FavoriteDetailComponent */] },
    { path: "recipes", component: __WEBPACK_IMPORTED_MODULE_2__recipes_recipes_component__["a" /* RecipesComponent */] },
    { path: "recipes/:label", component: __WEBPACK_IMPORTED_MODULE_3__recipe_detail_recipe_detail_component__["a" /* RecipeDetailComponent */] },
    { path: "", redirectTo: "/recipes", pathMatch: "full" },
    { path: "**", redirectTo: "/recipes", pathMatch: "full" }
];
var RecipeRoutingModule = /** @class */ (function () {
    function RecipeRoutingModule() {
    }
    RecipeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], RecipeRoutingModule);
    return RecipeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/recipes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RecipesService = /** @class */ (function () {
    function RecipesService(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.input = "";
        this.recipes = [];
        this.currentRecipe = [];
        this.favorites = [];
        this.currentFavorite = [];
    }
    RecipesService.prototype.findRecipes = function () {
        var _this = this;
        this.recipes.length = 0;
        this.http
            .get("https://api.edamam.com/search?q=" +
            this.input +
            "&app_id=afce4894&app_key=59d326ef485c23643512fd46521405bc&from=0&to=16")
            .subscribe(function (res) {
            var api = res.json();
            api.hits.forEach(function (hits, index) {
                _this.recipes.push(hits.recipe);
            });
        });
    };
    RecipesService.prototype.getCurrentRecipe = function (recipe) {
        var _this = this;
        this.currentRecipe.length = 0;
        this.recipes.forEach(function (recipes, index) {
            if (_this.recipes[index].label == recipe.label) {
                _this.currentRecipe.push(_this.recipes[index]);
            }
        });
    };
    RecipesService.prototype.getCurrentFavorite = function (recipe) {
        this.currentFavorite.length = 0;
        this.currentFavorite.push(recipe);
    };
    RecipesService.prototype.addFavorite = function (recipe, favorites) {
        var duplicate = false;
        favorites.forEach(function (favorite, index) {
            if (favorite.label == recipe.label) {
                duplicate = true;
            }
        });
        if (!duplicate) {
            this.http.post("http://localhost:8000/favorites/add", recipe).subscribe(function (res) {
                console.log("Recipe added to favorites");
            }, function (error) {
                console.log("Something went wrong...", error);
            });
        }
    };
    RecipesService.prototype.deleteFavorite = function (recipe, favorites) {
        favorites.forEach(function (favorite, index) {
            if (favorite.label == recipe.label) {
                favorites = favorites.splice(index, 1);
            }
        });
        this.http
            .delete("http://localhost:8000/favorites/delete/" + recipe.id)
            .subscribe(function (res) {
            console.log("Recipe deleted from favorites");
        }, function (error) {
            console.log("Something went wrong...", error);
        });
        this.goToFavorites();
    };
    RecipesService.prototype.goToFavorites = function () {
        this.router.navigate(["/favorites"]);
    };
    RecipesService.prototype.goToRecipes = function () {
        this.router.navigate(["/recipes"]);
    };
    RecipesService.prototype.logout = function () {
        window.location.href = "http://localhost:8000/logout";
    };
    RecipesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], RecipesService);
    return RecipesService;
}());



/***/ }),

/***/ "../../../../../src/app/recipes/recipes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".head {\n  text-align: center;\n} /* You can add global styles to this file, and also import other style files */ .main-div {\n  cursor: pointer;\n} .logout {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recipes/recipes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"head\">\n  <button (click)=\"goToFavorites()\">Favorites</button>\n  <button class=\"logout\" (click)=\"logout()\">Log out</button>\n  <h1>Find your Food Recipes</h1>\n  <hr>\n  <input type=\"text\" [(ngModel)]=recipesService.input>\n  <button (click)=recipesService.findRecipes()>Search recipe</button>\n  <hr>\n</div>\n\n<div class=\"main-div\">\n  <div class=\"recipes\">\n    <div (click)=\"openRecipe(recipe)\" class=\"recipe\" *ngFor=\"let recipe of recipes\">\n      <h2>{{recipe.label}}</h2>\n      <img class=\"recipeImg\" src=\"{{recipe.image}}\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/recipes/recipes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipes_service__ = __webpack_require__("../../../../../src/app/recipes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecipesComponent = /** @class */ (function () {
    function RecipesComponent(route, recipesService, router, http) {
        this.route = route;
        this.recipesService = recipesService;
        this.router = router;
        this.http = http;
        this.recipes = this.recipesService.recipes;
    }
    RecipesComponent.prototype.ngOnInit = function () { };
    RecipesComponent.prototype.goToFavorites = function () {
        this.recipesService.goToFavorites();
    };
    RecipesComponent.prototype.logout = function () {
        this.recipesService.logout();
    };
    RecipesComponent.prototype.openRecipe = function (recipe) {
        this.recipesService.getCurrentRecipe(recipe);
        this.router.navigate(["/recipes", recipe.label]);
    };
    RecipesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-recipes",
            template: __webpack_require__("../../../../../src/app/recipes/recipes.component.html"),
            styles: [__webpack_require__("../../../../../src/app/recipes/recipes.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__recipes_service__["a" /* RecipesService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RecipesComponent);
    return RecipesComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map