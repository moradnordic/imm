<?php

namespace App\Http\Controllers;

use App\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class MediaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $media = Media::all(); // Récupère toutes les adresses
            return response()->json($media); // Renvoie les adresses au format JSON
        } catch (\Exception $e) {
            return response()->json(['error' => 'Erreur lors de la récupération des adresses'], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            // Validation des données
            $validatedData = $request->validate([
                'property_id' => 'required|exists:properties,id',
                'media_type' => 'required|string',
                'url' => 'string',
          ]);

            // Création de l'adresse
            $media = Media::create($validatedData);

            // Retourne une réponse de succès
            return response()->json(['message' => 'Media ajoutée avec succès', 'media' => $media], 201);
        } catch (ValidationException $e) {
            // Renvoie les erreurs de validation
            return response()->json(['errors' => $e->validator->errors()], 422);
        } catch (\Exception $e) {
            // Gère les autres exceptions et fournit plus d'informations
            return response()->json(['error' => 'Erreur lors de l\'ajout de l\'adresse', 'message' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
