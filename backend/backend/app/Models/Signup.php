<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Signup extends Model
{
    protected $fillable=[
        'name',
        'email'
    ];

    protected $hidden=[
"password"
    ];

    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
