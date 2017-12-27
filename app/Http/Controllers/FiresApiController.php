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

    public function id($id)
    {
        $fire = Fire::find($id);
        return response()->json($fire, 200);
    }

    public function service($service)
    {
        $fires = Fire::where('ypiresia', '=', $service)->get();
        return response()->json($fires, 200);
    }

    public function province($province)
    {
        $fires = Fire::where('nomos', '=', $province)->get();
        return response()->json($fires, 200);
    }
    
    public function location($location)
    {
        dd($location->input('test'));
        $fires = Fire::where('perioxi', '=', $location)->get();
        return response()->json($fires, 200);
    }

    public function municipality($municipality)
    {
        $fires = Fire::where('dhmos', '=', $municipality)->get();
        return response()->json($fires, 200);
    }

    public function address($address)
    {
        $fires = Fire::where('dhmos', '=', $address)->get();
        return response()->json($fires, 200);
    }

    public function timeStart($time)
    {
        $fires = Fire::where('ora_arxi', '=', $time)->get();
        return response()->json($fires, 200);
    }

    public function timeEnd($time)
    {
        $fires = Fire::where('ora_telous', '=', $time)->get();
        return response()->json($fires, 200);
    }

    public function dateStart($date)
    {
        //$users = User::where('votes', '>', 100)->take(10)->get();
        $fires = Fire::where('hm_arxi', '=', $date)->get();
        return response()->json($fires, 200);
    }

    public function dateEnd($date)
    {
        $fires = Fire::where('hm_telous', '=', $date)->get();
        return response()->json($fires, 200);
    }

    public function dateFromTo($dateFrom, $dateTo)
    {
        $fires = Fire::whereDate('hm_arxi', '>=', $dateFrom)
            ->whereDate('hm_arxi', '<=', $dateTo)
            ->get();
    }

    public function dateStartEnd($dateStart, $dateEnd)
    {
        $fires = Fire::whereDate('hm_arxi', '>=', $dateStart)
            ->whereDate('hm_telous', '<=', $dateEnd)
            ->get();
        
        return response()->json($fires, 200);
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
