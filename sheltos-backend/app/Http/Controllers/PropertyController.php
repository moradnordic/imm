<?php

namespace App\Http\Controllers;

use App\Models\Property;
use Illuminate\Http\Request;

class PropertyController extends Controller
{

    public function index()
    {
        $properties = Property::with(['address', 'media', 'additionalFeatures', 'agency'])->get();

        return response()->json($properties);
    }

    public function store(Request $request)
    {
        // Validation des données
        $validatedData = $request->validate([
            'type' => 'required|string|max:255',
            'status' => 'required|string|max:255',
            'price' => 'required|numeric',
            'rooms' => 'required|integer',
            'beds' => 'required|integer',
            'baths' => 'required|integer',
            'area' => 'required|string|max:255',
            'agency_id' => 'nullable|integer',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Validation de l'image
            'description' => 'nullable|string',
        ]);

        // Création de la nouvelle propriété
        $property = new Property();
        $property->type = $validatedData['type'];
        $property->status = $validatedData['status'];
        $property->price = $validatedData['price'];
        $property->rooms = $validatedData['rooms'];
        $property->beds = $validatedData['beds'];
        $property->baths = $validatedData['baths'];
        $property->area = $validatedData['area'];
        $property->agency_id = $validatedData['agency_id'] ?? null;
        $property->description = $validatedData['description'] ?? null;

        // Gestion du téléchargement de l'image
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->move(public_path('images/properties'), $imageName);
            $property->image = 'images/properties/' . $imageName;
        }

        // Sauvegarder la propriété dans la base de données
        $property->save();

        return response()->json([
            'message' => 'Propriété ajoutée avec succès',
            'property' => $property
        ], 201);
    }


}









// {
//     public function index()
//     {
//         return Property::all();
//     }

//     public function store(Request $request)
//     {
//         $validatedData = $request->validate([
//             'title' => 'required|string|max:255',
//             'description' => 'required|string',
//             'price' => 'required|numeric',
//             'location' => 'required|string|max:255',
//         ]);

//         $property = Property::create($validatedData);

//         return response()->json($property, 201);  // 201 Created
//     }

//     public function show($id)
//     {
//         return Property::findOrFail($id);
//     }

//     public function update(Request $request, $id)
//     {
//         $validatedData = $request->validate([
//             'title' => 'required|string|max:255',
//             'description' => 'required|string',
//             'price' => 'required|numeric',
//             'location' => 'required|string|max:255',
//         ]);

//         $property = Property::findOrFail($id);
//         $property->update($validatedData);

//         return response()->json($property, 200);  // 200 OK
//     }

//     public function destroy($id)
//     {
//         $property = Property::findOrFail($id);
//         $property->delete();

//         return response()->json(['message' => 'Propriété supprimée'], 204);  // 204 No Content
//     }
// }
