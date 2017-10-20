<?php

use Illuminate\Http\Request;
Use App\Fire;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('fires', 'FiresApiController@index');
Route::get('fires/{id}', 'FiresApiController@show');
Route::post('fires', 'FiresApiController@store');
Route::put('fires/{fire}', 'FiresApiController@update');
Route::delete('fires/{fire}', 'FiresApiController@delete');

// Route::get('fires', 'FiresApiController@index');
// Route::get('fires/{id}', 'FiresApiController@show');
// Route::post('fires', 'FiresApiController@store');
// Route::put('fires/{id}', 'FiresApiController@update');
// Route::delete('fires/{id}', 'FiresApiController@delete');