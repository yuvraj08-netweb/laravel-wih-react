<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function signUpController(Request $request)
    {
        return response()->json(['message' => 'Signup successful']);
    }
}
