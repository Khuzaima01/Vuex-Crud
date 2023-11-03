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

// route to get all the users
Route::get('/users', function () {
    $users = User::all();
    return $users;
});

// route to create a new user
Route::post('/create/user', function (Request $request) {
    $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
    ]);
    $newUser = User::where('email', $request->email)->first();
    return response()->json([
        'newUser' => $newUser,
        'message' => 'User added Successfully',
    ]);
});

// route to update a user
Route::post('/update/user/{id}', function (Request $request, $id) {
    $user = User::where('id', $id)->first();

    $user->update([
        'name' => $request->name,
        'email' => $request->email,
    ]);

    return response()->json([
        'updatedUser' => $user,
        'message' => 'User updated Successfully',
    ]);
});

// route to delete a user
Route::post('/delete/user/{id}', function ($id) {
    $users = User::where('id', $id)->delete();
    return response()->json([
        'UserDeleted' => 'User deleted Successfully.',
    ]);
});
