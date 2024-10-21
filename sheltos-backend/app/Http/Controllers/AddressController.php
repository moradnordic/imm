<?php
namespace App\Http\Controllers;

use App\Models\Address;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class AddressController extends Controller
{
    public function store(Request $request)
    {
        try {
            // Validation des données du formulaire
            $validatedData = $request->validate([
                'property_id' => 'required|exists:properties,id',
                'street' => 'required|string',
                'zip_code' => 'required|string',  // Code postal
                'city' => 'required|string',      // Ville
                'country' => 'required|string',   // Pays

            ]);

            // Création de l'adresse
            $address = Address::create($validatedData);

            // Retourne une réponse de succès
            return response()->json(['message' => 'Adresse ajoutée avec succès', 'address' => $address], 201);
        } catch (ValidationException $e) {
            // Renvoie les erreurs de validation
            return response()->json(['errors' => $e->validator->errors()], 422);
        } catch (\Exception $e) {
            // Gère les autres exceptions et fournit plus d'informations
            return response()->json(['error' => 'Erreur lors de l\'ajout de l\'adresse', 'message' => $e->getMessage()], 500);
        }
    }
}
