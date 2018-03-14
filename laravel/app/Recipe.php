<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    //
    protected $fillable = [
        'id',
        'label',
        'image',
        'ingredients',
        'health_labels',
        'calories',
        'user_id'
    ];
}
