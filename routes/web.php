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
Route::get('/student/register', [
    'uses'=>'Etudiantcontroller@create',
    'as'=>'student.registre'
]
);
Route::post('/student/store', [
    'uses'=>'Etudiantcontroller@store',
    'as'=>'student.store'
]
);
Route::get('/student/list', [
    'uses'=>'Etudiantcontroller@index'
]
);