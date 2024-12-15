<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthControlller;

Route::get('/', function () {
    return view('welcome');
});


Route::get("/signup",[AuthControlller::class,'signUpController']);