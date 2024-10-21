<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AdditionalFeature extends Model
{
    protected $fillable = ['property_id', 'feature_name'];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }
}
