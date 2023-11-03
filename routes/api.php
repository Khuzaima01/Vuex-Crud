<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/users', function () {
    $users = User::all();
    return $users;
});

Route::post('/create/user', function (Request $request) {
    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => $request->password,
    ]);
    $newUser = User::where('email', $request->email)->first();
    return response()->json([
        'newUser' => $newUser,
        'message' => 'User added Successfully',
    ]);
});


Route::post('/delete/user/{id}', function ($id) {
    $users = User::where('id', $id)->delete();
    return response()->json([
        'UserDeleted' => 'User deleted Successfully.',
    ]);
});
