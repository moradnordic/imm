<?php

namespace App\Http\Controllers;

use App\Models\Agency;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class AgencyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $agency = Agency::all(); // Récupère toutes les adresses
            return response()->json($agency); // Renvoie les adresses au format JSON
        } catch (\Exception $e) {
            return response()->json(['error' => 'Erreur lors de la récupération des agences'], 500);
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
                'name' => 'required|string',
            ]);

            // Création de l'adresse
            $agency = Agency::create($validatedData);

            // Retourne une réponse de succès
            return response()->json(['message' => 'agence ajoutée avec succès', 'agence' => $agency], 201);
        } catch (ValidationException $e) {
            // Renvoie les erreurs de validation
            return response()->json(['errors' => $e->validator->errors()], 422);
        } catch (\Exception $e) {
            // Gère les autres exceptions et fournit plus d'informations
            return response()->json(['error' => 'Erreur lors de l\'ajout de l\'agence', 'message' => $e->getMessage()], 500);
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
