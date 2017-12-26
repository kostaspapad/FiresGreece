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

// API global search
Route::get('api/fires/id/{id}', 'FiresApiController@id');
Route::get('api/fires/date/{date}', 'FiresApiController@date');
Route::get('api/fires/timestart/{time}', 'FiresApiController@timeStart');
Route::get('api/fires/timeend/{time}', 'FiresApiController@timeEnd');
Route::get('api/fires/datestart/{date}', 'FiresApiController@dateStart');
Route::get('api/fires/dateend/{date}', 'FiresApiController@dateEnd');
Route::get('api/fires/service/{service}', 'FiresApiController@service');
Route::get('api/fires/province/{province}', 'FiresApiController@province');
Route::get('api/fires/location/{location}', 'FiresApiController@location');
Route::get('api/fires/municipality/{municipality}', 'FiresApiController@municipality');
Route::get('api/fires/address/{address}', 'FiresApiController@address');


Route::get('api/fires/datefrom/{datefrom}/dateto/{date}', 'FiresApiController@dateFromTo');
Route::get('api/fires/datestartend/{datestart}/dateend/{dateend}', 'FiresApiController@dateStartEnd');


// Gets initial geolocation data
Route::get('initgeodata', 'FiresController@getInitGeoData');

// Get fire info for location on map
Route::post('getcitiesdimos', 'FiresController@getCitiesDimos');

Route::post('searchfires', 'SearchController@searchfires');

Route::get('autocomplete', 'SearchController@autoComplete');