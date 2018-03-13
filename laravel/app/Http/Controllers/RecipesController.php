<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Support\Facades\Auth;
use App\Recipe;
use Illuminate\Http\Request;

class RecipesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return Recipe::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        if(Auth::check()) {
            $recipe = new Recipe();
            $recipe->user_id = Auth::id();

            $recipe->label = $request->label; // WORKS
            $recipe->ingredients = ""; // WORKS
            foreach($request->ingredientLines as $ingredientLine) {
                $recipe->ingredients .= " " . $ingredientLine;
            }
            $recipe->health_labels = ""; // WORKS
            foreach($request->healthLabels as $healthLabel) {
                $recipe->health_labels .= " " . $healthLabel;
            }
            $recipe->calories = $request->calories; // WORKS
            $recipe->save();
            return $request;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Recipe  $recipe
     * @return \Illuminate\Http\Response
     */
    public function show($label)
    {
        //
        if(Auth::check()) {
            return Recipe::where(['label', '=', $label], ['user_id', '=', Auth::user()->id]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Recipe  $recipe
     * @return \Illuminate\Http\Response
     */
    public function edit(Recipe $recipe)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Recipe  $recipe
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Recipe $recipe)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Recipe  $recipe
     * @return \Illuminate\Http\Response
     */
    public function destroy(Recipe $recipe)
    {
        //
    }
}
