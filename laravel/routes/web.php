<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    if (Auth::check()) {
        return redirect('recipe-app');
    } else {
        return redirect('login');
    }
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::post('/favorites/add', 'RecipesController@store')->name('addFav');

Route::get('/auth', function(){
    if(!Auth::check()) {
        $user = App\User::find(1);
        Auth::login($user);
    }

    return Auth::user();
});