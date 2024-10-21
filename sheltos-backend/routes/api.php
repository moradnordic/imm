<?php
use Illuminate\Support\Facades\Route;


use App\Http\Controllers\PropertyController;
use App\Http\Controllers\AddressController;
use App\Http\Controllers\MediaController;
use App\Http\Controllers\AdditionalFeatureController;
use App\Http\Controllers\AgencyController;

use App\Http\Controllers\AuthController;


Route::post('/register', [AuthController::class, 'register']);

Route::post('/properties', [PropertyController::class, 'store']);
Route::get('/properties', [PropertyController::class, 'index']);

Route::get('/addresses', [AddressController::class, 'index']);
Route::post('/addresses', [AddressController::class, 'store']);


Route::post('/properties/media', [MediaController::class, 'store']);
Route::put('/properties/media/{id}', [MediaController::class, 'update']);
Route::delete('/properties/media/{id}', [MediaController::class, 'destroy']);

Route::post('/properties/features', [AdditionalFeatureController::class, 'store']);
Route::put('/properties/features/{id}', [AdditionalFeatureController::class, 'update']);
Route::delete('/properties/features/{id}', [AdditionalFeatureController::class, 'destroy']);

Route::post('/agencies', [AgencyController::class, 'store']);
Route::get('/agencies/{id}', [AgencyController::class, 'show']);
Route::put('/agencies/{id}', [AgencyController::class, 'update']);
Route::delete('/agencies/{id}', [AgencyController::class, 'destroy']);





















// use App\Http\Controllers\PropertyController;
// use App\Http\Controllers\AuthController;



// Route::post('/properties', [PropertyController::class, 'store']);
// Route::post('/register', [AuthController::class, 'register']);
// Route::post('/login', [AuthController::class, 'login']);

// Route::apiResource('properties', PropertyController::class);
