<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Fire;

class FiresApiController extends Controller
{
    public function index()
    {
        return Fire::all();
    }

    public function show($id)
    {
        $fire = Fire::find($id);
        return response()->json($fire, 200);
    }

    public function store(Request $request)
    {
        $fire = Fire::create($request->all());

        return response()->json($fire, 201);
    }

    public function update(Request $request, Fire $fire)
    {
        $fire->update($request->all());

        return response()->json($fire, 200);
    }

    public function delete(Fire $fire)
    {
        $fire->delete();

        return response()->json(null, 204);
    }
      
    //    public function index()
    //    {
    //        return Fire::all();
    //    }
    
    //    public function show($id)
    //    {
    //        return Fire::find($id);
    //    }
   
    //    public function store(Request $request)
    //    {
    //        return Fire::create($request->all());
    //    }
   
    //    public function update(Request $request, $id)
    //    {
    //        $fire = Fire::findOrFail($id);
    //        $fire->update($request->all());
   
    //        return $fire;
    //    }
   
    //    public function delete(Request $request, $id)
    //    {
    //        $fire = Fire::findOrFail($id);
    //        $fire->delete();
   
    //        return 204;
    //    }
   
}
