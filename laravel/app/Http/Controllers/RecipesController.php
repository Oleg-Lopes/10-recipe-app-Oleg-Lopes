<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
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
        $recipes = Recipe::where('user_id', '=', Auth::id())->get();
        return $recipes;
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
            $recipe->image = $request->image; // WORKS
            $recipe->ingredients = ""; // WORKS
            $i = 0;
            foreach($request->ingredientLines as $ingredientLine) {
                if($i == 0){
                    $recipe->ingredients .= $ingredientLine;
                } else {
                    $recipe->ingredients .= ", " . $ingredientLine;
                }
                $i++;
            }
            $recipe->health_labels = ""; // WORKS
            $i = 0;
            foreach($request->healthLabels as $healthLabel) {
                if($i == 0){
                    $recipe->health_labels .= $healthLabel;
                } else {
                    $recipe->health_labels .= ", " . $healthLabel;
                }
                $i++;
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
    public function destroy($id)
    {
        //
        DB::table('recipes')->where('id', '=', $id)->delete();
    }
}
