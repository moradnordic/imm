<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    protected $fillable = ['property_id', 'media_type', 'url'];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }
}
