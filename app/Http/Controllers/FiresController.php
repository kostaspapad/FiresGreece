<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Fire;

class FiresController extends Controller
{
       public function index()
       {
        // Select all and order by
        // With paginator. Must have {{$fires->links()}} in view
        $fires = Fire::orderBy('id','asc')->paginate(20);
        
        return view('fires.index')->with('fires', $fires);
       }
    
       public function show($id)
       {
            $fire = Fire::find($id);
           // dd($fire);
            return view('fires.show')->with('fire', $fire);
       }
   
       public function store(Request $request)
       {
           return Fire::create($request->all());
       }
   
       public function update(Request $request, $id)
       {
           $fire = Fire::findOrFail($id);
           $fire->update($request->all());
   
           return $fire;
       }
   
       public function delete(Request $request, $id)
       {
           $fire = Fire::findOrFail($id);
           $fire->delete();
   
           return 204;
       }
   
}
