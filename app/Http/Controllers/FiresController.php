<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;
use App\Fire;
use League\Geotools\Coordinate\Ellipsoid;
use Toin0u\Geotools\Facade\Geotools;

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
   
       // Get initial for map, this function is executed when the page loads
       public function getInitGeoData(){
            $f = DB::table('fires')
                    ->select('dimos', 
                            DB::raw('count(dimos) as total'),
                            'geo_address_dimos',
                            'geo_latitude_dimos',
                            'geo_longitude_dimos')
                    ->whereNotNull('dimos')
                    ->groupBy('dimos', 'geo_address_dimos', 'geo_latitude_dimos','geo_longitude_dimos')
                    ->get();
            return response()->json($f);
       }

       // User clicks on fire icon on map, return data for the location he clicked
       public function getCitiesDimos(Request $request){
            $loc = $request->input('loc');

            $fires = DB::table('fires')
                    ->select('id',
                             'hm_arxi',
                             'hm_telous',
                             'diefthinsi')
                    ->where('dimos', '=', $loc)
                    ->get();

            //return response()->json($f);
            //$returnHTML = view('modal-body-view',[' info'=> $f])->render();
            return view('layouts.partials.location_fire_table')->with('fires', $fires);   
       }

}
