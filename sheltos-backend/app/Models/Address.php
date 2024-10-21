<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $fillable = [
        'property_id',
        'street',
        'zip_code',  // Ajoutez cette ligne pour le code postal
        'country',   // Ajoutez cette ligne pour le pays
        'city',      // Ajoutez cette ligne pour la ville
        'landmark',  // Ajoutez cette ligne pour le point de repère
    ];

    public function property()
    {
        return $this->belongsTo(Property::class);
    }
}
