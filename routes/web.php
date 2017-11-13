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
    return view('welcome');
});

//Route::resource('/fires', 'FiresController');

Route::get('/', 'FiresController@index');
Route::get('fires/{id}', 'FiresController@show');
Route::post('fires', 'FiresController@store');
Route::put('fires/{fire}', 'FiresController@update');
Route::delete('fires/{fire}', 'FiresController@delete');

// API
Route::get('api/fires/{id}', 'FiresApiController@show');

// Gets initial geolocation data
Route::get('initgeodata', 'FiresController@getInitGeoData');

// Get fire info for location on map
Route::post('getcitiesdimos', 'FiresController@getCitiesDimos');

Route::post('searchfires', 'SearchController@searchfires');

Route::get('autocomplete', 'SearchController@autoComplete');