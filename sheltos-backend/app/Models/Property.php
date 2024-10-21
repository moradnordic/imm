<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Property extends Model
{

        protected $fillable = [
            'type', 'status', 'price', 'rooms', 'beds', 'baths', 'area', 'agency_id','image', 'description'
        ];



    public function address()
    {
        return $this->hasOne(Address::class);
    }

    public function media()
    {
        return $this->hasMany(Media::class);
    }

    public function additionalFeatures()
    {
        return $this->hasMany(AdditionalFeature::class);
    }

    public function agency()
    {
        return $this->belongsTo(Agency::class);
    }
}
