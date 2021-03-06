<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $table = "post";

    public $timestamps = true;

    protected $primaryKey = "id";

    protected $fillable = [
        'title',
        'description'
    ];
    
}
