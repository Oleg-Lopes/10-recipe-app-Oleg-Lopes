<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    //
    protected $fillable = [
        'id',
        'label',
        'ingredients',
        'health_labels',
        'calories',
        'user_id'
    ];
}
